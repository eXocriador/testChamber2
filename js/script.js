const textEl = document.querySelector(".article-text");
// textEl.textContent = "suck suck";
console.log(textEl.textContent);

const titleEl = document.querySelector(".article-title");
titleEl.textContent = 'Welcome to Portugal!';
console.log(titleEl.textContent);

const allChange = document.querySelector(".article");
// allChange.textContent = "Pizda sobaka";
console.log(allChange.textContent);

const link = document.querySelector(".link");
console.log(link.classList); 
// ["link", "is-active", length: 2, value: "link is-active"]
const hasActiveClassIsActive = link.classList.contains("is-active"); // true
const hasActiveClassTitle = link.classList.contains("title"); // false
console.log(hasActiveClassIsActive);
console.log(hasActiveClassTitle);

titleEl.classList.add("tyusha", "marta");
console.log(titleEl.classList);
// ["link", "is-active", "special", length: 3, value: "link is-active special"]
const breadick = document.querySelector(".random-bread-box");
breadick.classList.add("loh", "pidr", "skotinchick");
console.log(breadick.classList);
breadick.classList.remove("loh");
console.log(breadick.classList);


console.log(link.classList);

const hasActiveClass = link.classList.contains("is-active");
console.log(`hasActiveClass - ${hasActiveClass}`);

link.classList.add("special");
console.log(link.classList);

link.classList.remove("is-active");
console.log(link.classList);

link.classList.toggle("is-active");
console.log(link.classList);
link.classList.toggle("is-active");
console.log(link.classList);

link.classList.replace("special", "regular");
console.log(link.classList);

const image = document.querySelector(".image");

console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

console.log(image.hasAttribute("src")); // true

console.log(image.getAttribute("alt")); // "Rocks and waterfall"

image.setAttribute("alt", "Amazing nature");

console.log(image.getAttribute("alt")); // Amazing nature

const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"

const list = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);

console.log(link.innerHTML);

const ulBox = document.querySelector(".ul-box");
console.log(ulBox);

const title = document.querySelector(".article .article-title");
console.log(title.innerHTML);

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const techList = document.querySelector(".pop-tech-list");

const markup = technologies
  .map((technology) => `<li class="pop-tech-list-item">${technology}</li>`)
  .join("");

// Check the console, you'll see a single string with HTML tags
console.log(markup);

// Adding all the markup in one operation
techList.innerHTML = markup;