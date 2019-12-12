var letters   = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers   = "1234567890";
var symbols   = "!@#$%^&*?~";

var useLetters   = true;
var useUppercase = true;
var useNumbers   = true;
var useSymbols   = true;


// sets generic initial password length
passwordLength = 12;

// begins slider/input relationship and password length adjustments
var slider = document.getElementById("passwordRange");
var passwordInput = document.getElementById("passwordInput");


passwordInput.oninput = function () {
    document.getElementById("passwordRange").value = this.value;
    passwordLength = this.value;
    return passwordLength;
}

slider.oninput = function () {
    document.getElementById("passwordInput").value = this.value;
    passwordLength = this.value;
    return passwordLength;
}


// toggle checkboxes to allow different characters
function toggleLowerCase() {
    var checkBox = document.getElementById("lowerLetCheck");
    if (checkBox.checked) {
        useLetters = true;
        return useLetters;
    } else {
        useLetters = false;
        return useLetters;
    }
}

function toggleUpperCase() {
    var checkBox = document.getElementById("upperLetCheck");
    if (checkBox.checked) {
        useUppercase = true;
        return useUppercase;
    } else {
        useUppercase = false;
        return useUppercase;
    }
}

function toggleNumbers() {
    var checkBox = document.getElementById("numcheck");
    if (checkBox.checked) {
        useNumbers = true;
        return useNumbers;
    } else {
        useNumbers = false;
        return useNumbers;
    }
}

function toggleSymbols() {
    var checkBox = document.getElementById("symbCheck");
    if (checkBox.checked) {
        useSymbols = true;
        return useSymbols;
    } else {
        useSymbols = false;
        return useSymbols;
    }
}


// function to generate unique password based on user selections
function generatePassword(length) {
    var randomVal = '';
    var password  = '';

    function assembleString(useChar, char) {
        if (useChar){
            randomVal += char.charAt(Math.floor(Math.random() * char.length));
        }
    }

    console.log(randomVal);

    for (var i = 0; i < length; i++) {
        assembleString(useLetters, letters);
        assembleString(useUppercase, upperCase);
        assembleString(useNumbers, numbers);
        assembleString(useSymbols, symbols);
    }

    for (var j = 0; j < length; j++) {
        password += randomVal.charAt(Math.floor(Math.random() * randomVal.length));
    }

    var input = document.getElementById("password");
    input.value = password;

    return password;
}

// copy password value to clipboard
function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    // copyText = setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the password: " + copyText.value);
}

// console.log(generatePassword(passwordLength));

