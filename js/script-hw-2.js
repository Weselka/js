// №9
// function getExtremeElements(array) {
//   //   // Change code below this line
//   console.log(array);
//   // console.log(array.length);
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   console.log(firstElement, lastElement);
//   return [firstElement, lastElement];
// };
// getExtremeElements([1, 2, 3, 4, 5])
// повертає[1, 5]
// getExtremeElements(["Earth", "Mars", "Venus"])
// повертає["Earth", "Venus"]
// getExtremeElements(["apple", "peach", "pear", "banana"])
// повертає["apple", "banana"]

// №10
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line

//   words = message.split(`${delimeter}`);
//   console.log(message.split(`${delimeter}`));

//   // Change code above this line
//   return words;
// }

// splitMessage("Mango hurries to the train", " ")
// // повертає["Mango", "hurries", "to", "the", "train"]
// splitMessage("Mango", "")
// // повертає["M", "a", "n", "g", "o"]
// splitMessage("best_for_week", "_")
// // повертає["best", "for", "week"]

// №11
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   const words = message.split(' ');
//   // console.log(words);
//   const lengthWords = words.length;
//   // console.log(lengthWords);
//   const result = lengthWords * pricePerWord;
//   // console.log(result);
//   return result;

//   // Change code above this line
// }

// calculateEngravingPrice("JavaScript is in my blood", 10)
// // повертає 50
// calculateEngravingPrice("JavaScript is in my blood", 20)
// // повертає 100
// calculateEngravingPrice("Web-development is creative work", 40)
// // повертає 160
// calculateEngravingPrice("Web-development is creative work", 20)
// // повертає 80

// №12
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(`${delimeter}`);
//   console.log(array.join(`${delimeter}`));
//   // Change code above this line
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// // повертає "Mango hurries to the train"
// makeStringFromArray(["M", "a", "n", "g", "o"], "")
// // повертає "Mango"
// makeStringFromArray(["top", "picks", "for", "you"], "_")
// // повертає "top_picks_for_you"

// №13
// function slugify(title) {
//   console.log(title.toLowerCase().split(' ').join('-'));
//   return title.toLowerCase().split(' ').join('-');
// }
// slugify("Arrays for begginers")
// //  повертає "arrays-for-begginers"
// slugify("English for developer")
// // повертає "english-for-developer"
// slugify("Ten secrets of JavaScript")
// // повертає "ten-secrets-of-javascript"
// slugify("How to become a JUNIOR developer in TWO WEEKS")
// повертає "how-to-become-a-junior-developer-in-two-weeks"
// №14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, -1);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// №15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// №16
// function makeArray(firstArray, secondArray, maxLength) {
//   const allArray = firstArray.concat(secondArray);
//   // console.log(allArray);
//   let result;
//     if (allArray.length <= maxLength) {
//       result = allArray;
//     } else {
//       result = allArray.slice(0, maxLength);
//     }
//     console.log(result);
//     return result;
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)
// // повертає["Mango", "Poly", "Ajax"]
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
// // повертає["Mango", "Poly", "Houston", "Ajax"]
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)
// // повертає ["Mango", "Ajax", "Chelsea"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)
// // повертає ["Earth", "Jupiter"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)
// // повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)
// // повертає []

// №17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// №18
// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     // console.log(i);
//     total += i;
//     console.log(total);
//   }
//   return total;
// }

// calculateTotal(1)
// // повертає 1
// calculateTotal(3)
// повертає 6
// calculateTotal(7)
// повертає 28
// calculateTotal(18)
// повертає 171
// calculateTotal(24)
// повертає 300

// №19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i +=1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// №20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const orderOne of order) {
//     total += orderOne;
//   }
//   console.log(total);
//   // Change code above this line
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4])
// // повертає 138
// calculateTotalPrice([164, 48, 291])
// // повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176])
// повертає 1116

// №21
// function findLongestWord(string) {

//   const words = string.split(' ');
//   // console.log(words);
//   let biggestWord = words[0];
//   // console.log(biggestWord);
//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > biggestWord.length) {
//       biggestWord = words[i];
//     }

//   }
//   console.log(biggestWord);
// }

// findLongestWord("The quick brown fox jumped over the lazy dog")
// повертає jumped
// findLongestWord('Google do a roll');
// повертає Google
// findLongestWord("May the force be with you")
// повертає force

