let displayColors = function(message: string, ...colors: string[]) {
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    
}

let message = "List of Colors";

displayColors(message, "Red");
displayColors(message, "Red", "Green");
displayColors(message, "Red", "Green", "Blue");