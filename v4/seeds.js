var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
    name: "Cloud's Rest",
    image: "https://farm8.staticflickr.com/7179/6927088769_cc14a7c68e.jpg",
    description: "blah blah blah blah"
    },
    {
    name: "Bleek Mountain",
    image: "https://farm3.staticflickr.com/2054/2229707213_302c00f6b5.jpg",
    description: "blah blah blah blah"
    },
    {
    name: "Crest Valley",
    image: "https://farm3.staticflickr.com/2315/3625837878_044be7aa1f.jpg",
    description: "blah blah blah blah"
    }
];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err) {
            console.log(err);
        }
        console.log("removed campgrounds!");
        // add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                    // create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    });
    // add a few comments
}

module.exports = seedDB;