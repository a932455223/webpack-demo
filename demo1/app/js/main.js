import { Cat,Dog }  from './animals.js';

let cat = new Cat();

let elem = document.getElementById('output');

elem.innerHTML = `It is a ${cat.species}`;
