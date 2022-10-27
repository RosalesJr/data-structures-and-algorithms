'use strict';
//own comparators in comparator.js file used demo code for reference
const { titleComparator, yearComparator} = require('./comparator');

// Complete for Code Challenge 28
function sortYear(movies) {
  return movies.sort(yearComparator);
}

function sortTitle(movies) {
  return movies.sort(titleComparator);
}

function inGenre(movies, genre) {
  return movies.filter(movie => movie.genres.includes(genre));
}

module.exports = { sortYear, sortTitle, inGenre };
