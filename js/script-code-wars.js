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
function sumTwoSmallestNumbers(numbers) {
    const twoSmallestNumbers = [...numbers].sort((a, b) => a - b).slice(0, 2).forEach(number)    
  
    console.log(twoSmallestNumbers);
    
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
