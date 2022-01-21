let rangeBar = document.querySelector(".rangebar");
let rangeBarValue = document.querySelector(".rangebar-value");
rangeBarValue.innerHTML = rangeBar.value;
let passwordLength = rangeBar.value;

rangeBar.addEventListener("input", function(){
    rangeBarValue.innerHTML = rangeBar.value;
    passwordLength = rangeBar.value;
});

const keys = {
    upperCase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase : "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
  }

const getKey = [
    function upperCase(){
        return keys.upperCase.charAt(Math.floor(Math.random() * keys.upperCase.length));
    },
    function lowerCase(){
        return keys.lowerCase.charAt(Math.floor(Math.random() * keys.lowerCase.length));
    },
    function number(){
        return keys.number.charAt(Math.floor(Math.random() * keys.number.length));
    },
    function symbol(){
        return keys.symbol.charAt(Math.floor(Math.random() * keys.symbol.length));
    }
];

let upperCaseCheckBox = document.querySelector(".upper-checkbox");
let lowerCaseCheckBox = document.querySelector(".lower-checkbox");
let numsCaseCheckBox = document.querySelector(".nums-checkbox");
let symbolsCaseCheckBox = document.querySelector(".symbols-checkbox");


let passwordField = document.querySelector(".password-field");

let generateButton = document.querySelector(".generate-btn");

let password = "";

generateButton.addEventListener("click", function(){
    generatePassword();});

function generatePassword(){
    if(upperCaseCheckBox.checked == false && lowerCaseCheckBox.checked == false && numsCaseCheckBox.checked == false && symbolsCaseCheckBox.checked == false){
        console.log("So you want a password with none of these characters?");
        return;
    }
    console.log("Works");
    passwordField.value = "";
    password = "";
    while(password.length < passwordLength){
        let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
        if(keyToAdd.name == "upperCase" && upperCaseCheckBox.checked == true){
            password += keyToAdd();
        }
        else if(keyToAdd.name == "lowerCase" && lowerCaseCheckBox.checked == true){
            password+= keyToAdd();
        }
        else if(keyToAdd.name == "number" && numsCaseCheckBox.checked == true){
            password+= keyToAdd();
        }
        else if(keyToAdd.name == "symbol" && symbolsCaseCheckBox.checked == true){
            password+= keyToAdd();
        }
    }
    passwordField.value = password;
}

//Change color while moving range

// rangeBar.addEventListener("input", function(){
//     rangeBar.style.backgroundColor = "e"
// })