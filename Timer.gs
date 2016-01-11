//CALL TIMER SCRIPT
//Edited by Flo Sal 12/30/15

function onEdit(e) {
    
  
    if (e) 
    { 
      var active = 1;
      
      if(active == 1)
      {
        
      //Get Active Sheet, Range, and Row
      var ss = e.source.getActiveSheet();
      var r = e.source.getActiveRange();
      var ActiveRow = r.getRow();
      var verbose = 0;                                  //Verbose Mode
      
      
  
      //Set Date Objects
      var d = new Date();
      var timeStamp = d.toLocaleTimeString();
      var milsec = d.getTime();
      
        
        
      //If column A is the current date, start timer
      var start = ss.getRange('A'+ActiveRow).getValue();
        
        
      var start_diagnostic = ss.getRange('T'+ActiveRow).getValue();     
      var start_info = ss.getRange('V'+ActiveRow).getValue();
      
              if(start == '1' && start_diagnostic == '' && start_info == '')
              {
                    ss.getRange('T'+ActiveRow).setValue(timeStamp);
                    ss.getRange('V'+ActiveRow).setValue(milsec);
                    ss.getRange('B'+ActiveRow).setValue(d);
                    ss.getRange('C'+ActiveRow).setValue(timeStamp);
              }
      
      
      //If Column K is set to DONE, end timer
      var status = ss.getRange('K'+ActiveRow).getValue();
      var status_diagnostic = ss.getRange('U'+ActiveRow).getValue();
      var status_info = ss.getRange('W'+ActiveRow).getValue();
      
              if (status == 'DONE' && status_diagnostic == '' && status_info == '')
              {
                    ss.getRange('U'+ActiveRow).setValue(timeStamp);
                    ss.getRange('W'+ActiveRow).setValue(milsec);
                    
              }
     
      
      var time = ss.getRange('D'+ActiveRow).getValue();
         
            if(start = d && status == 'DONE' && time == '')
            {
                 var start_time =  ss.getRange('V'+ActiveRow).getValue();
                 var end_time =  ss.getRange('W'+ActiveRow).getValue();
                 var timer_raw = end_time-start_time
                 ss.getRange('X'+ActiveRow).setValue(timer_raw);
                 
                 var timer_raw_seconds = (timer_raw/1000) >> 0          
                 var minutes = (timer_raw_seconds/60) >> 0
                 var seconds = (timer_raw_seconds%60) >> 0
                 

				 //set column to actual duration, without rounding up
                 ss.getRange('M'+ActiveRow).setValue(minutes+":"+seconds);
              
                 var under_minute = 0;
                 
                 if (timer_raw < 60000)
                 {
                     minutes = 1;
                     seconds = 0;
                     under_minute = 1;
                 }
              
                 if(seconds < 30 && under_minute == 0)
                 {
                     seconds = 30;
                 }
              
                 if(seconds > 30 && under_minute == 0)
                 {
                     seconds = 0;
                     minutes = minutes + 1; 
                 }
                 
                 under_minute = 0;
                 ss.getRange('D'+ActiveRow).setValue(minutes+":"+seconds);
                   
            }
      
            if(verbose == 0 && status == 'DONE')                  //Verbose mode - for diagnostic purposes
            {
                 ss.getRange('T'+ActiveRow).setValue('');
                 ss.getRange('U'+ActiveRow).setValue('');
                 ss.getRange('V'+ActiveRow).setValue('');
                 ss.getRange('W'+ActiveRow).setValue('');
                 ss.getRange('X'+ActiveRow).setValue('');                
            }
        

      }
  
  
    }
}





