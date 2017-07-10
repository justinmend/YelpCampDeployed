var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

// Root route
router.get("/", function(req, res) {
    res.render("landing");
});

// Show register form
router.get("/register", function(req, res){
    res.render("register", {page_name: 'register'});
});

// Handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    if(req.body.adminCode === 'secretcode123'){
      newUser.isAdmin = true;
    }
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            // return res.render("register", {"error": err.message});
            return res.redirect("/register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Succesfully Signed Up! Nice to meet you  " + user.username);
            res.redirect("/campgrounds");
        });
    });
});

// Show login form
router.get("/login", function(req, res){
    res.render("login", {page_name: 'login'});
});

// Handling login logic
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login",
        failureFlash: true,
        successFlash: 'Welcome to YelpCamp'
    }), function(req, res){
});

// Logout route
router.get("/logout", function(req,res){
    req.logout();
    req.flash("success", "Logged you out");
    res.redirect("/campgrounds");
});

module.exports = router;
