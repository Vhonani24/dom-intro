//get a reference to the calculate button
const calButton = document.querySelector('.calculateBtn');

//get a reference to the billTotal element
const billTotal = document.querySelector('.billTotal');

//get a reference to the billString
const billString = document.querySelector('.billString');

var calculateBillFactory = billCalculations();

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
function calculateBtnClicked(){
    // get the string entered in the textArea
    /*var billStringField = billString.value;
    //split the string
    var billItems = billStringField.split(",");
    // a variable for the total phone bill.
    var totalPhoneBill = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            totalPhoneBill += 2.75;
        }
        else if (billItem === "sms"){
            totalPhoneBill += 0.75;
        }
    }*/
    //round to two decimals
    billTotal.innerHTML = calculateBillFactory.getCalculateBillString(billString.value);
    //var roundedBillTotal = totalPhoneBill.toFixed(2);
    //billTotal.innerHTML = roundedBillTotal;
    
    if(calculateBillFactory.getCalculateBillString(billString.value) >= 20 && calculateBillFactory.getCalculateBillString(billString.value) < 30){
        billTotal.classList.add('warning');
        billTotal.classList.remove('danger');
        
    }
    else if(calculateBillFactory.getCalculateBillString(billString.value) >= 30){
        billTotal.classList.add('danger');
        billTotal.classList.remove('warning'); 
    }
    else{
        billTotal.classList.remove('warning');
        billTotal.classList.remove('danger'); 
    }
}
//link the function to a click event on the calculate button
calButton.addEventListener('click', calculateBtnClicked);
