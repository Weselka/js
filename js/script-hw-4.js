//1
// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }
// // Change code below this line

// const result = makePizza();

// const pointer = makePizza;

// //2
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName) {
//   return;
// }

//2
// function deliverPizza(pizzaName) {
//   console.log(`Delivering ${pizzaName} pizza.`);
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   const result = callback(pizzaName);
//   return result;
// }

// makeMessage("Royal Grand", makePizza)
// // повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// makeMessage("Ultracheese", deliverPizza)
// // повертає рядок "Delivering Ultracheese pizza."

//3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function (pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
//   return `Eating pizza ${pizzaName}`;
// });

//4
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, makePizza, onOrderError) {
//     const { pizzas } = this;
//     for (const pizza of pizzas) {
//       // console.log(pizza);
//       if (pizza === pizzaName) {
//         return makePizza(pizzaName);
//       }
//     }
//     return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);

//     console.log(pizzaPalace.order);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// //повертає "Your order is accepted. Cooking pizza Smoked."
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));

// pizzaPalace.order('Four meats', makePizza, onOrderError);
// //"Your order is accepted. Cooking pizza Four meats."
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));

// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// //"Error! There is no pizza with a name Big Mike in the assortment."
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));

// pizzaPalace.order('Vienna', makePizza, onOrderError);
// //"Error! There is no pizza with a name Vienna in the assortment."
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

//5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
//   // const orderedItems =
//     orderedItems.forEach(function (order) {
//     // console.log((totalPrice += order));
//     totalPrice += order;
//   });

//   // Change code above this line
//   return totalPrice;
// }

// calculateTotalPrice([12, 85, 37, 4])
// повертає 138
// calculateTotalPrice([164, 48, 291])
// повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176])
// повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

//6
// function filterArray(numbers) {
//   const filteredNumbers = [];
// Change code below this line

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > value) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// numbers.forEach(function (numbers) {
//   // console.log(numbers)
//   console.log(value);
//   if (numbers > value) {
//     console.log(numbers > value);
//     filteredNumbers.push(numbers);
//   }
// });

// Change code above this line
// console.log(filteredNumbers);
// return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3)
// повертає [4, 5]
// filterArray([1, 2, 3, 4, 5], 4)
// повертає [5]
// filterArray([1, 2, 3, 4, 5], 5)
// повертає []
// filterArray([12, 24, 8, 41, 76], 38)
// повертає [41, 76]
// filterArray([12, 24, 8, 41, 76], 20)
// повертає [24, 41, 76]

//7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
// Change code below this line

// for (let i = 0; i < firstArray.length; i += 1) {
//   if (secondArray.includes(firstArray[i])) {
//     commonElements.push(firstArray[i]);
//   }
// }

// firstArray.forEach(function (firstArray) {
//   if (secondArray.includes(firstArray)) {
//     // console.log(secondArray.includes(firstArray));
//     commonElements.push(firstArray);
//   }
// });

// console.log(commonElements);
// return commonElements;
// Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]);
// повертає [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// повертає [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// повертає [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// повертає [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]);
// повертає []

//#8
// Change code below this line

// function calculateTotalPrice(quantity, pricePerItem)
// const calculateTotalPrice = (quantity, pricePerItem) => {
// console.log(quantity * pricePerItem);
// Change code above this line
// return quantity * pricePerItem;
// }

// calculateTotalPrice(5, 100)
// повертає 500
// calculateTotalPrice(8, 60)
// повертає 480
// calculateTotalPrice(3, 400)
// повертає 1200

//#9
// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   console.log(quantity * pricePerItem);
//   return quantity * pricePerItem;
// };

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// Change code above this line

// calculateTotalPrice(5, 100);
// повертає 500
// console.log(calculateTotalPrice(5, 100));
// calculateTotalPrice(8, 60);
// повертає 480
// calculateTotalPrice(3, 400);
// повертає 1200

//#10
// Change code below this line
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   // orderedItems.forEach(function (item) {
//   //   totalPrice += item;
//   // });

//   orderedItems.forEach(item => totalPrice += item);

//   return totalPrice;
// }
// Change code above this line

// calculateTotalPrice([12, 85, 37, 4]);
// повертає 138
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// calculateTotalPrice([164, 48, 291])
// повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176])
// повертає 1116

//#11
// Change code below this line
// function filterArray(numbers, value)
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   // numbers.forEach(function (number)
//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   console.log(filteredNumbers);
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3)
// // повертає [4, 5]
// filterArray([1, 2, 3, 4, 5], 4)
// // повертає [5]
// filterArray([1, 2, 3, 4, 5], 5)
// // повертає []
// filterArray([12, 24, 8, 41, 76], 38)
// // повертає [41, 76]
// filterArray([12, 24, 8, 41, 76], 20)
// // повертає [24, 41, 76]

//#12
// Change code below this line
// function getCommonElements(firstArray, secondArray)
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   // firstArray.forEach(function (element)
//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   console.log(commonElements);
//   return commonElements;
// }

// getCommonElements([1, 2, 3], [2, 4])
// // повертає [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19])
// // повертає [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
// // повертає [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
// // повертає [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30])
// повертає []

//#13
// function changeEven(numbers, value) {
//   // Change code below this line
//   const commonElements = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       // numbers[i] = numbers[i] + value;
//       commonElements.push(numbers[i] + value);
//     } else {
//       commonElements.push(numbers[i]);
//     }
//     // console.log(numbers);
//   }
//   console.log(commonElements);
//   return commonElements;
//   // Change code above this line
// }

// changeEven([1, 2, 3, 4, 5], 10);
// // повертає новий масив [1, 12, 3, 14, 5]

// changeEven([2, 8, 3, 7, 4, 6], 10)
// // повертає новий масив [12, 18, 3, 7, 14, 16]
// changeEven([17, 24, 68, 31, 42], 100)
// // повертає новий масив [17, 124, 168, 31, 142]
// changeEven([44, 13, 81, 92, 36, 54], 100)
// повертає новий масив [144, 13, 81, 192, 136, 154]

//#14
const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// Change code below this line
const planetsLengths = planets;
