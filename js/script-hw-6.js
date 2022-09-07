// ПРИКЛАД 1
// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

//  ПРИКЛАД 2
// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

//  ПРИКЛАД 3
//===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';

//  ПРИКЛАД 4
// const text = document.querySelector('.article-text');
// console.log(text.textContent); // text inside p.article-text

// const title = document.querySelector('.article-title');
// title.textContent = 'Welcome to Bahamas!';

//  ПРИКЛАД 5
// const text = document.querySelector('#paragraph');

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// console.log(text.classList.contains('red')); // true

// text.classList.remove('big');
// console.log(text.classList); // ["text", "red", value: "text red"]

// text.classList.add('new-class');
// console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // Can add multiple classes
// text.classList.add('a', 'b', 'c');
// console.log(text.classList);

// text.classList.toggle('is-hidden'); // will add is-hidden class
// text.classList.toggle('is-hidden'); // will remove is-hidden class

// // classList has a forEach method
// text.classList.forEach(cls => {
//   console.log(cls); // text, red, new-class
// });

//  ПРИКЛАД 6
// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Lake and clouds"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature
// console.log(image.attributes);

//  ПРИКЛАД 7
// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"

//  ПРИКЛАД 8
const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

console.log(saveBtn.dataset.action); //save
console.log(closeBtn.dataset.action); //close

const dishes = document.querySelectorAll('.dishes > li');
dishes.forEach(dish => {
  console.log(dish.dataset.id);
});