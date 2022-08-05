// №1
// const productName = "Droid";
// const pricePerItem = 2000;
// console.log(productName);
// console.log(typeof productName);
// console.log(pricePerItem);
// console.log(typeof pricePerItem);

// №2
// productName = "Repair droid";
// pricePerItem += 1500;

// №3
// const topSpeed = 160;
// let distance = 617.54;
// let login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// №4
// const totalPrice = pricePerItem * orderedQuantity;

// №5
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// №6
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// №7
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();

// №8
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// №9
//   return a + b + c;

// №10
// Доповни код функції таким чином, щоб у змінну message записувався рядок "You picked <product name>, price per item is <product price> credits", де <product name> і <product price> - це значення параметрів name і price. Використовуй синтаксис шаблонних рядків.

function makeMessage(name, price) {
  name[Radar] = 'Radar';
  price[1] = 6150;
  let message = 'You picked ${name} price per item is ${price} credits';
  console.log(message);
  //   // Change code above this line
  return message;
}
makeMessage();

// Виклик makeMessage('Radar', 6150) повертає "You picked Radar, price per item is 6150 credits"
// Виклик makeMessage('Scanner', 3500) повертає "You picked Scanner, price per item is 3500 credits"
// Виклик makeMessage('Reactor', 8000) повертає "You picked Reactor, price per item is 8000 credits"
// Виклик makeMessage('Engine', 4070) повертає "You picked Engine, price per item is 4070 credits"
