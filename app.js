var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    User = require("./models/user"),
    //search = require("./public/scripts/search.js"), //Testing Search
    seedDB = require("./seeds");

// Removes the mpromise is deprecated warning on the terminal
mongoose.Promise = global.Promise;

 // Requiring routes
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    authRoutes = require("./routes/index");

var url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp_v12Deployed";
mongoose.connect(url);

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
app.locals.moment = require('moment');
// seedDB(); // Seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Shakira wins cutest dog.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next(); //Need to have next() in order to move on to next middleware
});

app.use("/", authRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

// FOR RUNNING ON c9 IDE
// app.listen(process.env.PORT, process.env.IP, function() {
//     console.log("The YelpCamp Server Has Started.");
// });

// FOR RUNNING ON LOCALHOST
app.listen(3001, 'localhost', function() {
  console.log("The YelpCamp Server Has Started.");
});
