function displayNum(num){
    result.value += num;
}

function clrText(){
    result.value = "";
}

function evaluateNum() {
    // exp= result.value
    // res=eval(exp)
    // result.value=res
    result.value= eval(result.value)
}
 function removeLastChr() {
    result.value = result.value.slice(0,-1)
 }

