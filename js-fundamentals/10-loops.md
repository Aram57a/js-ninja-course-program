# Loops #
We often need to repeat actions.

For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.

Loops are a way to repeat the same code multiple times.

## The "while" loop ##
The ```while``` loop has the following syntax:
```javascript
while (condition) {
  // code
  // so-called "loop body"
}
```
While the ```condition``` is truthy, the code from the loop body is executed.

For instance, the loop below outputs ```i``` while ```i < 3```:
```javascript
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log( i );
  i++;
}
```
A single execution of the loop body is called an **iteration**. The loop in the example above makes three iterations.

If ```i++``` was missing from the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by ```while```.

For instance, a shorter way to write while ```(i != 0)``` is ```while (i)```:
```javascript
let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  console.log( i );
  i--;
}
```
> Curly braces are not required for a single-line body

## The "do…while" loop ##
The condition check can be moved below the loop body using the ```do..while``` syntax:

```javascript
do {
  // loop body
} while (condition)
```
The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

For example:
```javascript
let i = 0;
do {
  console.log( i );
  i++;
} while (i < 3);
```

This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: ```while(…) {…}```.



## The "for" loop ##
The for loop is the most commonly used loop.

It looks like this:
```javascript
for (begin; condition; step) {
  // ... loop body ...
}
```
Let’s learn the meaning of these parts by example. The loop below runs ```console.log(i)``` for i from 0 up to (but not including) 3:

```javascript
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  console.log(i);
}
```

Let’s examine the for statement part-by-part:

- begin	```i = 0```	Executes once upon entering the loop.
- condition	```i < 3```	Checked before every loop iteration. If false, the loop stops.
- body	```console.log(i)```	Runs again and again while the condition is truthy.
- step	```i++```	Executes after the body on each iteration.

The general loop algorithm works like this:
```
Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...
```
That is, begin executes once, and then it iterates: after each condition test, body and step are executed.

### Inline variable declaration ###

Here, the "counter" variable i is declared right in the loop. This is called an “inline” variable declaration. Such variables are visible only inside the loop.
```javascript
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // error, no such variable
```

Instead of defining a variable, we could use an existing one:

```javascript
let i = 0;

for (i = 0; i < 3; i++) { // use an existing variable
  console.log(i); // 0, 1, 2
}

console.log(i); // 3, visible, because declared outside of the loop
```
### Skipping parts ###
Any part of ```for``` can be skipped.

For example, we can omit begin if we don’t need to do anything at the loop start.

Like here:
```javascript
let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  console.log( i ); // 0, 1, 2
}
```
We can also remove the ```step``` part:
```javascript
let i = 0;

for (; i < 3;) {
  console.log( i++ );
}
```
This makes the loop identical to while ```(i < 3)```.

We can actually remove everything, creating an infinite loop:
```javascript
for (;;) {
  // repeats without limits
}
```
> Please note that the two for semicolons ```;``` must be present. Otherwise, there would be a syntax error.

## Breaking the loop ##
Normally, a loop exits when its condition becomes falsy.

But we can force the exit at any time using the special break directive.

For example, the loop below asks the user for a series of numbers, "breaking" when no number is entered:

```javascript
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
console.log( 'Sum: ' + sum );
```
The ```break``` directive is activated at the line ```(*)``` if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely, alert.

The combination "infinite loop + ```break``` as needed" is great for situations when a loop’s condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body.

## Continue to the next iteration ##
The ```continue``` directive is a "lighter version" of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

```javascript
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  console.log(i); // 1, then 3, 5, 7, 9
}
```
For even values of ```i```, the ```continue ```directive stops executing the body and passes control to the next iteration of ```for``` (with the next number). So the ```console.log``` is only called for odd values.

### The continue directive helps decrease nesting ###
```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    alert( i );
  }
}
```
From a technical point of view, this is identical to the example above. Surely, we can just wrap the code in an ```if``` block instead of using ```continue```.

But as a side-effect, this created one more level of nesting (the ```console.log``` call inside the curly braces). If the code inside of if is longer than a few lines, that may decrease the overall readability.

> No break/continue to the right side of '```?```'

## Labels for break/continue ##
Sometimes we need to break out from multiple nested loops at once.

For example, in the code below we loop over ```i``` and ```j```, prompting for the coordinates ```(i, j)``` from ```(0,0)``` to ```(2,2)```:

```javascript
for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // what if we want to exit from here to Done (below)?
  }
}

console.log('Done!');
```
We need a way to stop the process if the user cancels the input.

The ordinary ```break``` after ```input``` would only break the inner loop. That’s not sufficient–labels, come to the rescue!

A **label** is an identifier with a colon before a loop:
```javascript
labelName: for (...) {
  ...
}
```
The break ```<labelName>``` statement in the loop below breaks out to the label:

```javascript
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}
console.log('Done!');
```
In the code above, ```break outer``` looks upwards for the label named ```outer``` and breaks out of that loop.

So the control goes straight from ```(*)``` to ```console.log('Done!')```.

We can also move the label onto a separate line:
```javascript
outer:
for (let i = 0; i < 3; i++) { ... }
```
The ```continue``` directive can also be used with a label. In this case, code execution jumps to the next iteration of the labeled loop.

### Labels do not allow to "jump" anywhere ###
Labels do not allow us to jump into an arbitrary place in the code.

For example, it is impossible to do this:

```javascript
break label; // doesn't jumps to the label below

label: for (...)
```
A call to ```break/continue``` is only possible from inside a loop and the label must be somewhere above the directive.


## **Summary** ##
We covered 3 types of loops:
- ```while``` – The condition is checked before each iteration.
- ```do..while``` – The condition is checked after each iteration.
- ```for (;;)``` – The condition is checked before each iteration, additional settings available.

- To make an "infinite" loop, usually the ```while(true)``` construct is used. Such a loop, just like any other, can be stopped with the ```break``` directive.

- If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the ```continue``` directive.

- ```break/continue``` support labels before the loop. A label is the only way for ```break/continue``` to escape a nested loop to go to an outer one.


