const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
// const isLoggedIn = require("../middleware")
const { savedRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

router
  .route("/signup")
  .get( userController.signUpPage)
  .post( wrapAsync(userController.signUp));

// router.get("/signup", userController.signUpPage);

// router.post(
//   "/signup",
//   wrapAsync(userController.signUp)
// );

router.route("/login")
.get( userController.logInPage)
.post( savedRedirectUrl, wrapAsync(userController.logIn));


// router.get("/login", userController.logInPage);

// Login: manual authenticate (bypass passport middleware) with clearer errors
// router.post("/login", savedRedirectUrl, wrapAsync(userController.logIn));

router.get("/logout", userController.logOut);

module.exports = router;
