/*let fname = "Chandler";
let lname = "Bing";

let obj = {
    name: "Joey"
};

console.log("moduleB.js: Loaded!");
export { fname, lname, obj };
===============================================
let fname = "Chandler";

export default fname;
===============================================*/

export function greet(message) {
  console.log(message);
}

export class GreetMessage {
    constructor() {
        console.log("Constructor");
    }

    greet() {
        console.log("Greet function");
    }
}