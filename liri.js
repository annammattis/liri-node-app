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

var command = process.argv[2];
var artist = process.argv[3];

var concertThis = function (artist) {
  var queryUrl = "https://rest.bandsintown.com/artists/" + artist.replace(" ", "+") + "/events?app_id=codingbootcamp";


  axios.get(queryUrl)
    .then(function (response) {
      // Name of the venue
      console.log('venue is', response.data[0].venue);
      // Date of the Event
      console.log('date is', response.data[0].datetime);
      console.log(JSON.stringify(response, null, 2));
    })
    .catch(function (err) {
      console.log(err);

    });

}

if (command === 'concert-this') {
  concertThis(artist);
}




// ------------------------------------------------------------------------
// This will take a song, search spotify and return information
var command = process.argv[2];
var song = process.argv[3];
var spotifyThisSong = function (song) {
  if (!song) {
    //default is I Want it That Way by Backstreet Boys
    song = "I Want it That Way"
  }

  var spotify = new Spotify(keys.spotify);

  spotify.search({ type: 'track', query: song })
    .then(function (response) {
      // Artist(s)
      console.log('Artist is', response.tracks.items[0].artists[0].name);
      // The song's name
      console.log('Song is', response.tracks.items[0].name);
      // A preview link of the song from Spotify
      console.log('Link is', response.tracks.items[0].href);
      // The album that the song is from
      console.log('Album is', response.tracks.items[0].album.name);
      // console.log(JSON.stringify(response, null, 2)); 
    })
    .catch(function (err) {
      console.log(err);
    });
}

if (command === 'spotify-this-song') {
  spotifyThisSong(song);
}




//   ------------------------------------------------------------------------
// This will take a movie, search IMDb and return information
var command = process.argv[2];
var movie = process.argv[3];
var movieThis = function (movie) {
  //default will be Mr. Nobody
  if (!movie) {
    movie = "Mr. Nobody"
  }

  var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

  axios.get(queryUrl)
    .then(function (response) {
      var results = response.data;
      // Then we print out the imdbRating
      // * Title of the movie.
      console.log('Title is', results.Title);
      // * Year the movie came out.
      console.log('Year is', results.Year);
      // * IMDB Rating of the movie.
      console.log('Rating is', results.imdbRating);
      // * Country where the movie was produced.
      console.log('Country is', results.Country);
      // * Language of the movie.
      console.log('Language is', results.Language);
      // * Plot of the movie.
      console.log('Plot is', results.Plot);
      // * Actors in the movie.
      console.log('Actors are', results.Actors);


    })
    .catch(function (err) {
      console.log(err);
    });
}

if (command === 'movie-this') {
  movieThis(movie);
}


//---------------------------------------------------------------------------------

var doWhatItSays = function () {
  fs.readFile("random.txt", "utf8", function (error, data) {
    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");
    // We will then print the contents of data
    console.log(data);

    for (var i = 0; i < dataArr.length - 1; i += 2) {
      var app = dataArr[i];
      var input = dataArr[i + 1];
      console.log(app);
      console.log(input);
      switch (app) {
        case 'concert-this':
          concertThis(input);
          break;
        case 'spotify-this-song':
          spotifyThisSong(input);
          break;
        case 'movie-this':
          movieThis(input);
          break;
        default:
          console.log("Error");
      }
    }
    //Loop through the newly created output array
    // for (var i = 0; i < output.length; i++); {
    //     // We will then re-display the content as an array for later use.
    //     console.log(dataArr[i]);
    // };
  });
};

if (command === 'do-what-it-says') {
  doWhatItSays();
}



// It will then print "Inception, Die Hard" in the file
var append = function () {
  var app = process.argv[2];
  var input = process.argv[3];
  var entry = app + "," + input + "\n\r";
  fs.appendFile("log.txt", entry, "utf8", function (err) {
    // If the code experiences any errors it will log the error to the console.
    if (err) {
      return console.log(err);
    }
    // Otherwise, it will print: "movies.txt was updated!"
    console.log(entry);
  });
}
if (command) {
  append();
}
