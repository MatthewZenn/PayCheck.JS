CardName = {
    "MASTER CARD": [50, 51, 52, 53, 54, 55, 56, 57, 58, 59], 
    "VISA": [40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 
    "AMERICAN EXPRESS": [34, 37],  
    "DISCOVER": [60, 61, 62, 63, 64, 65, 66, 67, 68, 69], 
    "DINERS CLUB": [30, 36, 38]
};

/**
 * Returns the name of the card provider.
 * @param {string} input - The card number.
 * @param {int} check - The checksum digit.
 * @param {int} multiple - The multiple to be used in the calculation.
 */
function IsValidLength(input) {
    return input.length == 16 || input.length == 14;
}

function GetCardVendor(input) {
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

function ChecksumPasses(input, sum) {
    var digitList = [];
    var sum = 0;

    for(let i = 0; i < input.length-1; i++) {
        digitList.push(Number(input[i]));
    }

    for (let i = 0; i < digitList.length; i++) {
        if(i % 2 == 0) {
            // Index is even
            if (digitList[i] * 2 >= 10) {
                sum += 1 + (digitList[i] * 2 % 10);
            } else {
                sum += digitList[i] * 2;
            }
        } else {
            sum += digitList[i];
        }
    }
    return ((sum + Number(input.slice(-1))) % 10) == 0;
}

exports.GetCardVendor = (input) => {
    return GetCardVendor(input);
}

exports.ChecksumPasses = (input) => {
    return ChecksumPasses(input);
}

exports.IsValidLength = (input) => {
    return IsValidLength(input);
}
