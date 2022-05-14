let text = document.querySelector('#userInputText');
let result = document.querySelector('#result');
let criptBtn = document.querySelector('#cript');


function criptografar(){
    var newText = text.value
    console.log(newText)
    result.textContent = newText.toUpperCase();
}

criptBtn.addEventListener("click", criptografar);