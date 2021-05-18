function billText(){
    var theCallAmount =0;
    var theSmsAmount =  0;   
    var totalCallAmount = 0;
    var totalSmsAmount = 0;
    
    var theCallAmount1 =0;
    var theSmsAmount1 =0;

    
    
    function setCallAmount() {
        theCallAmount = 2.75;
    }
    function setSmsAmount() {
        theSmsAmount = 0.75;
    }

    function getCallAmount() {
        return theCallAmount;
     }
    function getSmsAmount() {
        return theSmsAmount;
    }

     function ringCall() {
         totalCallAmount += theCallAmount;
     }
    
     function sendText() {
         totalSmsAmount += theSmsAmount;

    }
    function getTextBillString2(str){
        if(str === "call"){
            theCallAmount1  += 2.75;
        }
        if(str === "sms"){
            theSmsAmount1 += 0.75;        }
    }
    function getTotalCallAmount2() {
        return theCallAmount1;

    }
    function getTotalSmsAmount2() {
        return theSmsAmount1;

    }
    function getTotalAmount2() {
        return theCallAmount1 + theSmsAmount1;
    }
   

    function getTextBillString(str){
        if(str === "call"){
            return getTotalCallAmount();
        }
        if(str === "sms"){
            return getTotalSmsAmount();        }
    }
    
    function getTotalCallAmount() {
        return totalCallAmount;

    }
    function getTotalSmsAmount() {
        return totalSmsAmount;

    }
    function getTotalAmount() {
        return totalCallAmount + totalSmsAmount;
    }

    function getTextClassName(){
        if(getTotalAmount() >= 30 && getTotalAmount() < 50){
          return 'warning';
        }
        if(getTotalAmount() >= 50){
          return 'danger';
        }
    }
    function getTextClassName2(){
        if(getTotalAmount2() >= 30 && getTotalAmount2() < 50){
          return 'warning';
        }
        if(getTotalAmount2() >= 50){
          return 'danger';
        }
    }
    
    
    
    return{
        
        setCallAmount,
         setSmsAmount,
         getCallAmount,
        getSmsAmount,
         ringCall,
         sendText,
        getTotalCallAmount,
        getTotalSmsAmount,
        getTotalAmount,
        getTextBillString,
        getTextClassName,
        getTextBillString2,
        getTotalAmount2,
        getTotalSmsAmount2,
        getTotalCallAmount2,
        getTextClassName2
        

    }
}