var field = document.getElementById('field');
var go = document.getElementById('button');

go.addEventListener("click", () =>  {
    try {
        Luhn(field.value, 5, 2);
    } 
    catch(err) {
        alert(err);
    }   
});