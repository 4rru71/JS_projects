const converterForm=document.getElementById("romanConverter");//formulario
const inputNum= document.getElementById("number");
const resultDiv=document.getElementById("output");
const convertButton= document.getElementById("convert-btn");





function romanNumeralConverter(num){
    const romanNumerals=[
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];
    let result="";

    for (const { value, symbol } of romanNumerals) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
    
}


function formActivity(e){
    e.preventDefault();

    if(inputNum.value.trim() === ""){
        resultDiv.innerHTML = `<p class="result">Please enter a valid number</p>`;
        resultDiv.classList.remove('hide');
    }else if(inputNum.value <=0){
        resultDiv.innerHTML = `<p class="result">Please enter a number greater than or equal to 1</p>`;
        resultDiv.classList.remove('hide');

    }else if(inputNum.value >=4000){
        resultDiv.innerHTML = `<p class="result">Please enter a number less than or equal to 3999</p>`;
        resultDiv.classList.remove('hide');

    }else{
        resultDiv.innerHTML = `<p class="result">${romanNumeralConverter(inputNum.value)} </p>`;
        resultDiv.classList.remove('hide');
    }
};
converterForm.addEventListener("submit",formActivity);