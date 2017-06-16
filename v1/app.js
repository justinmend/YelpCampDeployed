var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://farm3.staticflickr.com/2923/13950231147_7032e443a0.jpg"},
        {name: "Granite Hill", image: "https://farm4.staticflickr.com/3659/3662521481_4a7bcce691.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"}
        ]
        res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started.");
});