// get a reference to the textbox where the bill type is to be entered
const billType = document.querySelector('.billTypeText');
//get a reference to the add button
const addButton = document.querySelector('addToBillBtn');

//create a variable that will keep track of the total bill
const totalBill = 0; 

//add an event listener for when the add button is pressed
addButton.addEventListener('click', function(){
    var billAddField = billType.value;
    if (billAddField === "call"){
        totalBill += 2.75;
    }
    else if (billItem === "sms"){
        totaBill += "";
    }
});

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
