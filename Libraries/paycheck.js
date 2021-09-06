CardName = {
    "MASTER CARD": [50, 51, 52, 53, 54, 55, 56, 57, 58, 59], 
    "VISA": [40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 
    "AMERICAN EXPRESS": [34, 37],  
    "DISCOVER": [60, 61, 62, 63, 64, 65, 66, 67, 68, 69], 
    "DINERS CLUB": [30, 36, 38]
};

function Luhn(input, check, multiple) {
    var digitList = [];
    var sum = 0;

    for(let i = 0; i < input.length; i++) {
        digitList.push(Number(input[i]));
    }

    if(digitList.length < 14 || digitList.length > 16) {
        throw "Invalid Card Length";
    }

    for (let i = 0; i < digitList.length; i++) {
        if(i % 2 == 0) {
            // Index is even
            if (digitList[i] * multiple >= 10) {
                sum += 1 + (digitList[i] * multiple % 10);
            } else {
                sum += digitList[i] * multiple;
            }
        } else {
            sum += digitList[i];
        }
    }
    if (sum % 10 != check) {
        throw "Validation Error";
    }
    
    var keyFound = false;
    var cardName = "";

    for (var key in CardName) {
        for(let i = 0; i < CardName[key].length; i++) {
            if (CardName[key][i] == (input.substring(0,2))) {
                keyFound = true;
                cardName = key;
            }
        }
    }

    if(!keyFound) {
        throw "Identification Error"
    }
    else {
        return cardName;
    }
}

exports.CheckCard = (input, check, multiple) => {
    return Luhn(input, check, multiple);
}
