const prompt = require('prompt-sync')({sigint: true});
var bilangan = prompt("masukan bilangan : ")

if (bilangan%2==0) {
    console.log("Bilangan "+bilangan+" Adalah Bilangan Genap")
} else {
    console.log("Bilangan "+bilangan+" Adalah Bilangan Ganjil")
}
