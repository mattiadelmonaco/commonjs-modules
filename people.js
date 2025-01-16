// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. 
//     La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. 
//     All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

// IMPORTS 

// function fullName from names.js
const fullNameExp = require("./names.js")

// function hobbies from hobbies.js
const hobbiesExp = require("./hobbies.js")

// FUNCTIONS 

/**
 * function to get and object with an object with a fullname and an array with 3 hobbies
 * 
 * @returns {object} object with an object with a fullname and an array with 3 hobbies
 */
function people() {
    return { 
        fullName,
        hobbies
    }
}

// VARIABLES

const fullName = fullNameExp("Mattia", "Del Monaco")
const hobbies = hobbiesExp("Swim", "Gaming", "Drink")

// EVENTS

console.log(people())

