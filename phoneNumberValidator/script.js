const converterForm=document.getElementById("number-validator");//formulario
const inputNum= document.getElementById("user-input");
const resultDiv=document.getElementById("results-div");
const clearButton= document.getElementById("clear-btn");

const clearDiv=()=>{
    resultDiv.innerHTML = "";
    inputNum.value="";
}

function formActivity(e){
    e.preventDefault();
    if(inputNum.value.trim() === "")
        alert("Please provide a phone number");
    else{
        //Expresión regular para un número EE.UU.
        const usPhoneRegex = /^(?:\+?1\s?)?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
        usPhoneRegex.test(inputNum.value)?
        resultDiv.innerHTML += `<p class="result">Valid US number: ${inputNum.value} </p>`
        :
        resultDiv.innerHTML += `<p class="result">Invalid US number: ${inputNum.value}</p>`
        inputNum.value="";
    }  
};

converterForm.addEventListener("submit",formActivity);
clearButton.addEventListener("click",clearDiv);