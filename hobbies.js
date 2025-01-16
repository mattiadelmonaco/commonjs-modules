// 1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. 
//     La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
// 2. Esporta la funzione dal file.

// FUNCTIONS 

/**
 * function to get an array with 3 hobbies
 * 
 * @param {string} hobbyOne write hobby 1
 * @param {string} hobbyTwo write hobby 2
 * @param {string} hobbyThree write hobby 3
 * @returns {array} return an array with 3 hobbies
 */
function hobbies (hobbyOne, hobbyTwo, hobbyThree) {
    return [hobbyOne, hobbyTwo, hobbyThree]
}

// EXPORT
// function "hobbies"

module.exports = hobbies