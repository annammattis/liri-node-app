// add code to read and set any environment variables with the dotenv package:
require("dotenv").config();
// add the code required to import the keys.js file and store it in a variable
var keys = require("./keys.js");
// should then be able to access your keys information like so..
var spotify = new Spotify(keys.spotify);


// Make it so liri.js can take in one of the following commands:
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says