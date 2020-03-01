# Data types

There are **8** basic data types in JavaScript:
- number
- bigint
- string
- boolean
- null
- undefined
- object 
- symbol

## Number

```javascript
let n = 123;
n = 12.345;
```
The number type represents both integer and floating point numbers.

There are many operations for numbers, e.g. multiplication ``*``, division ``/``, addition ``+``, subtraction ``-``, and so on.

Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: ``Infinity``, ``-Infinity`` and ``NaN``.

### Infinity
Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

We can get it as a result of division by zero:
```javascript
console.log(1/0) // Infinity
```

Or just reference it directly:
```javascript
console.log(Infinity) // Infinity
```
### NaN
``NaN`` represents a computational error. It is a result of an incorrect or an undefined mathematical operation - Not a Number
```javascript
console.log('some text' / 2) // NaN, such division is erroneous
```

``NaN`` is sticky. Any further operation on ``NaN ``returns ``NaN``:
```javascript
console.log('some text' / 2 + 5) // NaN
```
So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result.

> Mathematical operations are safe.
Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.

> The script will never stop with a fatal error (“die”). At worst, we’ll get ``NaN`` as the result.

## BigInt
In JavaScript, the “number” type cannot represent integer values larger than 253 (or less than -253 for negatives), that’s a technical limitation caused by their internal representation. That’s about 16 decimal digits, so for most purposes the limitation isn’t a problem, but sometimes we need really big numbers, e.g. for cryptography or microsecond-precision timestamps.

BigInt type was recently added to the language to represent integers of arbitrary length.

A ``BigInt`` is created by appending n to the end of an integer literal:

```javascript
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n; // <- n
```
> As BigInt numbers are rarely needed

> Right now (2020/02) BigInt is supported in Firefox and Chrome, but not in Safari/IE/Edge.

## String
A string in JavaScript must be surrounded by quotes.

In JavaScript, there are 3 types of quotes.

- Double quotes: ``"Hello"``.
- Single quotes: ``'Hello'``.
- Backticks: `` `Hello` ``.

```javascript
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
```

Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ``${…}``, for example:

```javascript
let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
```

## Boolean
The boolean type has only two values: ``true`` and ``false``.

This type is commonly used to store yes/no values: true means **"yes, correct"**, and false means **"no, incorrect"**.

```javascript
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
```

Boolean values also come as a result of comparisons:

```javascript
let isGreater = 4 > 1; // true
```

## null
The special null value does not belong to any of the types described above.

It forms a separate type of its own which contains only the null value:

```javascript
let age = null;
```
It’s just a special value which represents **"nothing"**, **"empty"** or **"value unknown"**.

## undefined
The special value ``undefined`` also stands apart. It makes a type of its own, just like ``null``.

The meaning of ``undefined`` is **"value is not assigned"**.

If a variable is declared, but not assigned, then its value is ``undefined``:

```javascript
let x;
console.log(x); // undefined
```
Technically, it is possible to assign ``undefined`` to any variable:

```javascript
let x = undefined;
```
> …But we don’t recommend doing that. Normally, we use null to assign an **"empty"** or **"unknown"** value to a variable, and we use ``undefined`` for checks like seeing if a variable has been assigned.

## Object
> The object type is special. (reference type)

All other types are called "primitive" because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities. We’ll deal with them later in the chapter Objects after we learn more about primitives.

## Symbol
The symbol type is used to create unique identifiers for objects. We mention it here for completeness, but we’ll study it after objects.

## The typeof operator
The ``typeof`` operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.

It supports two forms of syntax:

- As an operator: ``typeof x``.
- As a function: ``typeof(x)``.

The call to ``typeof x`` returns a ``string`` with the type name:

```javascript
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof null // "object"

typeof function() {} // "function"
```

> The result of typeof ``null`` is ``"object"``. That’s wrong. It is an officially recognized error in typeof, kept for compatibility. Of course, ``null`` is not an ``object``. It is a special value with a separate type of its own. So, again, this is an **error in the language**.

## **Summary**
> There are **8** basic **data types** in JavaScript.

- ``number`` for numbers of any kind: integer or floating-point, integers are limited by ±253.
- ``bigint`` is for integer numbers of arbitrary length.
- ``string`` for strings. A string may have one or more characters, there’s no separate single-character type.
- ``boolean`` for true/false.
- ``null`` for unknown values – a standalone type that has a single value null.
- ``undefined`` for unassigned values – a standalone type that has a single value undefined.
- ``object`` for more complex data structures.
- ``symbol`` for unique identifiers.

> The ``typeof`` operator allows us to see which type is stored in a variable.

- Two forms: ``typeof x`` or ``typeof(x)``.
- Returns a ``string`` with the name of the type, like ``"string"`` or ``"number"``.
- For null returns ``"object"`` – this is an **error in the language**, it’s **not actually an object**.