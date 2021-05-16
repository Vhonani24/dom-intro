// get a reference to the sms or call radio buttons

// get refences to all the settings fields
/*var callCostSetting = document.querySelector('.callCostSetting');
var smsCostSetting = document.querySelector('.smsCostSetting');
var warningLevelSetting = document.querySelector('.warningLevelSetting');
var criticalLevelSetting = document.querySelector('.criticalLevelSetting');

var callTotalSettings = document.querySelector('.callTotalSettings');
var smsTotalSettings = document.querySelector('.smsTotalSettings');
var totalSettings = document.querySelector('.totalSettings');

//get a reference to the add button
const addBtn = document.querySelector('.addBtn');

//get a reference to the 'Update settings' button
const updateBtn = document.querySelector('.updateSettings');

// create a variables that will keep track of all the settings
//var callCostSettingOne = 0;
//var smsCostSettingOne = 0;
//var warningLevelSettingOne = 0 ;
//var criticalLevelSettingOne = 0;

var settingsBillFactory = billWithSettings();

// create a variables that will keep track of all three totals.
//var callCostTotal = 0;
//var smsCostTotal = 0;
//var overAllTotal = 0; 

//var totalCostSettings = 0

/*function setColors(){
    if(totalCostSettings >= warningLevelSettingOne && totalCostSettings < criticalLevelSettingOne){
        totalSettings.classList.add('warning');
        totalSettings.classList.remove('danger');
        
    }
    else if(totalCostSettings >= criticalLevelSettingOne){
        totalSettings.classList.add('danger');
        totalSettings.classList.remove('warning');
        
    }
    else{
        totalSettings.classList.remove('warning');
        totalSettings.classList.remove('danger'); 
    }
}*/
  




//function to set values
/*function setValues(){
    settingsBillFactory.setCallCost(callCostSetting.value);
    settingsBillFactory.setSmsCost(smsCostSetting.value);
    settingsBillFactory.setWarningLevel(warningLevelSetting.value);
    settingsBillFactory.setCriticalLevel(criticalLevelSetting.value);
    //setColors();
}



addBtn.addEventListener('click', radioBtnTotalSettings);
function radioBtnTotalSettings(){
  //setValues();
  var addRadioBtnSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  //const calls = billType.value;
  //in the event listener check if the value in the bill type textbox is 'sms' or 'call'

  if (addRadioBtnSettings){
      var billItemTypeSettings  = addRadioBtnSettings.value;
      console.log(billItemTypeSettings);
      // billItemType2  will be 'call' or 'sms'
    }
    settingsBillFactory.getCallCost();
    settingsBillFactory.getSmsCost();

    if(billItemTypeSettings ==='call'){
        //console.log('vhonani');
        //settingsBillFactory.getCallCost();
        settingsBillFactory.makeCall();
        //console.log(settingsBillFactory.getTotalCallCost());
        //totalCostSettings += callCostSettingOne;
     }
  if(billItemTypeSettings ==='sms'){
         console.log('vhonani');
         //settingsBillFactory.getSmsCost();
         settingsBillFactory.sendSms();
        // console.log(settingsBillFactory.getTotalSmsCost());
         //totalCostSettings  += smsCostSettingOne;
     }
      
      /*if((settingsBillFactory.getTotalCost()) < settingsBillFactory.getCriticalLevel()){
           //console.log('working');
          if(billItemTypeSettings ==='call'){
               //console.log('vhonani');
               //settingsBillFactory.getCallCost();
               settingsBillFactory.makeCall();
               //console.log(settingsBillFactory.getTotalCallCost());
               //totalCostSettings += callCostSettingOne;
            }
         if(billItemTypeSettings ==='sms'){
                console.log('vhonani');
                //settingsBillFactory.getSmsCost();
                settingsBillFactory.sendSms();
               // console.log(settingsBillFactory.getTotalSmsCost());
                //totalCostSettings  += smsCostSettingOne;
            }
        }*/
         
         /*callTotalSettings.innerHTML = settingsBillFactory.getTotalCallCost().toFixed(2);
         smsTotalSettings.innerHTML = settingsBillFactory.getTotalSmsCost().toFixed(2);
         totalSettings.innerHTML = settingsBillFactory.getTotalCost().toFixed(2);*/
   

  
  
  //setColors();

  








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
}

//function for add button & makings calls n Sms
function addRadioBtnSettings(){
    var checkRadioSettings = document.querySelector('input[name="billItemTypeWithSettings"]:checked');
    if(checkRadioSettings){
        var checkRadioSettings2 = checkRadioSettings.value;
    }
    settingsBillFactory.getCallCost();
    settingsBillFactory.getSmsCost();
    if(checkRadioSettings2==='call'){
        settingsBillFactory.makeCall();
        console.log('call');
    }
    if(checkRadioSettings2==='sms'){
        settingsBillFactory.sendSms();
        console.log('sms');
    }
    callTotalSetting.innerHTML = settingsBillFactory.getTotalCallCost().toFixed(2);
    smsTotalSettings.innerHTML = settingsBillFactory.getTotalSmsCost().toFixed(2);
    totalSettings.innerHTML = settingsBillFactory.getTotalCost().toFixed(2);

}
//set the buttons
addBtn.addEventListener('click', addRadioBtnSettings);
updateBtn.addEventListener('click', setUpdateValues);