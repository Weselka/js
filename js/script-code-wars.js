// Якщо ми перерахуємо всі натуральні числа нижче 10, кратні 3 або 5, то отримаємо 3, 5, 6 і 9. Сума цих кратних дорівнює 23.

// Завершіть розв’язання так, щоб воно повернуло суму всіх кратних 3 або 5 нижче переданого числа. Крім того, якщо число від’ємне, поверніть 0 (для мов, які мають їх).

// Примітка. Якщо число кратне 3 і 5, порахуйте його лише один раз .
// function solution(number) {
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (
//       (numbers[i] < number && numbers[i] % 3 === 0) ||
//       (numbers[i] < number && numbers[i] % 5 === 0)
//     ) {
//       sum += numbers[i];
//     }

//     console.log('numbers', numbers[i]);
//     console.log('sum', sum);
//   }
//   return sum;
// }
// console.log(solution(15));

// Створіть функцію, яка повертає суму двох найменших додатних чисел із заданим масивом із мінімум 4 додатних чисел. Числа з плаваючою точкою чи недодатні цілі числа не передадуться.

// Наприклад, коли масив передається як [19, 5, 42, 2, 77], вихід має бути 7.

// [10, 343445353, 3453445, 3453545353453]має повернутися 3453455.
// function sumTwoSmallestNumbers(numbers) {
//   let sum = 0;
//   const twoSmallestNumbers = [...numbers]
//     .sort((a, b) => a - b)
//     .slice(0, 2)
//     .forEach(number => (sum += number));
//     return sum;
// }
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

/*Завершіть метод/функцію, щоб вона перетворювала слова, розділені тире/підкресленням, на верблюжий регістр. Перше слово у виведених даних має бути написане з великої літери, лише якщо вихідне слово було з великої літери (відоме як верхній регістр, також часто називають регістр Pascal).

Приклади
"the-stealth-warrior"перетворюється на "theStealthWarrior"
"The_Stealth_Warrior"перетворюється на"TheStealthWarrior"*/

// function toCamelCase(str) {
//     return str
//       .split(/\s+/)
//       .map(word => word[0].toUpperCase() + word.substring(1))
//       .join('');
// }
function toCamelCase(str) {
  // const stringItog = '';
  const splits = string.split('-') && string.split('_');
  //
  // .split('-')
  // .map(word => word[0].toUpperCase() + word.substring(1))
  // .join('');
}
console.log(toCamelCase('the-stealth-warrior'));

// let string = 'I am  the code';

// console.log(
//   string
//     .split(/\s+/)
//     .map(word => word[0].toUpperCase() + word.substring(1))
//     .join('')
// );

// function string() {
//   let string = 'i_am_the_code';
//   var splits = string.split('-') && string.split('_');
//   var stringItog = '';

//   for (let i = 0; i < splits.length; i++) {
//     let Name = splits[i];
//     let First = Name.substring(0, 1).toUpperCase();
//     let Leftovers = Name.substring(1, Name.length);
//     stringItog += First + Leftovers + '';
//   }

//   console.log(stringItog);
// }
// string();

// String.prototype.firstLetterCaps = function () {
//   return this.charAt(0).toUpperCase() + this.slice(1);
// };

// let str = 'i_am_the_code';
// let arr = str.split('_');
// let out = '';
// for (let i = 0; i < arr.length; i++) {
//   if (i == arr.length) {
//     out += arr[i].firstLetterCaps();
//   } else {
//     out += arr[i].firstLetterCaps() + '';
//   }
// }

// console.log(out);
