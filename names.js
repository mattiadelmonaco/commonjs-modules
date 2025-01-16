// 1. Crea una funzione che accetta due parametri: firstName, lastName. 
//     La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// 2. Esporta la funzione dal file.

// FUNCTIONS 

/**
 * function to get an object with firstname and lastname
 * 
 * @param {string} firstName write firstname
 * @param {string} lastName write lastname 
 * @returns {object} object with firstname + lastname
 */
function fullName(firstName, lastName) {
    return {firstName, lastName}
}

console.log(fullName("Mattia", "Del Monaco"))

// EXPORT
// function "fullname"

module.exports = fullName