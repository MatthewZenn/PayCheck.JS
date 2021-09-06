![logo](https://github.com/MatthewZenn/PayCheck.JS/raw/main/Static/PayCheckJS_small.png)
# PayCheck.JS
A credit card validation library written in JavaScript

PayCheck.js is a library for quick, client-side card validation, that checks for formatting and identifies the card company, similar to sites like Amazon.
A demo of the library can be found [Here](https://matthewzenn.github.io/PayCheck.JS/). For security purposes, the demo library has been modifed and cannot validate actual card numbers.

Implementation of the library is as easy as linking the JavaScript file in your code, and calling the function with your desired parameters.

```javascript
function Luhn(input, check, multiple)
```

- ```input``` links to your site's number field
- ```check``` specfies the checksum digit
- ```multiple``` specifies the operator value to be used for the algorithm.