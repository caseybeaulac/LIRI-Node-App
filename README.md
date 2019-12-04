# LIRI-Node-App

This is an app that let's you search for events by certain artists, for song information and for movie information as well.

The LIRI app has 4 different commands, *concert-this* which let's you look for events for chosen artist. You need to type in **"node liri.js concert-this"** and the name of the artist. ex: node liri.js concert-this drake. It will then display the location and dates for upcoming shows.

The second command is to find information on songs with the *spotify-this-song* command which is similar to the first one. You start the same way by writing **node liri.js spotify-this-song** and the name of the song you wish too look for. This will display the title, the artist, the album it appeared on and a link to a preview of the selected track.

The third command helps you find information on movies you know with the *movie-this* command. As of now you should probably be familiar with the process. You would enter **node liri.js movie-this** and the name of the movie. This will display the title, the year it was released, the IMDb rating, the countries it was released in, the languages you can watch it in, the plot and finally, the main actors.

The fourth and final command lets you read some pre-determined commands in an external text document by simply entering node **liri.js do-what-it-says** with no addition values.


This app was built with **JavaScript** and **Node.js**, using the Spotify API, the OMDB API and the bandsintown API.
