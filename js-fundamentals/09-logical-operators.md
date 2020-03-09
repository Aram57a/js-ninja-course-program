
# Logical operators #

There are three logical operators in JavaScript: ```||``` (OR), ```&&``` (AND), ```!``` (NOT).

Although they are called "logical", they can be applied to values of any type, not only boolean. Their result can also be of any type.

Let’s see the details.

## || (OR) ##
The "OR" operator is represented with two vertical line symbols:
```javascript
let result = a || b;
```
In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are ```true```, it returns ```true```, otherwise it returns ```false```.

In JavaScript, the operator is a little bit trickier and more powerful. But first, let’s see what happens with boolean values.

There are four possible logical combinations:
```javascript
console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false
```
As we can see, the result is always ```true``` except for the case when both operands are ```false```.

If an operand is not a boolean, it’s converted to a boolean for the evaluation.

For instance, the number ```1``` is treated as ```true```, the number ```0``` as ```false```:
```javascript
if (1 || 0) { // works just like if( true || false )
  console.log( 'truthy!' );
}
```
Most of the time, OR ```||``` is used in an if statement to test if any of the given conditions is true.

For example:
```javascript
let hour = 9;

if (hour < 10 || hour > 18) {
  console.log( 'The office is closed.' );
}
```
We can pass more conditions:
```javascript
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log( 'The office is closed.' ); // it is the weekend
}
```
### OR "||" finds the first truthy value ###
The logic described above is somewhat classical. Now, let’s bring in the "extra" features of JavaScript.

The extended algorithm works as follows.

Given multiple OR’ed values:
```javascript
let result = value1 || value2 || value3;
```
The OR ```||``` operator does the following:

- Evaluates operands from left to right.
- For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
- If all operands have been evaluated (i.e. all were false), returns the last operand.

A value is returned in its original form, without the conversion.

In other words, a chain of OR "```||```" returns the first truthy value or the last one if no truthy value is found.

For instance:
```javascript
console.log( 1 || 0 ); // 1 (1 is truthy)
console.log( true || 'no matter what' ); // (true is truthy)

console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log( null || 0 || 1 ); // 1 (the first truthy value)
console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)
```
This leads to some interesting usage compared to a "pure, classical, boolean-only OR".

## && (AND) ##
The AND operator is represented with two ampersands &&:
```javascript
let result = a && b;
```
In classical programming, AND returns true if both operands are truthy and false otherwise:
```javascript
console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false
```
An example with if:
```javascript
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}
```
Just as with OR, any value is allowed as an operand of AND:
```javascript
if (1 && 0) { // evaluated as true && false
  console.log( "won't work, because the result is falsy" );
}
```
### AND "&&" finds the first falsy value ###
Given multiple AND’ed values:
```javascript
let result = value1 && value2 && value3;
```
The AND ```&&``` operator does the following:
- Evaluates operands from left to right.
- For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
- If all operands have been evaluated (i.e. all were truthy), returns the last operand.

In other words, AND returns the first falsy value or the last value if none were found.

> Precedence of AND ```&&``` is higher than OR ```||```
Just like OR, the AND && operator can sometimes replace if.

```javascript
let x = 1;

(x > 0) && console.log( 'Greater than zero!' );
```

## ! (NOT) ##
The boolean NOT operator is represented with an exclamation sign ```!```.

The syntax is pretty simple:
```javascript
let result = !value;
```
The operator accepts a single argument and does the following:

- Converts the operand to boolean type: true/false.
- Returns the inverse value.

For instance:
```javascript
console.log( !true ); // false
console.log( !0 ); // true
```

A double NOT ```!!``` is sometimes used for converting a value to boolean type:
```javascript
console.log( !!"non-empty string" ); // true
console.log( !!null ); // false
```
That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

```javascript
console.log( Boolean("non-empty string") ); // true
console.log( Boolean(null) ); // false
```

The precedence of NOT ```!``` is the highest of all logical operators, so it always executes first, before ```&&``` or ```||```.








