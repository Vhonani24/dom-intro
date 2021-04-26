// get a reference to the sms or call radio buttons
const RadioButtonSetting = document.querySelector("input[name='billItemTypeWithSettings']:checked");
// get refences to all the settings fields
const callCostSetting = document.querySelector('.callCostSetting');
const smsCostSetting = document.querySelector('.smsCostSetting');
const warningLevelSetting = document.querySelector('.warningLevelSetting');
const criticalLevelSetting = document.querySelector('.criticalLevelSetting');

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

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener('click', function(){


});



//add an event listener for when the add button is pressed
buttonPrimary.addEventListener('click', function(){
    
});


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.*/
