function billCalculations(){


  function getCalculateBillString(str){
    var totalSettingsBill = 0;
  
    var myStr = str.split(',');//convert string into an array  
   
    for(var i=0;i < myStr.length;i++){//loop thru the array
      
      var splitStr= myStr[i].trim();//remove extra spaces
     
      if(splitStr === 'call') {//check condition for calls
        totalSettingsBill += 2.75;//push in all reg from town into result
      }
      if(splitStr ==='sms'){
        totalSettingsBill += 0.75;//check condition for messages
      }
    }
    return totalSettingsBill.toFixed(2);//return total
   
     
  }
  

  return {
    
  
    getCalculateBillString
    

  }
  

  
  
  
  
  
  
    
  
}











