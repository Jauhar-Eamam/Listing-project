const User = require("../models/user")

module.exports.signUpPage = (req, res) => {
  res.render("users/signup.ejs");
}

module.exports.signUp = async (req, res, next) => {
    try {
      console.log("[routes/user] POST /signup received body:", req.body);
      let { username, email, password } = req.body;
      const newUser = new User({ username, email });

      const registredUser = await User.register(newUser, password);
      console.log(registredUser);
      req.logIn(registredUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("success", `Welcome to Wonderlust!, ${registredUser.username} `);
        res.redirect("/listings");
      });
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  }


module.exports.logInPage = (req, res) => {
  res.render("users/login.ejs");
}

module.exports.logIn = async (req, res, next) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      req.flash("error", `User "${username}" not found`);
      return res.redirect("/login");
    }

    // Use passport-local-mongoose helper to verify password
    const authResult = await user.authenticate(password);

    if (!authResult.user) {
      req.flash("error", "Invalid username or password");
      return res.redirect("/login");
    }

    req.logIn(authResult.user, (err) => {
      if (err) {
        return next(err);
      }
      req.flash(
        "success",
        `Welcome back, ${authResult.user.username}!  on Wanderlust`
      );
      let redirectUrl = res.locals.redirectUrl;
      if(redirectUrl) {
        res.redirect(redirectUrl);
      } else {
        res.redirect("/listings")
      }
    });
  }

module.exports.logOut = (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }

    req.flash("success", "You are logged Out!");
    res.redirect("/listings");
  });
};