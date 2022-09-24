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
// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll('.dishes > li');
// dishes.forEach(dish => {
//   console.log(dish.dataset.id);
// });

//  ПРИКЛАД 9
// const list = document.querySelector('.usernames');

// // Adds an item to the end of the list
// const lastItem = document.createElement('li');
// lastItem.textContent = 'Poly';
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement('li');
// firstItem.textContent = 'Ajax';
// list.prepend(firstItem);

// // Adds a title before the list
// const title = document.createElement('h2');
// title.textContent = 'USERNAMES';
// list.before(title);

// // Adds a paragraph after the list
// const text = document.createElement('p');
// text.textContent =
//   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!';
// list.after(text);

//  ПРИКЛАД 10
// const text = document.querySelector('.text');
// text.remove();

//  ПРИКЛАД 11
// const article = document.querySelector('.article');
// console.log(article.innerHTML);

// const title = document.querySelector('.article .title');
// console.log(title.innerHTML);

// const text = document.querySelector('.article .text');
// console.log(text.innerHTML);

// const link = document.querySelector('.article .link');
// console.log(link.innerHTML);

//  ПРИКЛАД 12
// const title = document.querySelector('.article .title');
// title.innerHTML = 'New and <span class="accent">improved</span> title';

//  ПРИКЛАД 13
// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');

// const markup = technologies.map(technology => `<li class="list-item">${technology}</li>`).join('');

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

//  ПРИКЛАД 14
// const article = document.querySelector('.article');
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// // Replace += with = operator. See the difference?
// // Article title is lost because we overwrite element content.
// article.innerHTML += htmlString;

//  ПРИКЛАД 15
// const list = document.querySelector('.list');

// const newTechnologies = ['React', 'TypeScript', 'Node.js'];
// const markup = newTechnologies
//   .map(technology => `<li class="list-item new">${technology}</li>`)
//   .join('');

// list.insertAdjacentHTML('beforeend', markup);
// list.insertAdjacentHTML('beforebegin', '<h2>Popular technologies</h2>');

//  ПРИКЛАД 16
// const singleBtn = document.querySelector('#single');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// singleBtn.addEventListener('click', handleClick);

// // ===============================================
// const multiBtn = document.querySelector('#multiple');

// const firstCallback = () => {
//   console.log('First callback!');
// };
// const secondCallback = () => {
//   console.log('Second callback!');
// };
// const thirdCallback = () => {
//   console.log('Third callback!');
// };

// multiBtn.addEventListener('click', firstCallback);
// multiBtn.addEventListener('click', secondCallback);
// multiBtn.addEventListener('click', thirdCallback);

//  ПРИКЛАД 17
// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector('#btn');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// addListenerBtn.addEventListener('click', () => {
//   btn.addEventListener('click', handleClick);
//   console.log('click event listener was added to btn');
// });

// removeListenerBtn.addEventListener('click', () => {
//   btn.removeEventListener('click', handleClick);
//   console.log('click event listener was removed from btn');
// });

const mango = {
  username: 'Mango',
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};

const btn = document.querySelector('.js-btn');

// ✅ Працює
mango.showUsername();

// ❌ this буде посилатися на button, якщо використовувати showUsername як callback
// btn.addEventListener('click', mango.showUsername); // не працює

// ✅ Не забувайте прив'язувати контекст методів об'єкта
btn.addEventListener('click', mango.showUsername.bind(mango));