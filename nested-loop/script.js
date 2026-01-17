let prompt = require("prompt-sync")(); 

let height = parseInt(prompt("Enter number of rows: "));
let width = parseInt(prompt("Enter number of columns: "));
let symbol = prompt("Enter a symbol to draw: ");

for (let i = 1; i <= height; i++) {
  let row = "";

  for (let j = 1; j <= width; j++) {
    row += symbol + " "; 
  }

  console.log(row);
}
