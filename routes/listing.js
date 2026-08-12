const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js")
const upload = multer({storage})

router
  .route("/")
  .get(wrapAsync(listingController.index)) //all Data show route
  .post(
    //create route
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing)
  );
  
  //new route
  router.get("/new", isLoggedIn, listingController.newListing);

router
  .route("/:id")
  .patch(
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.deleteListing)
  )
  .get( wrapAsync(listingController.showListing));


//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.editListing)
);

router.get(
  "/filter/:filter",
  wrapAsync(listingController.filterListing)
)

module.exports = router;

//all Data show route
// router.get(
//   "/",
//   wrapAsync(listingController.index)
// );

//create route
// router.post(
//   "/",
//   isLoggedIn,
//   validateListing,
//   wrapAsync(listingController.creatingListing)
// );


//update route
// router.patch(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   validateListing,
//   wrapAsync(listingController.updateListing)
// );

//Delete route
// router.delete(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   wrapAsync(listingController.deleteListing)
// );

//show Data by id route
// router.get("/:id", wrapAsync(listingController.showListing));

