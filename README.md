![logo](https://github.com/MatthewZenn/PayCheck.JS/raw/main/Static/PayCheckJS_small.png)
# PayCheck.JS
A credit card validation library written in JavaScript

PayCheck.js is a library for quick, client-side card validation, that checks for formatting and identifies the card company, similar to sites like Amazon.
A demo of the library can be found [Here](https://matthewzenn.github.io/PayCheck.JS/).

Implementation of the library is as easy as adding the library to your project and calling the function with your desired parameters.

```javascript
function check(input) {
    try {
        if(!exports.IsValidLength(input)) {
            return "Card length is not valid.";
        }
        if(!exports.ChecksumPasses(input)) {
            return "Card number is not valid.";
        }
        return "Identified: " + exports.GetCardVendor(field.value);
    } 
    catch(err) {
        return err;
    }
}
```
The input feild dhould be linked to your site's input method when you call the funtion, like so:

```javascript
your_button.addEventListener("click", () =>  {
    text.innerHTML = check(your_input.value);
});
```

Paycheck also logs returns, making it easy to communicate to your users any problems with their details. The library logs 3 types of data, which you can display in any way you see fit. A ```formatting error``` means the card length or format was inncorrect. While the algorthm does not check the length against card types, it can still be useful if too many characters are typed. A ```validation error``` means the card number failed the checksum test. The last error is an ```identification error``` that appears when the library cannot identify the card type. Due to the various forms of card payment, this does not necessarily mean the card is not valid. However, the check also returns the card type. So if your site's payment system only accepts certain brands, this check makes it easy to tell if the card type matches.