let myMap3 = new Map();

myMap3.set("fname", "Chandler");
myMap3.set("age", 20);

console.log(myMap3.get("fname"));

let ob5 = {};
let ob6 = {};

myMap3.set(ob5, 10);
myMap3.set(ob6, 20);

console.log(myMap3.get(ob5));
console.log(myMap3.size);

console.log(myMap3.has("fname"));


