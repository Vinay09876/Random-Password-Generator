let passwordBox = document.getElementById("input");
let length = "8";

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789"
let symbols = "!@#$%^&*()_+-=/?<>"

let all = upperCase + lowerCase + numbers + symbols;

function passwordBtn() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]

    while (length > password.length) {
        password += all[Math.floor(Math.random() * all.length)]
    }
    passwordBox.value = password
}

function copyBtn() {
    passwordBox.select();
    document.execCommand("copy");
}