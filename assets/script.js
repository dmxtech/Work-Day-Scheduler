// get css information
// var xhr = new XMLHttpRequest();
// var url = 'https://use.fontawesome.com/releases/v5.8.1/css/all.css';
// xhr.open('GET', url);
// xhr.onreadystatechange = document;
// xhr.send();


//declare container variable
var container = document.getElementById("container");


// current date in header
var d = new Date();
let day = d.getDay();
document.getElementById("currentDay").innerHTML = d;
console.log(d);


//add eventlistener to save button
$(".saveBtn").on("click", function () {

    
//log text values 
var time = $(this).parent().attr("id");
var text = $(this).siblings(".Description").val(); 
var content = (time + text);
console.log(this);
//Set values and key in local storage
localStorage.setItem(time, text);

})
//Get values and key from local storage 
$("#hr9 .Description").val(localStorage.getItem("hr9"));
$("#hr10 .Description").val(localStorage.getItem("hr10"));
$("#hr11 .Description").val(localStorage.getItem("hr11"));
$("#hr12 .Description").val(localStorage.getItem("hr12"));
$("#hr13 .Description").val(localStorage.getItem("hr13"));
$("#hr14 .Description").val(localStorage.getItem("hr14"));
$("#hr15 .Description").val(localStorage.getItem("hr15"));
$("#hr16 .Description").val(localStorage.getItem("hr16"));
$("#hr17 .Description").val(localStorage.getItem("hr17"));
$("#hr18 .Description").val(localStorage.getItem("hr18"));





// console.log(content);
// let retrievedObject = localStorage.getItem("content");
// console.log('retrievedObject: ', JSON.parse(retrievedObject));

//window.localStorage.setItem(time + text);
// var updateOutput= (content);
// var saveBtn = document.querySelector('.saveBtn');
// saveBtn.addEventListener("click", updateOutput)

// function updateOutput() {
//     localStorage.setItem("content", retrievedObject.value );
//     content.textContent = retrievedObject
// }

function currenttime() {
    //get the current hour
    var currenthr = moment().hour(); 

   //Assign colors to time block
    $(".time-block").each(function () {
        
    var blockhr = parseInt($(this).attr("id").split("hr")[1]);
    
    console.log( blockhr, currenthr);

        //use the correct class for the time moment
        if (blockhr < currenthr) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockhr === currenthr) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
//run function again
currenttime();  
   


