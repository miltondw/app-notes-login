const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userModel = require("../models/UserModel");

// Verifying user
//If it exists the user adds it to the local strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      const user = await userModel.findOne({ email: email });
      if (!user) {
        return done(null, false, { message: "Not User Found" });
      } else {
        const match = await user.matchPassword(password);
        if (match) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect Password" });
        }
      }
    }
  )
);
// Add a user by their Id
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// Returns the user if it exists or an error 
passport.deserializeUser(async (id, done) => {
  await userModel.findById(id, (err, user) => {
    done(err, user);
  });
});
