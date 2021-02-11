const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (body === '[]') {
      callback("Breed not found", null);
    } else {
      //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      //console.log('body:', typeof body); // Print the HTML for the Google homepage.
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
    //console.log(typeof data);
  });
};

module.exports = { fetchBreedDescription };