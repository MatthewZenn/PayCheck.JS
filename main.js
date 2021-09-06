var field = document.getElementById('field');
var go = document.getElementById('button');
var text = document.getElementById('message');

go.addEventListener("click", () =>  {
    try {
        var key = exports.CheckCard(field.value, 0, 2);
        text.innerHTML = key;
    } 
    catch(err) {
        text.innerHTML = err;
    }   
});