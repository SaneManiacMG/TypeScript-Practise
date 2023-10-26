let mySet2 = new Set();

let ob3 = {};
let ob4 = {};

mySet2.add("Hello");
mySet2.add(1);
mySet2.add(ob3);
mySet2.add(ob4);
console.log(mySet2.size);

let newSet = new Set([1,2,3,4,5,4,3,2,1]);
console.log(newSet.size);

let chainSet = new Set().add("Hello").add("World");
console.log(chainSet.size);

console.log(newSet.has(1));
console.log(newSet.delete(5));
