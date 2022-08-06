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
// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   console.log(message);
// }

// №18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {

//   let totalPrice = pricePerDroid * orderedQuantity;
//   let customerCreditsAfter = customerCredits - totalPrice;
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCreditsAfter} credits left`;
//   }
//   console.log(message);

// }

// №19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   console.log(message);

//   return message;
// }

// №20
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   console.log(message);
//   // Change code above this line
//   return message;
// }

// №21
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   console.log(isInRange);

//   return isInRange;
// }

// №22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip';
//   console.log(canAccessContent);
//   return canAccessContent;
// }

// №23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;
//   console.log(isNotInRange);
//   return isNotInRange;
// }

// №24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   console.log(discount);
//   // Change code above this line
//   return discount;
// }

// №25
function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  // if (ordered > available) {
  //   message = 'Not enough goods in stock!';
  // } else {
  //   message = 'The order is accepted, our manager will contact you';
  // }
  message =
    ordered > available
      ? 'Not enough goods in stock!'
      : 'The order is accepted, our manager will contact you';
  console.log(message);
  // Change code above this line
  return message;
}

checkStorage(100, 50);
// повертає "The order is accepted, our manager will contact you"
checkStorage(100, 130);
// повертає "Not enough goods in stock!"
checkStorage(200, 20);
// повертає "The order is accepted, our manager will contact you"
checkStorage(200, 150);
// повертає "The order is accepted, our manager will contact you"
checkStorage(150, 180);
// повертає "Not enough goods in stock!"
