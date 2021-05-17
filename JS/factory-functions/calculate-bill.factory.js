function billCalculations(){
  var totalSettingsBill = 0;
  

  function getCalculateBillString(str){
    var _str = str.split(',');//convert string into an array  
   
    
    for(var i=0;i < _str.length;i++){//loop thru the array
     
      if(_str[i].includes('call')) {//check condition for calls
        totalSettingsBill += 2.75;//push in all reg from town into result
      }
      if(_str[i].includes('sms')){
        totalSettingsBill += 0.75;//check condition for messages
      }
    }
     //return totalSettingsBill;//return total
  }
  
  
  function getTotals(){
    return totalSettingsBill;
  }


  function setClasses(){
    if(getTotals() >= 20 && getTotals() < 30){
      return 'warning';
    }
    if(getTotals() >= 30){
      return 'danger';
    }
  }

  return {
    
    setClasses,
    getCalculateBillString,
    getTotals

  }
  

  
  
  
  
  
  
    
  
}











