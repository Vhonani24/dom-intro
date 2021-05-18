function billCalculations(){
  
  var totalSettingsBill = 0;
 
  function getCalculateBillString(str){
    
   
    var myStr = str.split(',');//convert string into an array
    var totalSettingsBill2 = 0 
    for(var i=0;i < myStr.length;i++){//loop thru the array

      
      var splitStr= myStr[i].trim();//remove extra spaces
     
      if(splitStr === 'call') {//check condition for calls
        totalSettingsBill += 2.75;//push in all reg from town into result
        totalSettingsBill2 += 2.75;
      }
      if(splitStr ==='sms'){
        totalSettingsBill += 0.75;//check condition for messages
        totalSettingsBill2 += 0.75;
       
      }
      
    }
    return totalSettingsBill2.toFixed(2);  
     
  }

  
  function setClasses(){
      if(totalSettingsBill >= 20 && totalSettingsBill < 30){
        return 'warning';
      }
      if(totalSettingsBill >= 30){
        return 'danger';
      }
    }
  
  

  return {
    
  
    getCalculateBillString,
    setClasses
  
 
    

}
  

  
  
  
  
  
  
    
  
}











