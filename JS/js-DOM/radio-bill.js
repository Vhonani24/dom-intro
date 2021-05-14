

// get a reference to the sms or call radio buttons

//get a reference to the add button
const addRadioButton = document.querySelector('.radioBillAddBtn');

const callTotalTwo = document.querySelector('.callTotalTwo');
const smsTotalRadioTwo = document.querySelector('.smsTotalTwo');

const totalSettingsTwo = document.querySelector('.totalTwo');


var radioBillFactory = radioBills();

//create a variable that will keep track of the total bill
//var addRadioButton = document.querySelector("input[name='billItemType']:checked");

//var totalCallTwo = 0;
//var totalSmsTwo = 0;
//add an event listener for when the add button is pressed
function radioBtnTotal(){
    var addRadioButtonTwo = document.querySelector("input[name='billItemType']:checked");
    //const calls = billType.value;
    //in the event listener check if the value in the bill type textbox is 'sms' or 'call'

    /*if (addRadioButtonTwo){
        var billItemType2  = addRadioButtonTwo.value
        // billItemType2  will be 'call' or 'sms'

        if(billItemType2 ==='call'){
    
            //alert(callTotal.value += 2.75);
            totalCallTwo += 2.75;
            
    
        }else if(billItemType2 ==='sms'){
            totalSmsTwo += 0.65;
        }
    }*/
   
   
    radioBillFactory.getRadioBillString(addRadioButtonTwo.value);

    //alert('you clicked me');
    
    callTotalTwo.innerHTML = radioBillFactory.getRadioTotalCallAmount().toFixed(2);//totalCallTwo.toFixed(2);
    smsTotalRadioTwo.innerHTML = radioBillFactory.getRadioTotalSmsAmount().toFixed(2);//totalSmsTwo.toFixed(2);
    var totalCosts = radioBillFactory.getRadioTotalAmount();//totalCallTwo + totalSmsTwo;
    totalSettingsTwo.innerHTML = totalCosts.toFixed(2);

    totalSettingsTwo.classList.add(radioBillFactory.getRadioClassName());

    /*if(totalCosts >= 30 && totalCosts < 50 ){
        totalSettingsTwo.classList.add('warning');
        totalSettingsTwo.classList.remove('danger');
    }
    else if(totalCosts >= 50){
        totalSettingsTwo.classList.add('danger');
        totalSettingsTwo.classList.remove('warning');
        
    }
    else{
        totalSettingsTwo.classList.remove('warning');
        totalSettingsTwo.classList.remove('danger'); 
    }*/


}

addRadioButton.addEventListener('click', radioBtnTotal)


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
/////
