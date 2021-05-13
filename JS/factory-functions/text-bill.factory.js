function billText(){
    var theCallAmount =0;
    var theSmsAmount =  0;   
    var totalCallAmount = 0;
    var totalSmsAmount = 0;
    
    
    // function setCallAmount() {
    //     theCallAmount = 2.75;
    // }
    // function setSmsAmount() {
    //     theSmsAmount = 0.75;
    // }

    // function getCallAmount() {
    //     return theCallAmount;
    // }
    // function getSmsAmount() {
    //     return theSmsAmount;
    // }

    // function ringCall() {
    //     totalCallAmount += theCallAmount;
    // }
    
    // function sendText() {
    //     totalSmsAmount += theSmsAmount;

    // }
   
   
   

    function getTextBillString(str){
        if(str === "call"){
            theCallAmount  += 2.75;
        }
        if(str === "sms"){
            theSmsAmount += 0.75;        }
    }
    function getTotalCallAmount() {
        return theCallAmount;

    }
    function getTotalSmsAmount() {
        return theSmsAmount;

    }
    function getTotalAmount() {
        return theCallAmount + theSmsAmount;
    }

    function getTextClassName(){
        if(getTotalAmount() >= 30 && getTotalAmount() < 50){
          return 'warning';
        }
        if(getTotalAmount() >= 50){
          return 'danger';
        }
    }
    
    
    
    return{

        // setCallAmount,
        // setSmsAmount,
        // getCallAmount,
        // getSmsAmount,
        // ringCall,
        // sendText,
        getTotalCallAmount,
        getTotalSmsAmount,
        getTotalAmount,
        getTextBillString,
        getTextClassName
        

    }
}