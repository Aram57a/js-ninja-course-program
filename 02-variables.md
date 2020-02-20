# Variables
> A variable is a "named storage" for data

\
To create a variable in JavaScript, use the **let** keyword.
``` javascript
let name;
name = 'John';
```
\
To be concise, we can combine the variable declaration and assignment into a single line:
``` javascript
let myName = 'Mike';
```
\
We can also declare multiple variables in one line but we don’t recommend it for readability:
``` javascript
let firstName = 'John', lastName = 'Doe';
```
\
The multiline variant is a bit longer, but easier to read:
``` javascript
let city = 'Yerevan';
let country = 'Armenia';
```
\
We can also declare two variables and copy data from one into the other.
``` javascript
let computer = 'Apple';
let os = 'Mac';

computer = os;
```

## **var** keyword

In older scripts, you may also find another keyword: **var** instead of **let**:
```javascript
var message = 'Hello';
```
The var keyword is almost the same as let. It also declares a variable, but in a slightly different, ***"old-school"*** way.

We'll cover them in the future sections.

## Variable naming
There are two limitations on variable names in JavaScript:

- The name must contain only letters, digits, or the symbols **$** and **_**.
- The first character must not be a digit.

\
Examples of valid names:
``` javascript
let userName;
let test123;
let $dollar;
let _validName;
```
\
Examples of incorrect variable names:
```javascript
let 1a; // cannot start with a digit
let my-name; // hyphens '-' aren't allowed in the name
```
\
Variable naming rules:
- Use camelCase
- Start with lowerCase
- Non-Latin letters are allowed, but not recommended
- [There are Reserved names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)
- JS is case sensitive
- Name things right!

## Constants
To declare a constant (unchanging) variable, use **const** instead of **let**:

Variables declared using const are called ***"constants"***. They cannot be reassigned. An attempt to do so would cause an error:

``` javascript
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // Uncaught TypeError: Assignment to constant variable.
```

Also you can't declare a const variable without initialization

```javascript
const myBirthday; // Uncaught SyntaxError: Missing initializer in const declaration
```

## **Summary**
We can declare variables to store data by using the **var**, **let**, or **const** keywords.

- **let** – is a modern variable declaration.
- **var** – is an old-school variable declaration.
- **const** – is like let, but the value of the variable can’t be changed.