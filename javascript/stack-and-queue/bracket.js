'use strict';

function validateBrackets(string) {
  let squareOpen = 0;
  let squareClose = 0;
  let parenOpen = 0;
  let parenClose = 0;
  let curlyOpen = 0;
  let curlyClose = 0;
  let returnBool = false;

  for(let i = 0; i < string.length; i++){
    if(string[i] === '[') {
      squareOpen++;
    } else if (string[i] === ']') {
      squareClose++;
    } else if (string[i] === '(') {
      parenOpen++;
    } else if (string[i] === ')') {
      parenClose++;
    } else if (string[i] === '{') {
      curlyOpen++;
    } else if (string[i] === '}') {
      curlyClose++;
    }
  }
  if(squareOpen === 0 && squareClose === 0 && parenOpen === 0 && parenClose === 0 && curlyOpen === 0 && curlyClose === 0){
    return returnBool;
  }
  if(squareOpen === squareClose && parenOpen === parenClose && curlyOpen === curlyClose) {
    returnBool = true;
  }
  return returnBool;

}

module.exports = validateBrackets;
