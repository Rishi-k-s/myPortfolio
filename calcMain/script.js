let mainInput = document.getElementById("mainInput");

let calcStr = "";
let finVal = "";

function addToDisp(val){
    console.log(val);
    calcStr+= val
    mainInput.value = calcStr;
}

function calcFunc(){
    finVal = eval(calcStr);
    mainInput.value = finVal;
    calcStr = finVal;
}