// №22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     console.log(i);
//     numbers.push(i);
//   }
//   console.log(numbers)
//   return numbers;
// }

// createArrayOfNumbers(1, 3)
// // повертає [1, 2, 3]
// createArrayOfNumbers(14, 17)
// // повертає [14, 15, 16, 17]
// createArrayOfNumbers(29, 34)
// // повертає [29, 30, 31, 32, 33, 34]

// №23
// function filterArray(numbers, value) {
//   // console.log(numbers);
//   const uniqueNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       uniqueNumbers.push(number);
//     }
//   }
//   console.log(uniqueNumbers);
//   return uniqueNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// // повертає [4, 5]
// filterArray([1, 2, 3, 4, 5], 4)
// // повертає [5]
// filterArray([1, 2, 3, 4, 5], 5)
// // повертає []
// filterArray([12, 24, 8, 41, 76], 38)
// // повертає [41, 76]
// filterArray([12, 24, 8, 41, 76], 20)
// // повертає [24, 41, 76]

// №24
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   console.log(fruits.includes(fruit));
//   return fruits.includes(fruit); // Change this line
// }

// checkFruit("plum")
// // повертає true
// checkFruit("mandarin")
// // повертає false
// checkFruit("pear")
// // повертає true
// checkFruit("Pear")
// // повертає false
// checkFruit("apple")
// // повертає true

// №25
// function getCommonElements(array1, array2) {
//   const uniqueElements = [];
//   for (const element of array1) {
//     if (array2.includes(element)) {
//       uniqueElements.push(element);
//     }
//   }
//   console.log(uniqueElements);
// }

// getCommonElements([1, 2, 3], [2, 4])
// // повертає [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19])
// повертає [1, 2]

// №26
// function calculateTotalPrice(order) {
//   let total = 0;
// Change code below this line

//   for (let i = 0; i < order.length; i += 1) {
//   total += order[i];
//   }
//   for (const orderOne of order) {
//     // console.log(orderOne);
//     total += orderOne;
//   }
//   console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4])
// повертає 138
// calculateTotalPrice([164, 48, 291])
// повертає 503

// №27
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   //   for (let i = 0; i < numbers.length; i += 1) {
//   //     const number = numbers[i];

//   // if (number > value) {
//   //   filteredNumbers.push(number);
//   // }

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   console.log(filteredNumbers);

//   return filteredNumbers;
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3);
// // повертає [4, 5]
// filterArray([1, 2, 3, 4, 5], 4);
// // повертає [5]
// filterArray([1, 2, 3, 4, 5], 5);
// // повертає []
// filterArray([12, 24, 8, 41, 76], 38);
// // повертає [41, 76]
// filterArray([12, 24, 8, 41, 76], 20);
// // повертає [24, 41, 76]

// №28
// const a = 3 % (3-0);
// const b = 4 % (4-1);
// const c = 11 % (11-3);
// const d = 12 % (12-5);
// const e = 8 % (8-2);

// console.log(a, b, c, d, e);

// №29
// function getEvenNumbers(start, end) {
//     const numbers = [];

//     for (let i = start; i <= end; i += 1) {
//         // console.log(i);
//         if (i % 2 === 0) {
//             numbers.push(i);
//         }
//     }

//     console.log(numbers)
// }

// getEvenNumbers(2, 5)
// // повертає [2, 4]
// getEvenNumbers(8, 8)
// // повертає [8]
// getEvenNumbers(7, 7)
// // повертає []

// №30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//       number = i;
//       break;
//       console.log(number);
//     }
// }
// console.log(number);

// Підсумкове значення змінної number дорівнює 10
// В циклі for використовується break для виходу до завершення усіх ітерацій циклу

// №31
// function findNumber(start, end, divisor) {
// Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
// if (i % divisor === 0) {
//   number = i;
//   console.log(number);
//   return number;
// }
//   }
// Change code above this line
// }

// findNumber(2, 6, 5)
// повертає 5
// findNumber(8, 17, 3)
// повертає 9
// findNumber(6, 9, 4)
// повертає 8
// findNumber(16, 35, 7)
// повертає 21

// №32
// function includes(array, value) {
  // Change code below this line
  
//   for (const arr of array) {
    // if (arr === value) {
        // return true;
    // } 
//   }
    // return false;
  // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 3);
// повертає true
// includes([1, 2, 3, 4, 5], 17);
// повертає false

