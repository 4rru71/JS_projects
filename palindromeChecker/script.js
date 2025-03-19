const palindromeForm=document.getElementById("palindrome-checker");
const inputPalindrome= document.getElementById("text-input");
const resultDiv=document.getElementById("result");

const checkButton= document.getElementById("check-btn");



function cleanInputString(str) {
    //Elimina espacios, puntuación y caracteres especiales
    const regex =/[^a-zA-Z0-9áéíóúÁÉÍÓÚüÜ]/g;
    const newStr=str.replace(regex, '');
    //Normalizar y eliminar acentos
    let result= newStr.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    result=result.toLowerCase();
    return result;
}

function palindromeChecker(str){
    let invert=[];
    for(let i=str.length; i>0;i--){
        invert.push(str[i-1]);
    }
    //Pasamos el array a string
    invert=invert.join("");
    //Comparamos si es palindromo
    if(invert===str) return true;
    return false;
}

function showResult(result){
    if(result){
        resultDiv.innerHTML = `<p class="result">${inputPalindrome.value} is a palindrome</p>`;
    }else{
        resultDiv.innerHTML = `<p class="result">${inputPalindrome.value} is not a palindrome`;
    }
    resultDiv.classList.remove('hide');
}

function formActivity(e){
    e.preventDefault();
    if(inputPalindrome.value.trim() === ""){
        alert("Please input a value");
    }else{
    //Solo deja los numeros y letras
    //Colocamos el texto en minusculas para comenzar a comparar
    let text= cleanInputString(inputPalindrome.value);
    //True si es palindromo
    let result=palindromeChecker(text);
    //Despliega texto con el resultado
    showResult(result);
    inputPalindrome.value = '';
    }
};


palindromeForm.addEventListener("submit", formActivity);

