const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.newListing = (req, res) => {
  console.log(req.user);

  res.render("listings/new.ejs");
};

module.exports.createListing = async (req, res, next) => {
  // Safely handle optional file upload
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  if (req.file) {
    const url = req.file.path;
    const filename = req.file.filename;
    newListing.image = { url, filename };
  }
  await newListing.save();

  req.flash("success", "New listing created");

  res.redirect("/listings");
  console.log("done");
};
module.exports.editListing = async (req, res) => {
  let { id } = req.params;
  const list = await Listing.findById(id);

  if (!list) {
    req.flash("error", "Listing you requested for edit does not exist!");
    return res.redirect("/listings");
  }

  let originalImageUrl = list.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");

  res.render("listings/edit.ejs", { list, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;

  // Update fields and get the document instance
  const listing = await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    { new: true },
  );

  // If a new file was uploaded, attach it to the instance and save
  if (req.file) {
    const url = req.file.path;
    const filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing updated successfully");

  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;

  let list = await Listing.findByIdAndDelete(id);
  console.log(list);

  req.flash("success", "Listings deleted successfully!");
  res.redirect("/listings");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const list = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");

  if (!list) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { list });
};


module.exports.filterListing = async (req, res) => {
  let {filter} = req.params;

 const allListings = await Listing.find({types: filter})


  res.render("listings/index.ejs", {allListings});
}