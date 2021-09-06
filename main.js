var field = document.getElementById('field');
var go = document.getElementById('button');
var text = document.getElementById('message');

go.addEventListener("click", () =>  {
    try {
        Luhn(field.value, 5, 2);
    } 
    catch(err) {
        text.innerHTML = err;
    }   
});