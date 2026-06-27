let firstName = 'Alex', secondName = 'Kiprop';

console.log('My name is: ', firstName + " " + secondName);


console.log(`My name is, ${firstName} ${secondName}`);
// Advantages of using delimiters
/*
    1. You can use variables directly or even call functions 
    2. You can put expressions
    3. It allows for a multi-line string
*/

let str = ` Line 1: 
            Line 2: 
            Line 3:
    `

console.log(`The sum of 2 and 10 = ${2 + 10}`);


function fullName(fn, ln) {
    return `${fn} ${ln}`
}

console.log(`My name is ${fullName(firstName, secondName)}`);

