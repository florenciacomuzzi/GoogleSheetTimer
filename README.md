# Google Sheet Timer
This simple timer for Google Sheets is helpful for recording approximate phone call length, i.e. at call centers, and other activities.

The timer is started by entering "1" into Column A. 

Columns B and C will autopopulate with date and time in respectively.

Leave Column D empty -- the duration of the call will be recorded here.  

The timer currently rounds up.  
If length < 1 minute, 
        <br>                              duration = 1 minute 
                  <br>              else, 
              <br>                     duration = nearest half minute, i.e. length = 3 min. 23 secs --> duration = 3:30 minutes

Columns E-J are left to input desired information.  Name, Phone Number, Email, Transferred? (Y/N), Rep. Name, and Notes are used in my example. 

Once you are done, type "DONE" into column K.
