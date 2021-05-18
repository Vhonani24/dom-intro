

// get a reference to the sms or call radio buttons

//get a reference to the add button
const addRadioButton = document.querySelector('.radioBillAddBtn');

const callTotalTwo = document.querySelector('.callTotalTwo');
const smsTotalRadioTwo = document.querySelector('.smsTotalTwo');

const totalSettingsTwo = document.querySelector('.totalTwo');


var radioBillFactory = radioBills();


function radioBtnTotal(){
    var addRadioButtonTwo = document.querySelector("input[name='billItemType']:checked");
   
   
   
    radioBillFactory.getRadioBillString2(addRadioButtonTwo.value);

    //alert('you clicked me');
    
    callTotalTwo.innerHTML = radioBillFactory.getRadioTotalCallAmount2().toFixed(2);//totalCallTwo.toFixed(2);
    smsTotalRadioTwo.innerHTML = radioBillFactory.getRadioTotalSmsAmount2().toFixed(2);//totalSmsTwo.toFixed(2);
    var totalCosts = radioBillFactory.getRadioTotalAmount2();//totalCallTwo + totalSmsTwo;
    totalSettingsTwo.innerHTML = totalCosts.toFixed(2);

    totalSettingsTwo.classList.add(radioBillFactory.getRadioClassName2());


}

addRadioButton.addEventListener('click', radioBtnTotal)

