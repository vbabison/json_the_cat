const { fetchBreedDescription } = require('./breedFetcher');
const getArg = process.argv.slice(2);
const breedName = getArg[0].trim();

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});