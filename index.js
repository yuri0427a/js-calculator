let myTotal = 0;
let myInput = "";
let myCalc = "+";
let myFlg = 1;

window.myValue =function myValue(myData) {
    myFlg = 0;
    myInput += myData;
    document.myForm.myLine.value = myInput;
}

window.myCalculate =　function myCalculate(myData) {
    if (myFlg == 0) {
        myFlg = 1;
        let myWork = myTotal + myCalc + myInput;
        myTotal = eval(myWork);
        myInput = "";
        document.myForm.myLine.value = myTotal;
    }
    if (myData == "=") {
        myTotal = 0;
        myCalc = "+";
    } else {
        myCalc = myData;
    }
}


window.myC = function myC() {
    myTotal = 0;
    myCalc = "+";
    myInput = "";
    document.myForm.myLine.value = myTotal;
}