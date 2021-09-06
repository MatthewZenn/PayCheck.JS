![logo](https://github.com/MatthewZenn/PayCheck.JS/raw/main/Static/PayCheckJS_small.png)
# PayCheck.JS
A credit card validation library written in JavaScript

PayCheck.js is a library for quick, client-side card validation, that checks for formatting and identifies the card company, similar to sites like Amazon.
A demo of the library can be found [Here](https://matthewzenn.github.io/PayCheck.JS/). For security purposes, the demo library has been modifed and cannot validate actual card numbers.

Implementation of the library is as easy as linking the JavaScript file in your code, and calling the function with your desired parameters.

```javascript
    try {
        Luhn(input, check, multiple);
    } 
    catch(err) {
        alert(err);
    }
```

- ```input``` links to your site's number field
- ```check``` specfies the checksum digit
- ```multiple``` specifies the operator value to be used for the algorithm.

Paycheck also logs errors, making it easy to communicate to your users any problmes with thier details. The library logs 3 types of errors, which you can display in any way you see fit. A ```formatting error``` means the card length or format was inncorrect. While the algorthm does not check the length against card types, it can still be useful if too many characters are typed. A ```validation error``` means the card number failed the checksum test. The last error is an ```identification error``` that appears when the library cannot identify the card type. Due to the various forms of card payment, this does not necessarily mean the card is not valid. However, the check also returns an error containting the card type. So if your site's payment system only accepts certain brands, this check makes it easy to tell if the card type matches.