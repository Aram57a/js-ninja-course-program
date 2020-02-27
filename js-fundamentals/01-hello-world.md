# Hello World

### The "script" tag
JavaScript programs can be inserted into any part of an HTML document with the help of the ```<script>``` tag.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    console.log('Hello, world!')
  </script>
</body>
</html>
```
The ```<script>``` tag contains JavaScript code which is automatically executed when the browser processes the tag.

### External scripts
If we have a lot of JavaScript code, we can put it into a separate file.

Script files are attached to HTML with the **src** attribute:

```html
<script src="/path/to/script.js"></script>
```
or we can give a full URL as well
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"></script>
```
> The benefit of a separate file is that the browser will download it and store it in its cache.

We must choose either an external ```<script src="…">``` or a regular ```<script>``` with code.

A single ```<script>``` tag can’t have both the src attribute and code inside. If src is set, the script content is ignored.
```html
<script src="file.js">
  console.log('Hello, World!') // the content is ignored, because src is set
</script>
```

## Summary
- We can use a ```<script>``` tag to add JavaScript code to a page.
- A script in an external file can be inserted with ```<script src="path/to/script.js"></script>```.


