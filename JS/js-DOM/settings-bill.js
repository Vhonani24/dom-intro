











//add an event listener for when the 'Update settings' button is pressed
////updateBtn.addEventListener('click', setValues);

//add an event listener for when the add button is pressed
//addBtn.addEventListener('click', radioBtnTotalSettings);


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

//Reference to settings fields
var callCostSetting = document.querySelector('.callCostSetting');
var smsCostSetting = document.querySelector('.smsCostSetting');
var warningLevelSetting = document.querySelector('.warningLevelSetting');
var criticalLevelSetting = document.querySelector('.criticalLevelSetting');
//Reference to the total fields
var callTotalSetting = document.querySelector('.callTotalSettings');
var smsTotalSettings = document.querySelector('.smsTotalSettings');
var totalSettings = document.querySelector('.totalSettings');
//Reference to buttons
const addBtn = document.querySelector('.addBtn');
const updateBtn = document.querySelector('.updateSettings');
//set up the factory function instance
var settingsBillFactory = billWithSettings();

//function to set values when you click update button
function setUpdateValues(){
    settingsBillFactory.setCallCost(callCostSetting.value);
    settingsBillFactory.setSmsCost(smsCostSetting.value);
    settingsBillFactory.setWarningLevel(warningLevelSetting.value);
    settingsBillFactory.setCriticalLevel(criticalLevelSetting.value)
    addRemoveClasses();
}

//function for add button & makings calls n Sms
function addRadioBtnSettings(){
    var checkRadioSettings = document.querySelector('input[name="billItemTypeWithSettings"]:checked');
    if(checkRadioSettings){
        var checkRadioSettings2 = checkRadioSettings.value;
    }
    if((settingsBillFactory.getTotalCost()) < settingsBillFactory.getCriticalLevel()){
        if(checkRadioSettings2==='call'){
            settingsBillFactory.makeCall();
            settingsBillFactory.stopCostCount()
            console.log('call');
        }
        if(checkRadioSettings2==='sms'){
            settingsBillFactory.sendSms();
            settingsBillFactory.stopCostCount()
            console.log('sms');
        }

    }  
   
    callTotalSetting.innerHTML = settingsBillFactory.getTotalCallCost().toFixed(2);
    smsTotalSettings.innerHTML = settingsBillFactory.getTotalSmsCost().toFixed(2);
    totalSettings.innerHTML = settingsBillFactory.getTotalCost().toFixed(2);
    addRemoveClasses();

}
function addRemoveClasses(){
    
    totalSettings.classList.remove('warning');
    totalSettings.classList.remove('danger');

    totalSettings.classList.add(settingsBillFactory.getClassName());  
    

}
//set the buttons
addBtn.addEventListener('click', addRadioBtnSettings);
updateBtn.addEventListener('click', setUpdateValues);