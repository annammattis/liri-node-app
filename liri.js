// add code to read and set any environment variables with the dotenv package:
require("dotenv").config();
// add the code required to import the keys.js file and store it in a variable
var keys = require("./keys.js");
// should then be able to access your keys information like so..
var Spotify = require("node-spotify-api");
var axios = require("axios");
var fs = require("fs");



// Make it so liri.js can take in one of the following commands:
// Takes an artist and searches the Bands in Town 
// Artist API for an artist and render information

var command = process.argv[2]
var artist = process.argv[3];

var concertThis = function(artist) {
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist.replace(" ", "+") + "/events?app_id=codingbootcamp";

// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")

axios.get(queryUrl)
  .then(function (response) {
    console.log('venue is', response.data[0].venue);
    console.log('date is', response.data[0].datetime);
  })
  .catch(function (error) {
    console.log(error);
  });

} 

if (command === 'concert-this') {
    concertThis(artist);   
}




// ------------------------------------------------------------------------
// This will take a song, search spotify and return information
// var spotifyThisSong = function(song) {
//     if (!song) {
//         //default is I Want it That Way by Backstreet Boys
//         song = "I Want it That Way"
//     }
// }

// // var spotify = new Spotify(keys.spotify);
// spotify.search({ type: 'track', query: song, limit: 1}, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(JSON.stringify(data, null, 2)); 
//   });


//   ------------------------------------------------------------------------
// This will take a movie, search IMDb and return information
// var movieThis = function(movie) {
//     //default will be Mr. Nobody
//     if (!movie) {
//         movie = "Mr. Nobody"
//     }

//     var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
// }

// axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     // Then we print out the imdbRating
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   }
// );



// var doWhatItSays = function() {
//     fs.readfile("random.txt", "utf8", function (err, data) {
//         if (err) {
//             return console.log(err)
//         }

//         var dataArr = data.split(",")
//         //call appropriate arguement and pass function
//         runAction(dataArr[0], dataArr[1])
//     });
// }

