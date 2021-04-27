var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");

var callCostSettings = document.querySelector(".callCostSetting");
var smsCostSettings = document.querySelector(".smsCostSetting");
var warningLevelSettings = document.querySelector(".warningLevelSetting");
var criticalLevelSettings = document.querySelector(".criticalLevelSetting");

var callTotalSetting = document.querySelector(".callTotalSettings");
var smsTotalSetting = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");
var totalAmountBtn = document.querySelector(".totalAmountBtn");
var updateSetting = document.querySelector(".updateSettings");

//updates
function updateSettings() {
  refFactor.setCostCall(callCostSettings.value);
  refFactor.setCostSms(smsCostSettings.value);
  refFactor.setCritical(criticalLevelSettings.value);
  refFactor.setWarning(warningLevelSettings.value);
}

function domFunction() {
  var billSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");

  if (billSettings) {

    refFactor.billSettings(billSettings.value);

    callTotalSetting.innerHTML = refFactor.getCall().toFixed(2);
    smsTotalSetting.innerHTML = refFactor.getSms().toFixed(2);
    var totalBill = refFactor.totalBills().toFixed(2);
    totalSettings.innerHTML = totalBill;


    if (totalBill < refFactor.getWarning()) {
      totalSettings.classList.remove("warning");
      totalSettings.classList.remove("danger");

    }
    if (totalBill >= refFactor.getWarning() && totalBill < refFactor.getCritical()) {
      totalSettings.classList.remove("danger");
      totalSettings.classList.add("warning");
    }
    if (totalBill >= refFactor.getCritical()) {
      totalSettings.classList.remove("warning");
      totalSettings.classList.add("danger");
    }
  }
}

updateSetting.addEventListener('click', updateSettings);
totalAmountBtn.addEventListener('click', domFunction);


   
  









// get a reference to the sms or call radio buttons
/*const RadioButtonSetting = document.querySelector("input[name='billItemTypeWithSettings']:checked");
// get refences to all the settings fields
var callCostSetting = document.querySelector('.callCostSetting');
var smsCostSetting = document.querySelector('.smsCostSetting');
var warningLevelSetting = document.querySelector('.warningLevelSetting');
var criticalLevelSetting = document.querySelector('.criticalLevelSetting');

//get a reference to the add button
const buttonPrimary = document.querySelector('.button-primary');

//get a reference to the 'Update settings' button
const updateSettings = document.querySelector('.updateSettings');

// create a variables that will keep track of all the settings
var callCostSettingOne = 0
var smsCostSettingOne = 0
var warningLevelSettingOne = 0 ;
var criticalLevelSettingOne = 0;

// create a variables that will keep track of all three totals.
var callCostTotal = 0;
var smsCostTotal = 0;
var overAllTotal = 0;



//function to set values
function setValues(){
    var calls = Number(callCostSetting.value);
    
}


//add an event listener for when the 'Update settings' button is pressed
//updateSettings.addEventListener('click', setValues());



//add an event listener for when the add button is pressed
buttonPrimary.addEventListener('click', function(){
    
});*/


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
