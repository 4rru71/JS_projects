let price = 19.5;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const changeDue=document.getElementById("change-due");//Despliegue de resultado
const purchaseBtn=document.getElementById("purchase-btn");
const cashCustomer=document.getElementById("cash-customer");
const changeDrawer=document.getElementById("changeDrawer");
const cash=document.getElementById("cash");//Input 
document.getElementById("total-price").textContent = price;



const unidades=[
    ['Pennies: $', 0.01],
    ['Nickels: $', 0.05],
    ['Dimes: $', 0.1],
    ['Quarters $:', 0.25],
    ['Ones $:', 1],
    ['Fives $:', 5],
    ['Tens $:', 10],
    ['Twenties $:', 20],
    ['Hundreds: $', 100]
];


function showChangeDrawer(){
    // Con map se construye el HTML y luego se despliega

        changeDrawer.innerHTML = cid.map((el, index) => 
            `<p>${unidades[index][0]}${cid[index][1]}</p>`
        ).join('');
}
showChangeDrawer();

function calculateChange(cash){
    let change=Math.round((cash - price) * 100) / 100;
    //Respaldo en caso de fondos insuficientes
    const arrCopy = cid.map(el => [...el]); // Clonar array

    changeDue.innerHTML=`<p class="result">Status: OPEN</p>`;
    //En caso de tener que cambiar el Status
    let statusElement = changeDue.querySelector(".result");// Selecciona el primer <p>
    
    for(let i=cid.length-1;i>=0;i--){
        let tempU = unidades[i][1];
        let cont = 0;

        while (tempU <= change && cid[i][1] > 0) {
            cid[i][1] = Math.round((cid[i][1] - tempU) * 100) / 100;
            change = Math.round((change - tempU) * 100) / 100;
            cont++;
        }

      

        if (cont > 0) {
            changeDue.insertAdjacentHTML("beforeend", 
                `<p class="result"> ${cid[i][0]}: $${Math.round((cont * unidades[i][1]) * 100) / 100}</p>`
            );
        }
        //Si al dar el cambio se agotan los fondos
        if (cid.every(el => el[1] === 0) && change === 0 && statusElement) {
            statusElement.textContent = "Status: CLOSED";// Cambia solo el estado
        }

        if (!change) break;
    }
    if(change>0){ 
        changeDue.innerHTML=`<p class="result">Status: INSUFFICIENT_FUNDS</p>`;
        cid = arrCopy.map(el => [...el]);
    }


}

function formActivity(e){
    e.preventDefault(); 
    let cashValue = parseFloat(cash.value);
    if(cashValue<price){
        alert("Customer does not have enough money to purchase the item");
    }
    else if(cashValue===price){
        changeDue.innerHTML=`<p class="result">No change due - customer paid with exact cash</p>`;
    }else{
        changeDrawer.innerHTML=``;
        calculateChange(cashValue);
        showChangeDrawer();
    }


}

cashCustomer.addEventListener("submit",formActivity)




