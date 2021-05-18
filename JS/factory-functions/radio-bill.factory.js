function radioBills(){
    
    var theRadioCallAmount = 0;
    var theRadioSmsAmount = 0;   
    var totalRadioCallAmount = 0;
    var totalRadioSmsAmount = 0;
   
    var theRadioCallAmount2 = 0;
    var theRadioSmsAmount2 = 0; 

    
    
    function setRadioCallAmount() {
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

    }
    function getRadioTotalCallAmount() {
        return totalRadioCallAmount;

    }
    function getRadioTotalSmsAmount() {
        return totalRadioSmsAmount;

    }
    function getRadioTotalAmount() {
      
        return totalRadioCallAmount + totalRadioSmsAmount;
    }
    function getRadioBillString(str){
        if(str === "call"){
            return getRadioTotalCallAmount();
        }
        if(str === "sms"){
            return getRadioTotalSmsAmount();
        }
    }


    function getRadioBillString2(str){
        if(str === "call"){
            theRadioCallAmount2 += 2.75;//return getRadioTotalCallAmount();
        }
        if(str === "sms"){
            theRadioSmsAmount2 += 0.75;//return getRadioTotalSmsAmount();
        }
    }
    function getRadioTotalCallAmount2() {
        return theRadioCallAmount2;

    }
    function getRadioTotalSmsAmount2() {
        return theRadioSmsAmount2;

    }
    function getRadioTotalAmount2() {
        return theRadioCallAmount2 + theRadioSmsAmount2;
    }

    function getRadioClassName2(){
        if(getRadioTotalAmount2() >= 30 && getRadioTotalAmount2() < 50){
          return 'warning';
        }
        if(getRadioTotalAmount2() >= 50){
          return 'danger';
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

        setRadioCallAmount,
        setRadioSmsAmount,
        getRadioCallAmount,
        getRadioSmsAmount,
        phoneCall,
        sendMessage,
        getRadioTotalCallAmount,
        getRadioTotalSmsAmount,
        getRadioTotalAmount,
        getRadioBillString,
        getRadioClassName,
        getRadioBillString2,
        getRadioClassName2,
        getRadioTotalCallAmount2,
        getRadioTotalSmsAmount2,
        getRadioTotalAmount2
        
        

    }
}