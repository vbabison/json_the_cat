const request = require('request');
const getArg = process.argv.slice(2);
const catName = getArg[0].trim();

request("https://api.thecatapi.com/v1/breeds/search?q=" + catName, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else if (body === '[]') {
    console.log("Breed not found");
  } else {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', typeof body); // Print the HTML for the Google homepage.
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
  //console.log(typeof data);
});