function radioBills(){
    
    var theRadioCallAmount = 0;
    var theRadioSmsAmount = 0;   
    var totalRadioCallAmount = 0;
    var totalRadioSmsAmount = 0;
    
    
   /* function setRadioCallAmount() {
        theRadioCallAmount = 2.75;
    }
    function setRadioSmsAmount() {
        theRadioSmsAmount = 0.75;
    }

    function getRadioCallAmount() {
        return theRadioCallAmount;
    }
    function getRadioSmsAmount() {
        return theRadioSmsAmount;
    }
    function phoneCall() {
        totalRadioCallAmount += theRadioCallAmount;
    }
    
    function sendMessage() {
        totalRadioSmsAmount += theRadioSmsAmount;

    }*/
    function getRadioTotalCallAmount() {
        return theRadioCallAmount;

    }
    function getRadioTotalSmsAmount() {
        return theRadioSmsAmount;

    }
    function getRadioTotalAmount() {
        return theRadioCallAmount + theRadioSmsAmount;
    }

    function getRadioBillString(str){
        if(str === "call"){
            theRadioCallAmount += 2.75;//return getRadioTotalCallAmount();
        }
        if(str === "sms"){
            theRadioSmsAmount += 0.75;//return getRadioTotalSmsAmount();
        }
    }

    function getRadioClassName(){
        if(getRadioTotalAmount() >= 30 && getRadioTotalAmount() < 50){
          return 'warning';
        }
        if(getRadioTotalAmount() >= 50){
          return 'danger';
        }
    }
    
    
    
    return{

        /*setRadioCallAmount,
        setRadioSmsAmount,
        getRadioCallAmount,
        getRadioSmsAmount,
        phoneCall,
        sendMessage,*/
        getRadioTotalCallAmount,
        getRadioTotalSmsAmount,
        getRadioTotalAmount,
        getRadioBillString,
        getRadioClassName
        

    }
}