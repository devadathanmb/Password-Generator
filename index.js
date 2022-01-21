let rangeBar = document.querySelector(".rangebar");
let rangeBarValue = document.querySelector(".rangebar-value");
rangeBarValue.innerHTML = rangeBar.value;
let passwordLength = rangeBar.value;

// Displaying the range value 
rangeBar.addEventListener("input", function () {
    rangeBarValue.innerHTML = rangeBar.value;
    passwordLength = rangeBar.value;
});

//Password Keys
const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}

//Array of functions 
const getKey = [
    function upperCase() {
        return keys.upperCase.charAt(Math.floor(Math.random() * keys.upperCase.length));
    },
    function lowerCase() {
        return keys.lowerCase.charAt(Math.floor(Math.random() * keys.lowerCase.length));
    },
    function number() {
        return keys.number.charAt(Math.floor(Math.random() * keys.number.length));
    },
    function symbol() {
        return keys.symbol.charAt(Math.floor(Math.random() * keys.symbol.length));
    }
];


//Checkboxes
let upperCaseCheckBox = document.querySelector(".upper-checkbox");
let lowerCaseCheckBox = document.querySelector(".lower-checkbox");
let numsCaseCheckBox = document.querySelector(".nums-checkbox");
let symbolsCaseCheckBox = document.querySelector(".symbols-checkbox");


let passwordField = document.querySelector(".password-field");

let generateButton = document.querySelector(".generate-btn");

let password = "";

let passwordMsg = document.querySelector(".password-msg");

generateButton.addEventListener("click", function () {
    generatePassword();
});

//Function to generate password
function generatePassword() {
    if (upperCaseCheckBox.checked == false && lowerCaseCheckBox.checked == false && numsCaseCheckBox.checked == false && symbolsCaseCheckBox.checked == false) {
        passwordMsg.textContent = "Choose at least one checkbox below!";
        return;
    }
    console.log("Works");
    passwordField.value = "";
    password = "";
    changeBarColor();
    while (password.length < passwordLength) {
        let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
        if (keyToAdd.name == "upperCase" && upperCaseCheckBox.checked == true) {
            password += keyToAdd();
        } else if (keyToAdd.name == "lowerCase" && lowerCaseCheckBox.checked == true) {
            password += keyToAdd();
        } else if (keyToAdd.name == "number" && numsCaseCheckBox.checked == true) {
            password += keyToAdd();
        } else if (keyToAdd.name == "symbol" && symbolsCaseCheckBox.checked == true) {
            password += keyToAdd();
        }
    }

    if (passwordLength >= 13) {
        passwordMsg.textContent = "That's a great password!";
        passwordMsg.classList.add("password-msg-1");
    } else if (passwordLength >= 9) {
        passwordMsg.textContent = "That's a good password!";
        passwordMsg.classList.add("password-msg-2");
    } else if (passwordLength >= 7) {
        passwordMsg.textContent = "That's an okay password!";
        passwordMsg.classList.add("password-msg-3");
    } else {
        passwordMsg.textContent = "That's a weak password!";
        passwordMsg.classList.add("password-msg-4");
    }
    passwordField.value = password;
}

//Change color while moving range
rangeBar.addEventListener("input", changeBarColor);

function changeBarColor() {
    if (passwordLength >= 13) {
        passwordField.style.backgroundColor = "#006400";
    } else if (passwordLength >= 9) {
        passwordField.style.backgroundColor = "#2E8B57";
    } else if (passwordLength >= 7) {
        passwordField.style.backgroundColor = "rgb(239, 194, 15)";
    } else {
        passwordField.style.backgroundColor = "rgb(223, 102, 97)";
    }
}


//Copy the password into clipboard
let copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", function () {
    passwordField.select();
    passwordField.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordField.value);
})