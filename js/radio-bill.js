
{
// get a reference to the sms or call radio buttons

//get a reference to the add button
const addRadioButton = document.querySelector('.radioBillAddBtn');

const callTotalTwo = document.querySelector('.callTotalTwo');
const smsTotal = document.querySelector('.smsTotalTwo');

const totalSettings = document.querySelector('.totalTwo');

//create a variable that will keep track of the total bill

var totalCall = 0;
var totalSms = 0;
//add an event listener for when the add button is pressed
addRadioButton.addEventListener('click', function(){
    var radioButton = document.querySelector("input[name='billItemType']:checked")
    //const calls = billType.value;
    //in the event listener check if the value in the bill type textbox is 'sms' or 'call'

    if (radioButton){
        var billItemType = radioButton.value
        // billItemType will be 'call' or 'sms'

        if(billItemType==='call'){
    
            //alert(callTotal.value += 2.75);
            totalCall += 2.75;
            
    
        }else if(billItemType==='sms'){
            totalSms += 0.65;
        }
    }
    
    callTotalTwo.innerHTML = totalCall.toFixed(2);
    smsTotal.innerHTML = totalSms.toFixed(2);
    totalSettings.innerHTML = (totalCall + totalSms).toFixed(2);


 
});


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
/////

}