// get a reference to the sms or call radio buttons

// get refences to all the settings fields
var callCostSetting = document.querySelector('.callCostSetting');
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
var callCostSettingOne = 0;
var smsCostSettingOne = 0;
var warningLevelSettingOne = 0 ;
var criticalLevelSettingOne = 0;

// create a variables that will keep track of all three totals.
var callCostTotal = 0;
var smsCostTotal = 0;
var overAllTotal = 0; 



//function to set values
function setValues(){
    callCostSettingOne = parseFloat(callCostSetting.value);
    smsCostSettingOne = parseFloat(smsCostSetting.value);
    warningLevelSettingOne = parseFloat(warningLevelSetting.value);
    criticalLevelSettingOne = parseFloat(criticalLevelSetting.value);
  
    
}


addBtn.addEventListener('click', radioBtnTotalSettings);
function radioBtnTotalSettings(){
  var addRadioBtnSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  //const calls = billType.value;
  //in the event listener check if the value in the bill type textbox is 'sms' or 'call'

  if (addRadioBtnSettings){
      var billItemTypeSettings  = addRadioBtnSettings.value
      // billItemType2  will be 'call' or 'sms'
      if((smsCostTotal+callCostTotal) < criticalLevelSettingOne){
          if(billItemTypeSettings ==='call'){
               //alert(callTotal.value += 2.75);
               callCostTotal += callCostSettingOne;
            }else if(billItemTypeSettings ==='sms'){
                smsCostTotal += smsCostSettingOne;
    }

      }

      
  }
  
  callTotalSettings.innerHTML = callCostTotal.toFixed(2);
  smsTotalSettings.innerHTML = smsCostTotal.toFixed(2);
  var totalCostSettings = callCostTotal + smsCostTotal;
  totalSettings.innerHTML = totalCostSettings.toFixed(2);

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


}


//add an event listener for when the 'Update settings' button is pressed
updateBtn.addEventListener('click', setValues);

//add an event listener for when the add button is pressed
addBtn.addEventListener('click', radioBtnTotalSettings);


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
