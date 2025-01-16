// 1. Crea una funzione che accetta due parametri: firstName, lastName. 
//     La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// 2. Esporta la funzione dal file.

// FUNCTIONS 

function fullName(firstName, lastName) {
    return {firstName, lastName}
}

console.log(fullName("Mattia", "Del Monaco"))

// EXPORT
// function "fullname"

module.exports = fullName