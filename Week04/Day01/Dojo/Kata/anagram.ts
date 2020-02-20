'use strict'

function checkAnagram (stringA, stringB) {
    if (stringA.length !== stringB.length) {
        return false
    }

    let arrB = stringB.split("")
    console.log (arrB);
    for (let char of stringA ){ 
        if (!arrB.includes(char)) {
            return false
            break;
        } else {
            arrB.splice(arrB.indexOf(char), 1)
        }
    }

    return true
    console.log (checkAnagram);
}

checkAnagram ('apple', 'elppa');
// console.log (checkAnagram);