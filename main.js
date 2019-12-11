var letters   = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers   = "1234567890";
var symbols   = "!@#$%^&*?~";

var useLetters   = true;
var useUppercase = true;
var useNumbers   = true;
var useSymbols   = true;


function generatePassword(length) {
    var randomVal = '';
    var password  = '';

    function assembleString(useChar, char) {
        if (useChar){
            randomVal += char.charAt(Math.floor(Math.random() * char.length));
        }
    }

    for (var i = 0; i < length; i++) {
        assembleString(useLetters, letters);
        assembleString(useUppercase, upperCase);
        assembleString(useNumbers, numbers);
        assembleString(useSymbols, symbols);
    }

    for (var j = 0; j < length; j++) {
        password += randomVal.charAt(Math.floor(Math.random() * randomVal.length));
    }

    return password;
}

console.log(generatePassword(12));

