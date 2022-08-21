// №1
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// №2
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// №3
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// №4
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length -1];
// // Change code above this line

// №5
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line

// №6
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// console.log(apartment.tags);

// №7
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: 'Jamaica',
//   city: 'Kingston',
// };

// №8
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };

// №9
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
//   // Change code above this line
// };

// №10
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
//   console.log(key);
//   console.log(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// №11
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line

//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//   // Change code above this line
// }

// №12
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     const values = Object.values(object);
//     propCount = values.length;
//   console.log(propCount);
//   // Change code above this line
//   return propCount;
// }
// countProps({})
// // повертає 0
// countProps({ name: "Mango", age: 2 })
// // повертає 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
// // повертає 3

// // №13
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

// // №14
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);

//   propCount = keys.length;
//   console.log(propCount);
//   return propCount;
//   // Change code above this line
// }
// countProps({});
// // повертає 0
// countProps({ name: 'Mango', age: 2 });
// // повертає 2
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });
// // повертає 3

// №15
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// №16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//     console.log(totalSalary);
//   }
//   // Change code above this line
//   return totalSalary;
// }
// countTotalSalary({})
// // повертає 0
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
// // повертає 330
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })
// // повертає 400

// №17
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(rgbColors);

// №18
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// console.log(name);

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName)  {
//         // console.log(product.name);
//     console.log(product.price);
//     return product.price;
//     }
//   }
//   console.log(null);
//   return null;
//   // Change code above this line
// }

// getProductPrice("Radar")
// // повертає 1300.
// getProductPrice("Engine")
// // повертає null.

// №19
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// console.table(products);

// function getAllPropValues(propName) {
//   const allPropValues = [];
//   for (let i = 0; i < products.length; i += 1) {
//     allPropValues.push(products[i][propName]);
//   }
//   console.log(allPropValues);
//   return allPropValues;
// }

// function getAllPropValues(propName) {
//   const allPropValues = [];
//   for (const product of products) {
//     if (propName === "name") {
//       allPropValues.push(product.name);
//     } else if (propName === "price") {
//       allPropValues.push(product.price);
//     } else if (propName === "quantity") {
//       allPropValues.push(product.quantity);
//     }
//   }
//   console.log(allPropValues);
//   return allPropValues;
// }

// function getAllPropValues(propName) {
//   const allPropValues = [];
//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) {
//       allPropValues.push(product[propName]);
//     }
//   }
//   console.log(allPropValues);
//   return allPropValues;
// }

// getAllPropValues('name');
// // повертає ["Radar", "Scanner", "Droid", "Grip"]
// getAllPropValues('quantity');
// // повертає [4, 3, 7, 9]
// getAllPropValues('price');
// // повертає [1300, 2700, 400, 1200]
// getAllPropValues('category');
// // повертає []

// №20
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;
//   for (const product of products) {
//     let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
// }
// // Change code above this line

// calculateTotalPrice('Blaster');
// // повертає 0
// calculateTotalPrice('Radar');
// // повертає 5200
// calculateTotalPrice('Droid');
// // повертає 2800
// calculateTotalPrice('Grip');
// // повертає 10800
// calculateTotalPrice('Scanner');
// // повертає 8100

// №21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// №22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// №23
// onst highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",} = highTemperatures

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// №24
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// №25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// №26
// Change code below this line
// function calculateMeanTemperature(forecast) {
//    const {
//     today: {
//       low: todayLow, high: todayHigh,},
//     tomorrow: {
//       low: tomorrowLow, high: tomorrowHigh,},
//     } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// №27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// №28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// №29
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// №30
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   return { ...{ completed, category, priority }, ...data };

//   // Change code above this line
// }

// makeTask({});
// // повертає { category: "General", priority: "Normal", completed: false }

// makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' });
// // повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// makeTask({ category: 'Finance', text: 'Take interest' });
// // повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }

// makeTask({ priority: 'Low', text: 'Choose shampoo' });
// // повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }

// makeTask({ text: 'Buy bread' });
// // повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// №31
// Change code below this line
// function add(...args) {
//   console.log(args);
//   let result = 0;
//   for (const arg of args) {
//     result += arg;
//   }
//   console.log(result);
//   return result;
//   // Change code above this line
// }

// №32
// Change code below this line
// function addOverNum(FirstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (FirstNumber < arg) {
//       total += arg;
//     }
//   }
// console.log(total);
//   return total;
//   // Change code above this line
// }
// addOverNum(50, 15, 27)
// // повертає 0
// addOverNum(10, 12, 4, 11, 48, 10, 8)
// // повертає 71
// addOverNum(15, 32, 6, 13, 19, 8)
// // повертає 51
// addOverNum(20, 74, 11, 62, 46, 12, 36)
// // повертає 218

// №33
/// Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   for (const element of array) {
//     if (args.includes(element)) {
//       matches.push(element);
//     }
//   }
// console.log(matches)
//   // Change code above this line
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// // повертає [1, 2]
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// // повертає [17, 89, 2]
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// // повертає [24, 9, 41]
// findMatches([63, 11, 8, 29], 4, 7, 16);
// // повертає []

// №34
// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// №35
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     // Change code above this line
//   },
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles")
// // значення властивості books - це масив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// bookShelf.updateBook("The last kingdom", "Dune")
// // значення властивості books - це масив ["Dune", "Haze", "The guardian of dreams"]

// console.log(bookShelf.updateBook());

// №36
// const atTheOldToad = {
// Change code below this line
// potions: [],

// Change code above this line
// };

// №37
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
// Change code above this line
// };

// №38
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line

//     this.potions.push(potionName);

//     // Change code above this line
//   },
// };

// №39
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line

//     const potionsIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionsIndex, 1);

//     // Change code above this line
//   },
// };

// №40
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line

//     const potionsIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionsIndex, 1, newName);
//     // Change code above this line
//   },
// };

// №41
// exercise
// getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],

  // Change code below this line
  getPotions() {
    const { potions } = this;
    return potions;
  },
  addPotion(newPotion) {
    const { potions } = this;

    for (const potion of potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    potions.push(newPotion);
  },
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === potionName) {
        potions.splice(i, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    // const potionIndex = potions.indexOf(oldName);

    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === oldName) {
        potions[i].name = newName;
      }
    }
    return `Potion ${newName} is not in inventory!`;    
  },
  // Change code above this line
};

console.table(atTheOldToad.potions);

// atTheOldToad.getPotions();
// для вихідного об'єкта повертає [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// в масиві potions останнім елементом буде цей об'єкт
// console.table(atTheOldToad.potions);

// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
//   в масиві potions останнім елементом буде цей об'єкт
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion повертає рядок з текстом з вихідного коду
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion не додає в нього переданий об'єкт
// console.table(atTheOldToad.addPotion());
// console.table(atTheOldToad.potions);

// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// масив potions не змінюється
// console.table(atTheOldToad.potions);

// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// массив potions не змінюється
// console.table(atTheOldToad.potions);

// atTheOldToad.removePotion('Speed potion');
// у властивості potions буде масив[{ name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// console.table(atTheOldToad.potions);

atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// у властивості potions буде масив[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 }]
console.table(atTheOldToad.potions);

// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
//  у властивості potions буде масив[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 }]
