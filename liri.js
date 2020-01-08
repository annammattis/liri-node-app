// add code to read and set any environment variables with the dotenv package:
require("dotenv").config();
// add the code required to import the keys.js file and store it in a variable
var keys = require("./keys.js");
// should then be able to access your keys information like so..
var Spotify = require("node-spotify-api");
var axios = require("axios");
var fs = require("fs");



// Make it so liri.js can take in one of the following commands:
var concertThis = function(artist) {
    var region = "";
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
}

// ------------------------------------------------------------------------
var spotifyThisSong = function(song) {
    if (!song) {
        //default is I Want it That Way by Backstreet Boys
        song = "I Want it That Way"
    }
}

var spotify = new Spotify(keys.spotify);
spotify.search({ type: 'track', query: song, limit: 1}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });

//   ------------------------------------------------------------------------

var movieThis = function(movie) {
    //default will be Mr. Nobody
    if (!movie) {
        movie = "Mr. Nobody"
    }
    
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
}





var doWhatItSays = function() {
    fs.readfile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err)
        }

        var dataArr = data.split(",")
        //call appropriate arguement and pass function
        runAction(dataArr[0], dataArr[1])
    });
}

