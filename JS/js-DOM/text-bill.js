
// get a reference to the textbox where the bill type is to be entered
const billType = document.querySelector('.billTypeText');
//get a reference to the add button
const addButton = document.querySelector('.addToBillBtn');
const callTotal = document.querySelector('.callTotalOne');

const smsTotal = document.querySelector('.smsTotalOne');



const totalOne = document.querySelector('.totalOne');

var textBillfactory = billText();


//create a variable that will keep track of the total bill
// var totalCall = 0;
// var totalSms = 0;


//add an event listener for when the add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
addButton.addEventListener('click', function () {
    alert("Inside")
    //const calls = billType.value;
    //in the event listener check if the value in the bill type textbox is 'sms' or 'call'

    // if(billType.value==='call'){

    //     //alert(callTotal.value += 2.75);
    //     totalCall += 2.75;


    // }else if(billType.value==='sms'){
    //     totalSms += 0.65;
    // }
    textBillfactory.getTextBillString(billType.value);
    callTotal.innerHTML = textBillfactory.getTotalCallAmount().toFixed(2);
    smsTotal.innerHTML = textBillfactory.getTotalSmsAmount().toFixed(2);
    totalOne.innerHTML = textBillfactory.getTotalAmount().toFixed(2);

    if((totalCall + totalSms) >= 30 && (totalCall + totalSms) < 50 ){
        totalOne.classList.add('warning');
        totalOne.classList.remove('danger');

    }
    else if((totalCall+ totalSms) >= 50){
        totalOne.classList.add('danger');
        totalOne.classList.remove('warning');

    }
    else{
        totalOne.classList.remove('warning');
        totalOne.classList.remove('danger'); 
    }



});
