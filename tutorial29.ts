let mySet = Object.create(null);
mySet.id = 0;

if(mySet.id){
  console.log("id exists");
}

let myMap = Object.create(null);
myMap.name = "Chandler";
let val = myMap.name;
console.log(val);

myMap[100] = "Hello";
console.log(myMap["100"]);

let ob1 = {};
let ob2 = {};