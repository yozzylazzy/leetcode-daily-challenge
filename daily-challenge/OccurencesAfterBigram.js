/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  // Split The Text to an array by ' ' separator
  const words = text.split(' ');
  // Variable for occur word after bigram
  const occur = [];
  // looping all words
  for(let i = 0; i <= words.length; i++){
      // matching with the first and second 
      if(words[i] === first && words[i+1] === second){
          // if the first and second same, push the third words
          occur.push(words[i+2])
      }
  }
  return occur;
};