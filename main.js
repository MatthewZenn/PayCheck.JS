var field = document.getElementById('field');
var go = document.getElementById('button');
var text = document.getElementById('message');

go.addEventListener("click", () =>  {
    text.innerHTML = check(field.value);
});

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