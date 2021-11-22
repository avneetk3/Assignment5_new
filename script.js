$(document).ready(function (){
    var time //= moment().format(LT);
    var bHours = ["9:00 AM", "10:00 AM", "11:00 AM","12:00 PM", "1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM"];
    var day = moment().format('dddd','LLL');
    var date = moment().format('LL');
    //time = moment().format('LT');
   // var day = moment().day(String);
   //time = moment().startOf('hour').add(i, 'hours').format('LT')
    $('#currentDay').text(String(day) +" "+  String(date));
    console.log(day);
    for(let i=0; i<9;i++)
    {
    $(".container").addClass("col");
    $(".container").addClass("row");
    
        time = moment().format('LT');
        //time = moment().startOf('hour').add(i, 'hours').format('LT')
        // Compare time variable with moment.js current time
        // if time < then change div css to red
        //  else change the div css to green
        //if(time< moment.hour('LT'))
        console.log(time, moment().format('LT'));
        //let para = $("<p></p>").text(time);
        let para = $("<p></p>")
        
        para.text(bHours[i]);
        time_block = "time_block";
        hour= "hour";
        para.addClass("col-md-3");
        para.addClass(hour);
        let textArea = $('<textarea style=" padding left: 100px">');
        textArea.addClass("col-md-6");
        description= "description";
        textArea.addClass(description);
        //add here
       // let time2 = parseInt(time);
        console.log( "time2   " + bHours[i] + " "+ time);
        /*for(let j=0;j<bHours.length;j++)
        {
            if(time2 == bHours[j])
                 buttonClass ="present";
            else if(time2 < bHours[j])
                 buttonClass ="past";
            else
                buttonClass = "future"

        }*/


        /*if(time2 == bHours[i])
         buttonClass ="present";
        else if(time2< bHours[i])//moment().format('LT'))
         { 
            buttonClass = "past"
        
        }
       else   
       {
            buttonClass= "future";
        } */ 
        buttonClass = "past"
       var format = 'hh:mm:ss';
       var time3 = moment(time,format);
       var beforeTime = moment(bHours[i], format);
       var afterTime
       if (i+1 < bHours.length)
          afterTime = moment(bHours[i+1], format);
        else 
        {
            afterTime = moment(bHours[i], format);
            afterTime+= moment(toString(1), format);
        }

         
        if(((time3).isBetween(beforeTime,afterTime)== true))
          {  
             // if((time.includes("AM") && bHours[i].includes("AM")))
              buttonClass = "present";
             /* else if(time.includes("PM") && bHours[i].includes("PM")) 
              buttonClass = "present";*/
             console.log("in present" + time3 + "  "+ afterTime);
          }
        if((time3.isBefore(beforeTime)== true))
          {
            //if((time.includes("AM") && bHours[i].includes("AM")))
             buttonClass = "future";
            // if((time.includes("PM") && bHours[i].includes("PM")))
           // buttonClass = "future";
            console.log("in Future  " + time3 + "  " + afterTime)

          } 
        
         textArea.addClass(buttonClass); 
            
        if(localStorage.getItem('textarea')){
            textArea.val(localStorage.getItem(`textarea${i}`)) 
        }
        let saveButton = $('<button></button>').text("submit");
        saveBtn = "saveBtn"
        saveButton.addClass(saveBtn);
        saveButton.addClass("col-md-3");
        
        saveButton.on("click", function(event){
        let textArea = $(this).siblings("textarea").eq(i)
        console.log(textArea.val());
        localStorage.setItem(`textarea${i}`,textArea.val()
        //`textarea${i}`.addClass(buttonClass) 
        );
        
    });
    
        $(".container").append(para, textArea, saveButton);
        $(".container").addClass("row");
    }

})