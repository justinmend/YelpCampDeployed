var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
    name: "Cloud's Rest",
    image: "https://farm8.staticflickr.com/7179/6927088769_cc14a7c68e.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie, mauris a condimentum laoreet, nibh lectus rhoncus nisi, tincidunt convallis ex odio ut enim. Praesent non elementum neque, eu porta dolor. Ut tincidunt magna accumsan ornare fermentum. Proin varius mi lectus, a volutpat lorem auctor vitae. In in nisl mattis, pulvinar nunc eget, iaculis risus. Duis non posuere diam. Pellentesque ultrices diam quis ipsum maximus, quis porttitor sem lobortis. Vestibulum sed risus sit amet erat fringilla tincidunt in porttitor lacus. Aliquam rhoncus dui id rutrum tristique. Maecenas condimentum, lacus at mattis lobortis, est nulla facilisis neque, ut fringilla ante nisl sed lacus. Nullam mauris mi, tempor ac lacus quis, lacinia finibus turpis."
    },
    {
    name: "Bleek Mountain",
    image: "https://farm3.staticflickr.com/2054/2229707213_302c00f6b5.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie, mauris a condimentum laoreet, nibh lectus rhoncus nisi, tincidunt convallis ex odio ut enim. Praesent non elementum neque, eu porta dolor. Ut tincidunt magna accumsan ornare fermentum. Proin varius mi lectus, a volutpat lorem auctor vitae. In in nisl mattis, pulvinar nunc eget, iaculis risus. Duis non posuere diam. Pellentesque ultrices diam quis ipsum maximus, quis porttitor sem lobortis. Vestibulum sed risus sit amet erat fringilla tincidunt in porttitor lacus. Aliquam rhoncus dui id rutrum tristique. Maecenas condimentum, lacus at mattis lobortis, est nulla facilisis neque, ut fringilla ante nisl sed lacus. Nullam mauris mi, tempor ac lacus quis, lacinia finibus turpis."
    },
    {
    name: "Crest Valley",
    image: "https://farm3.staticflickr.com/2315/3625837878_044be7aa1f.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie, mauris a condimentum laoreet, nibh lectus rhoncus nisi, tincidunt convallis ex odio ut enim. Praesent non elementum neque, eu porta dolor. Ut tincidunt magna accumsan ornare fermentum. Proin varius mi lectus, a volutpat lorem auctor vitae. In in nisl mattis, pulvinar nunc eget, iaculis risus. Duis non posuere diam. Pellentesque ultrices diam quis ipsum maximus, quis porttitor sem lobortis. Vestibulum sed risus sit amet erat fringilla tincidunt in porttitor lacus. Aliquam rhoncus dui id rutrum tristique. Maecenas condimentum, lacus at mattis lobortis, est nulla facilisis neque, ut fringilla ante nisl sed lacus. Nullam mauris mi, tempor ac lacus quis, lacinia finibus turpis."
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