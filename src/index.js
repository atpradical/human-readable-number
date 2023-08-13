module.exports = function toReadable(number) {

    if (number === 0) {
        return 'zero';
    }

    let stringNumber = String(number);
    let lengthValue = String(number).length;
    let result;

    const simple = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];
    const unique = [
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];
    const dozens = [
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];
    const hundreds = [
        'one hundred',
        'two hundred',
        'three hundred',
        'four hundred',
        'five hundred',
        'six hundred',
        'seven hundred',
        'eight hundred',
        'nine hundred',
    ];

    if (lengthValue === 1) {
        result = simple[number - 1];
    }

    if (lengthValue === 2) {

        if (number >= 11 && number <= 19) {

            result = unique[number - 11];

        } else if (number % 10 === 0) {

            result = dozens[stringNumber[0] - 1];

        } else {

            result = `${dozens[stringNumber[0] - 1]} ${simple[stringNumber[1] - 1]}`
        }
    }

    if (lengthValue === 3) {

        if (number % 100 === 0) {

            result = hundreds[stringNumber[0] - 1];

        } else if (stringNumber[1] == 0) {

            result = `${hundreds[stringNumber[0] - 1]} ${simple[stringNumber[2] - 1]}`;

        } else {

            let twoDigitNumberStr = `${stringNumber[1]}${stringNumber[2]}`;

            twoDigitNumber = Number(twoDigitNumberStr);

            if (twoDigitNumber % 10 == 0) {

                result = `${hundreds[stringNumber[0] - 1]} ${dozens[twoDigitNumberStr[0] - 1]}`;

            } else if (twoDigitNumber >= 11 && twoDigitNumber <= 19) {

                result = `${hundreds[stringNumber[0] - 1]} ${unique[twoDigitNumber - 11]}`;

            } else {

                result = `${hundreds[stringNumber[0] - 1]} ${dozens[twoDigitNumberStr[0] - 1]} ${simple[twoDigitNumberStr[1] - 1]}`;

            }
        }
    }

    return result;
}

// let number = 207;
//
//
//
// console.log(result);
