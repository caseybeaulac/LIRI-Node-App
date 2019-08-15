require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");
var command = process.argv[2];
var value = process.argv.slice(3);



switch (command) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThis();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doThis();
        break;
}

function concertThis() {
    var artist = value.join(" ");
   
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function (response) {

            var show = response.data;
         
            for (var i = 0; i < show.length; i++ ){
                result = show[i];
                console.log(result.venue.city + ", "+ result.venue.country + ", "+ result.venue.name + ", " + moment(result.venue.dateTime).format("MM/DD/YYYY"));
            }
            //console.log(artist+" tour dates and locations:\n",city);

            //moment(response)
        })
        .catch(function (error) {
            if (error.response) {
             
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
             
                console.log(error.request);
            } else {
              
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

function spotifyThis() {
    
    var song = value.join(" ");
   
    if (song === "") {
        spotify.search({ type: 'track', query: "The Sign" }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            var artist = "Ace of Base";
            var title = "The Sign";
            var preview = "https://open.spotify.com/track/0hrBpAOgrt8RXigk83LLNE";
            var album = "The Sign (US Album) [Remastered]";


            console.log("\nArtist : " + artist + "\nSong Name : " + title + "\nPreview Link : " + preview + "\nAlbum : " + album);
        });

    } else {
        spotify.search({ type: 'track', query: song }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            var artist = data.tracks.items[0].album.artists[0].name;
            var title = data.tracks.items[0].name;
            var preview = data.tracks.items[0].album.external_urls.spotify;
            var album = data.tracks.items[0].album.name;
            //console.log(data);

            console.log("\nArtist : " + artist + "\nSong Name : " + title + "\nPreview Link : " + preview + "\nAlbum : " + album);
        });
    }
}

function movieThis() {
    var movie = value.join(" ");
    if (movie === "") {
        axios.get("http://www.omdbapi.com/?t="+movie+"&apikey=trilogy").then(
            function (response) {
    
                var title = "Mr. Nobody";
                var year = "2009";
                var rating = "7.8";
                var country = "Belgium, Germany, Canada, France, USA, UK";
                var language = "English, Mohawk";
                var plot = "A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.";
                var actors = "Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham";
    
                console.log("\nTitle : " + title + "\nRelease Year : " + year + "\nIMDb Rating : " + rating + "\nCountry : " + country + "\nLanguages : " + language + "\nPlot : " + plot + "\nActors : " + actors);
            })
            .catch(function (error) {
                if (error.response) {
                    console.log("---------------Data---------------");
                    console.log(error.response.data);
                    console.log("---------------Status---------------");
                    console.log(error.response.status);
                    console.log("---------------Status---------------");
                    console.log(error.response.headers);
                } else if (error.request) {
    
                    console.log(error.request);
                } else {
    
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
    }else{
    axios.get("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy").then(
        function (response) {

            var title = response.data.Title;
            var year = response.data.Year;
            var rating = response.data.imdbRating;
            var country = response.data.Country;
            var language = response.data.Language;
            var plot = response.data.Plot;
            var actors = response.data.Actors;

            console.log("\nTitle : " + title + "\nRelease Year : " + year + "\nIMDb Rating : " + rating + "\nCountry : " + country + "\nLanguages : " + language + "\nPlot : " + plot + "\nActors : " + actors);
        })
        .catch(function (error) {
            if (error.response) {
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {

                console.log(error.request);
            } else {

                console.log("Error", error.message);
            }
            console.log(error.config);
        });
    }
}

function doThis() {
    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
          return console.log(error);
        }
      
        console.log(JSON.stringify(data));
      
        // var dataArr = data.split(" ");
      
        // console.log(dataArr);
      
      });

}