var letters   = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers   = "1234567890";
var symbols   = "!@#$%^&*?~";

var useLetters   = true;
var useUppercase = true;
var useNumbers   = true;
var useSymbols   = true;

passwordLength = 12;

function passwordLengthOptions() {
    var lengthOptions = "<option value='0'>select</option>";
    
    for (i = 8; i <= 120; i++) {
        lengthOptions += "<option value='" + i + "'>" + i + "</option>"
    }

    document.getElementById('exampleFormControlSelect1').innerHTML = lengthOptions;
}

var slider = document.getElementById("passwordRange");
var sliderOutput = document.getElementById("sliderOutput");
sliderOutput.innerHTML = passwordLength;

slider.oninput = function () {
    sliderOutput.innerHTML = this.value;
    passwordLength = this.value;
    return passwordLength;
}


// function to copy password to clipboard
// NOT WORKING CURRENTLY
function copyPassword() {
    var copyText = document.getElementById("password");
    copyText = select();
    copyText = setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the password: " + copyText.value);
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

// console.log(generatePassword(passwordLength));

