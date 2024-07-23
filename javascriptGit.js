
let prompt = require("prompt-sync") ();

let contador = parseInt(prompt("Ingrese una cantidad a contar: "));

for (let i = 0; i < contador; i++) {
    console.log(i+1);
}
