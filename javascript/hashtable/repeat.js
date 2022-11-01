// Worked on this code with Brandon Pitts
let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function removePunctuation(string) {
  return string.replace(regex, '');
}

function repeatedWord(string){
  let puncString = removePunctuation(string);
  let lowString = puncString.toLowerCase();

  let wordCount = new Map();

  for(let i of lowString.split(' ')){
    if(wordCount.has(i)){
      wordCount.set(i,wordCount.get(i) + 1);
    }
    else wordCount.set(i,1);
    if(wordCount.get(i) > 1)
      return i;
  }
  return 'No word is being repeated';
}

module.exports = repeatedWord;
