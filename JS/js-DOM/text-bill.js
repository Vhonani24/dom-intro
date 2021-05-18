
// get a reference to the textbox where the bill type is to be entered
const billType = document.querySelector('.billTypeText');
//get a reference to the add button
const addButton = document.querySelector('.addToBillBtn');
const callTotal = document.querySelector('.callTotalOne');

const smsTotal = document.querySelector('.smsTotalOne');



const totalOne = document.querySelector('.totalOne');

var textBillfactory = billText();


/
addButton.addEventListener('click', function () {
    
    textBillfactory.getTextBillString2(billType.value);
    callTotal.innerHTML = textBillfactory.getTotalCallAmount2().toFixed(2);
    smsTotal.innerHTML = textBillfactory.getTotalSmsAmount2().toFixed(2);
    totalOne.innerHTML = textBillfactory.getTotalAmount2().toFixed(2);

    
    totalOne.classList.add(textBillfactory.getTextClassName2());

   


});
