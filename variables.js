let name;
name = 'John';
name = 'Nick';

let myName = 'Mike';

let firstName = 'John', lastName = 'Doe';
// not recomended for readability

let city = 'Yerevan';
let country = 'Armenia';
// good readability

city = country;
// we can also declare two variables and copy data from one into the other.

// VARIABLE NAMING:
// There are two limitations on variable names in JavaScript:

// The name must contain only letters, digits, or the symbols $ and _.
// The first character must not be a digit.

// Examples of valid names:
let userName;
let test123;
let $dollar;
let _validName;

// Use camelCase
// Start with lowerCase
// Non-Latin letters are allowed, but not recommended
// There are Reserved names https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

// JS is case sensitive

//Constants
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!

// Name things right!

// Summary
// We can declare variables to store data by using the var, let, or const keywords.

// let – is a modern variable declaration.
// var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
// const – is like let, but the value of the variable can’t be changed.