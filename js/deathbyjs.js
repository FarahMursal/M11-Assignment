// //STEP 1
// // const alphabeticalOrder = (string) => {
// //     const stringArr = string.split('');
// //     const sortedArr = stringArr.sort().join('');
  
// //     console.log(`The alphabetical sorted string in ${sortedArr}`);
// // };

// //STEP 2
// const convertFirstLetterToUppercase = (string) => {
//     let stringArr = string.split(' ');
  
//     stringArr.forEach((word, index) => {
//       stringArr[index] =
//         word.slice(0, 1).toUpperCase() + word.slice(1, word.length);
//     });
  
//     const sentence = stringArr.join(' ');
  
//     console.log({ sentence });
// };
  
// //STEP 3
// const countVowelsInString = (string) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
  
//     let count = 0;
  
//     const stringArr = string.split('');
  
//     stringArr.forEach((letter) => {
//       if (vowels.includes(letter)) {
//         count++;
//       }
//     });
  
//     console.log(`There are ${count} vowels in the "${string}"`);
// };
// //STEP 4
// const generateRandomStringId = (length = 5) => {
//     const chars =
//       'a123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  
//     let randomString = '';
  
//     for (let i = 0; i < length; i++) {
//       randomString += chars[Math.floor(Math.random() * length)];
//     }
  
//     console.log(`The random generated string is ${randomString}`);
// };
// //STEP 5
// const countryArr = [
//     'Canada',
//     'Francee',
//     'United States',
//     'Germany',
//     'Bangladesh',
//   ];
//   const findOutLongestCountryName = (countries) => {
//     let longestName = '';

//   countries.forEach((country) => {
//       if (country.length > longestName.length) {
//         longestName = country;
//       }
//     });
  
//     console.log(`The longest country name is ${longestName}`);
//  };
  
//   findOutLongestCountryName(countryArr);












