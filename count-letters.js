// Write a function countLetters that return all unique characters that exist in a string that is passed into the function.

// Also return how many instances of each letter found in th string

// countLetters needs to return an object



function countLetters(string){

  var letters = string.split(" ").join("").toLowerCase();

  // output is an empty object where we will store our letters
  var output = {};

  // We want to store our letters in the object ONLY if they arnt in the object yet

  for ( var letter of letters){

    if (letter.match(/[a-z]/i)){

      if (output[letter]){

        output[letter] += 1;

      }

      else {
        output[letter] = 1;
      }
    }
  }

  // for ( var i = 0; i < letters.length; i++){

  //   if (letters[i].match(/[a-z]/i)){

  //     if (output[letters[i]]){

  //       output[letters[i]] += 1;

  //     }

  //     else {

  //       output[letters[i]] = 1;

  //     }
  //   }
  // }

return output;

}

console.log(countLetters("My name is Romain."));
