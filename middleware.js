const Listing = require("./models/listing.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");
const Review = require("./models/review.js")


// middleware for check that user is loged or not 
module.exports.isLoggedIn = (req, res, next) => { 
  // console.log(req.originalUrl);
  
    if(!req.isAuthenticated()) {
      req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to create listing");
    return res.redirect("/login")
  }
  next();
}

// middleware for redirecting url, from user comes to login page
module.exports.savedRedirectUrl = (req, res, next) => {
  if(req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }

  next();
}

// middleware for check user is authorized or not 

module.exports.isOwner = async(req, res, next) => {
  let { id } = req.params;
  const list = await Listing.findById(id);
  if(!list) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  if(!list.owner._id.equals(res.locals.currentUser._id)) {
    req.flash("error", "You have no permission to edit this listings");
    return res.redirect(`/listings/${id}`)
  }

  next();
}


//validate listing
module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);

  if (error) {
    let errorMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errorMsg);
  } else {
    next();
  }
};


//validate reviews
module.exports.validateReviews = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);

  if (error) {
    let errorMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errorMsg);
  } else {
    next();
  }
};


// validate author

module.exports.isReviewAuthor = async(req, res, next) => {
  let {id, reviewId} = req.params;
  let review = await Review.findById(reviewId);
  if(!review) {
    req.flash("error", "Review not found");
    return res.redirect(`/listings/${id}`);
  }
  if(!review.author._id.equals(res.locals.currentUser._id)) {
    req.flash("error", "You are not author of this review");
    return res.redirect(`/listings/${id}`);
  }

  next();
}