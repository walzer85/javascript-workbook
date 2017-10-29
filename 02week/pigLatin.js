'use strict';

//global storage
  //const pigLatinStr = ('choose your word here') => {}
  //const vowels = ('aeiou')

//function names, purpose, method
  //convert your word to lower case, toLowerCase method
  //get rid of any empty space, trim method, chained to toLowerCase
  //vowelIndex(), use this inside of a forEach method to find the index of the vowels in the word, indexOf method

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin=(word)=> {
  word.toLowerCase().trim();
  const wordArr=word.split();
  const vowel = ['a', 'e', 'i', 'o', 'u']
  wordArr.forEach((letter, i) => {
  if(vowel.indexOf(letter)!==-1){
    return vowel;
  }
});
  //slice, indexOf, concat
  //checkFirstVowel goes here!!!
  let firstVowel;
  vowel.forEach=()=>
  word.copyWithin(searchVowel[0], );
  //moveToEnd(), move consonants before the first vowel to the end of the word,
  word.push(`ay`);
  word.join(``);
  return word;
}

pigLatin(`scram`);




function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
