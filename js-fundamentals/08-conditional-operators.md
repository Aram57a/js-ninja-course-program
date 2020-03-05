# Conditional operators: if, '?' #
Sometimes, we need to perform different actions based on different conditions.

To do that, we can use the ```if``` statement and the conditional operator ```?```, that’s also called a "question mark" operator.

## The "if" statement ##
The ```if(...)``` statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

For example:

```javascript
let year = 2015;

if (year == 2015) {
  console.log('right year')
}
```
In the example above, the condition is a simple equality check ```(year == 2015)```, but it can be much more complex.

We can write without curly braces:
```javascript
if (year == 2015) console.log('right year')
```
But we recommend wrapping your code block with curly braces ```{}``` every time you use an if statement, even if there is only one statement to execute. Doing so improves readability.

## Boolean conversion ##
The ```if (…)``` statement evaluates the expression in its parentheses and converts the result to a ```boolean```.

Let’s recall the conversion rules from the chapter Type Conversions:

- A number ```0```, an empty string ```""```, ```null```, ```undefined```, and ```NaN``` all become ```false```. Because of that they are called "falsy" values.
- Other values become true, so they are called "truthy".

So, the code under this condition would never execute:

```javascript
if (0) { // 0 is falsy
  ...
}
```
…and inside this condition – it always will:

```javascript
if (1) { // 1 is truthy
  ...
}
```
We can also pass a pre-evaluated boolean value to ```if```, like this:

```javascript
let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
  ...
}
```

## The "else" clause ##

The ```if``` statement may contain an optional "```else```" block. It executes when the condition is ```false```.

For example:
```javascript
let year = 2020;

if (year == 2015) {
  console.log( 'You guessed it right!' );
} else {
  console.log( 'How can you be so wrong?' ); // any value except 2015
}
```

## Several conditions: "else if" ##

Sometimes, we’d like to test several variants of a condition. The ```else if``` clause lets us do that.

For example:
```javascript
let year = 2020

if (year < 2015) {
  console.log( 'Too early...' );
} else if (year > 2015) {
  console.log( 'Too late' );
} else {
  console.log( 'Exactly!' );
}
```
In the code above, JavaScript first checks year ```< 2015```. If that is falsy, it goes to the next condition year ```> 2015```. If that is also falsy, it shows the last ```console.log```.

There can be more ```else if``` blocks. The final ```else``` is optional.

## Conditional operator "?" ##
Sometimes, we need to assign a variable depending on a condition.

For instance:
```javascript
let accessAllowed;
let age = 19;

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log(accessAllowed);
```

The so-called "conditional" or "question mark" operator lets us do that in a shorter and simpler way.

The operator is represented by a question mark ```?```. Sometimes it’s called **"ternary"**, because the operator has three operands. It is actually the one and **only operator** in JavaScript which has that many.

The syntax is:
```javascript
let result = condition ? value1 : value2;
```

The condition is evaluated: if it’s truthy then value1 is returned, otherwise – ```value2```.

For example:
```javascript
let result = (age > 18) ? true : false;
```
Technically, we can omit the parentheses around ```age > 18```. The question mark operator has a low precedence, so it executes after the comparison ```>```.

This example will do the same thing as the previous one:
```javascript
// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowed = age > 18 ? true : false;
```
But parentheses make the code more readable, so we recommend using them.

> Please note: In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:
```javascript
// the same
let accessAllowed = age > 18;
```

## Multiple "?" ##
A sequence of question mark operators ```?``` can return a value that depends on more than one condition.

For instance:
```javascript
let age = 18;

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log( message )
```
It may be difficult at first to grasp what’s going on. But after a closer look, we can see that it’s just an ordinary sequence of tests:

- The first question mark checks whether ```age < 3```.
- If ```true``` – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon ‘"```:```"’, checking ```age < 18```.
- If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon ‘"```:```"’, checking ```age < 100```.
- If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon ‘"```:```"’, returning 'What an unusual age!'.

Here’s how this looks using ```if..else```:

```javascript
if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}
```

The purpose of the question mark operator ```?``` is to return one value or another depending on its condition. Please use it for exactly that. Use if when you need to execute different branches of code.








