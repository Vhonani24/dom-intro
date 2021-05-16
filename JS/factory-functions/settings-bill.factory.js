function billWithSettings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarning = 0;
    var theCritical = 0;

    var totalCallCost = 0;
    var totalSmsCost = 0;
    
    function setCallCost(callCost) {
        theCallCost = parseFloat(callCost);
    }
    function setSmsCost(smsCost) {
        theSmsCost = parseFloat(smsCost);
    }

    function setWarningLevel(warning) {
        theWarning = parseFloat(warning);
    }
    function setCriticalLevel(critical) {
        theCritical = parseFloat(critical);
    }
    function getCallCost() {
        return theCallCost;
    }
    function getSmsCost() {
        return theSmsCost;
    }
    function getWarningLevel() {
        return theWarning;
    }
    function getCriticalLevel() {
        return theCritical;
    }
    function makeCall() {
        totalCallCost += theCallCost;
    }
    
    function sendSms() {
        totalSmsCost += theSmsCost;

    }
    function getTotalCallCost() {
        return totalCallCost;

    }
    function getTotalSmsCost() {
        return totalSmsCost;

    }
    function getTotalCost() {
        return totalCallCost += totalSmsCost;
    }
    
    function getClassName(){
        if(getTotalCost() >= getWarningLevel() && getTotalCost() <= getCriticalLevel()){
            return 'warning';
        }
        if(getTotalCost() >= getCriticalLevel()){
            return 'danger';
        }
       
    }
    
    function stopCostCount(){
        if(getTotalCost() >= getCriticalLevel()){
            return theCritical;
        }
    }
   
 

    
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
       getWarningLevel,
        setCriticalLevel,
       getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        getClassName,
        stopCostCount
        


    }
}