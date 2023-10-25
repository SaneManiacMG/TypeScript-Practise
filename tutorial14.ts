let displayColors2 = function (message: string, ...colors: string[]) {
  console.log(message);
  console.log(colors);
  console.log(arguments.length);
};

let message2 = "List of Colors";

let colorArray = ["Orange", "Yellow", "Indigo"];
displayColors2(message2, ...colorArray);
