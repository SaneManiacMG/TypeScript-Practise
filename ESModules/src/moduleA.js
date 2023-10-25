/*console.log("moduleA.js: Log 1");
import { fname as f, lname as l, obj } from "./moduleB.js";
console.log("moduleA.js: Log 2");

obj.name = "Ross";
console.log(obj.name);
console.log(`${f} ${l}`);*/

import firstName from "./moduleB.js";

console.log(firstName);