//STEP 1
// const findTheLengthofUserName = () => {
//     const userName = prompt( 'What is your name?')

//     return alert(`The length of your name is: ${userName.length}`)
// }
// // findTheLengthofUserName()

//STEP 2
// const findTheLetterInTheUserName = () => {
//     const userName = prompt('What is your name?')
//     const number = prompt('Give me a number')

//     const letter = userName(number)
//     alert(`The letter in position ${number} is ${letter}`)
// }

// findTheLetterInTheUserName()

//STEP 3
// const concatenateFirstNameAndLastName = () => {
//     const firstName = prompt('What is your first name?')
//     const lastName = prompt('What is your last name?')

//     alert('Your name is: ' + firstName + '' + lastName)
// }
// concatenateFirstNameAndLastName()


//STEP 4
// const findTheIndexOfTheText = () => {
//     const text = 'The quick brown fox jumped over the lazy fox'

//     const textArr = text.split(' ')

//     const index = textArr.findIndex((letter) => letter === 'fox')

//     alert(`The index for the word fox is ${index}`)
// }

// findTheIndexOfTheText()


//STEP 5
// const findTheLastIndexOfTheWord = () => {
//     const text = 'The quick brown fox jumped over the lazy fox'

//     const textArr = text.split(' ')

//     let wordIndex = index 

//     textArr.forEach((word, index) => {
//         if(word === 'fox') {
//             wordIndex = index
//         }
//     })
//     alert(`The last index of the word fox is ${wordIndex}`)
// }
// findTheLastIndexOfTheWord()


//STEP 6
// const replaceTheText = () => {
//     let text = 'The quick brown fox jumped over the lazy dog';
//     const name = prompt('What is your name?');
  
//     text = text.replace('the lazy dog', name);
  
//  alert(`The text after replacement: ${text}`);
// };
  
// replaceTheText();

//STEP 7
// const searchForTheWord = () => {
//     const text = 'The quick brown fox jumped over the lazy dog';
//     const word = prompt('Give me a word');
  
//     const isWord = text.includes(word);
  
//     //   if (isWord) {
//     //     alert(`The word is: ${word}`);
//     //   } else {
//     //     alert(`Not found the word: ${word}`);
//     //   }
  
//   //   isWord ? alert(`The word is: ${word}`) : alert(`Not found the word: ${word}`);
  
//     alert(isWord ? `The word is: ${word}` : 'Not found the word');
//   };
  
// searchForTheWord();

//STEP 8
// const convertToUpperCase = () => {
//     const old_string = 'The quick brown fox jumped over the lazy dog';
  
//     //slice()
//     // const new_string = old_string.slice(32, 44);
  
//     //substring()
//     const new_string = old_string.substring(32, 44);
  
//     alert(`New string: ${new_string.toUpperCase()}`);
//   };

// convertToUpperCase()

//STEP 9
// const convertToTrimmedLowerCase = () => {
//     const text = '        THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG        ';
  
//     const trimmedText = text.replaceAll('  ', '');
  
//     alert(`Trimmed text: ${trimmedText.toLowerCase()}`);
//   };
  
// convertToTrimmedLowerCase();

//STEP 10
// const capitalizeTheFirstLetter = () => {
//     let text = 'the quick brown fox jumped over the lazy dog';
  
//     const firstCapLetter = text.substring(0, 1).toUpperCase();
  
//     text = firstCapLetter + text.substring(1, text.length);
  
//     //   const textArr = text.split(' ');
//   //   textArr.forEach((letter, index) => {
//     //     const firstCapLetter = letter.substring(0, 1).toUpperCase();
//     //     textArr[index] = firstCapLetter + letter.substring(1, letter.length);
//     //   });
  
//     //   text = textArr.join(' ');
  
//     alert(`Capitalized text:  ${text}`);
//   };
  
// capitalizeTheFirstLetter();