console.log('Welcome to the Work Day Scheduler by Jay Idrees')

// Obtaining today's Day and date information using JS and storing into variables
// Creating event log global object
var event_log;



var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

var d = new Date();
var day = weekday[d.getDay()];
console.log(day)

// Micromanaging display of date
var date_raw = new Date();
var dd = date_raw.getDate(); //yields day
var MM = date_raw.getMonth(); //yields month
var yyyy = date_raw.getFullYear(); //yields year
var date_today=(MM+1)+". "+dd+". "+yyyy;
var day_date='Welcome, Today is '+day+', '+date_today;

// Obtaining the present_hr for the match_color_bytime function later
var present_hr= d.getHours();
console.log("present hr:", present_hr) 


//Using JQuery to create H2 tag and then displaying today's day and date in the jumbotron

const h2_todays_date=$("<h2 id='p_todays_date'>"+day_date+" </h2> <br> <br>")
h2_todays_date.attr("class", "cover-heading text-dark font-italic font-weight-bold  ")

$("#jumbotron").append(h2_todays_date);

// Inserting a "plan as you go statement under Today's date in jumbotron- the text area is a custom class created by me"
const statement=$("<h3> Plan as you go ! </h3>")
statement.attr("class", "cover-heading text-danger font-weight-bold textarea ")
$("#jumbotron").append(statement);




//================================================================
// COLOR MATCHING based on P A S T,  P R E S E N T,  F U T U R E
//================================================================


// As each event is triggered by clicking the save button, the unique id for each of the buttons can be used as the unique id for event

function match_color_bytime (){
// Checking the present hr in consolelog
console.log('present hr', present_hr)

//Obtaining the scheduled hr for a corresponding time block

//For each of the elements taged textarea
$('textarea').each(function(){
// Obtain the id, convert to integer and store it into scheduled hr because their id corresponds to the number for the hr of the day that text area is assigned to
    const schedule_hr=parseInt($(this).attr('id'));
    console.log('Schedule hr: ', schedule_hr ,"Present_hr", present_hr) // shows all the ids converted to integers

    if (schedule_hr===present_hr){

    $(this).addClass('present-teal');
    // $(this).removeClass('past-blue')
    }// br-close if statement 

    else if (schedule_hr>present_hr) {
    // $(this).removeClass('past-blue')
    $(this).addClass('future-pink');
    }//br-close else if

    else {
        $(this).addClass('past-blue')
    }


}); // br-close for the for each function for each of the text areas

}; //br-close match_color_bytime function

match_color_bytime()





///====================================================================
// D I S P L A Y    DATA     From      LOCAL STORAGE
//=====================================================================


function pull_local_data(){

    if (localStorage.getItem('event_log') !== null) {

        // Converting local storage back to object form for JS, parse=objectify

     event_log=JSON.parse(localStorage.getItem('event_log'));
     

      $('.textarea').each(function (button_id){

// Placing the user text into appropriate time blocks from local storage. Note that .val() and .val(something) are not the same. .val(something) is assigining a value that is specified in brackets
                $(this).val(event_log[button_id]);
 
             
                }); //cl-br for the each function inside the if statement
    } else {
        // create a new object called event_log
        event_log={};
        // and as a stater create 9 empty slots and label by id
        for (let i=1;i<=9;i++){
        event_log[i]="";
        }
        console.log(event_log)

    }

}//br-cl pull_local-data function 


pull_local_data();




//===================================================================
// Store data in Local storage for each event on clicking Save Button
//===================================================================



$('.btn').click(function (e){

e.preventDefault();
//obtainig a value of the element immediately preceding (hence .prev().val()) the respective clicked button- which in this case is the time block text box as the user will type in the text first and then click the save button and we are interested in obtaining the value that is in the text box- This is not storing the value of click !
var text_in_box = $(this).parent().prev().val();
console.dir('dir',$(this).parent().prev())
console.log('text in box:', text_in_box)
// Obtain the button id to use as surrogate for the event id as all events are tied to the saved button click event
var button_id=$(this).attr('id')
console.log(button_id, text_in_box)

// This is pushing new text in the time-block textbox in the event_log and pairing it with the button id number. It is saying that got the event log find the location in the array based on the button id and then insert the text in the textbox here. ??Check with Ben

event_log[button_id]=text_in_box

// Data cannot be retrieved from local storage in object form, but javascript requires data in object form for action. Therefore to push the data into local storage its converted into string using JSON.stringigy. When this data is to be retrieved later from local storage then it will have to be converted back to object form by using JSON.parse so it can be understood javascript
localStorage.setItem('event_log', JSON.stringify(event_log));
console.log( text_in_box, localStorage)


}); // br-close for the Click event function





