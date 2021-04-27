const route = require("express").Router();
const passport = require("passport");
const UserModel = require("../models/UserModel");
route.get("/users/signin", (req, res) => {
  res.render("users/signin");
});
route.post("/users/signin", passport.authenticate("local",{
  successRedirect:'/notes',
  failureRedirect:'/users/signin',
  failureFlash:true
}));
route.get("/users/signup", (req, res) => {
  res.render("users/signup");
});
route.post("/users/signup", async (req, res) => {
  const { name, email, password, confirm_password } = req.body;
  const errors = [];
  if (name.length <= 0) {
    errors.push({ text: "Please insert your name" });
  }
  if (email.length <= 0) {
    errors.push({ text: "Please insert your email" });
  }
  if (password != confirm_password) {
    errors.push({ text: "Password do not match" });
  }
  if (password.length <= 4) {
    errors.push({ text: "Password must be at least 4 characters" });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      email,
    });
  } else {
    const emailUser = await UserModel.findOne({ email: email });
    if (emailUser) {
      errors.push({ text: "The email is already in use" });
      return res.render("users/signup", {
        errors,
        name,
        email,
      });
    }
    const newUser = new UserModel({ name, email, password });
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    req.flash("success_msg", "User added Successfull");
    res.redirect("/users/signin");
  }
});
route.get('/users/logout',(req,res)=>{
  req.logout()
  res.redirect('/')
})

module.exports = route;
