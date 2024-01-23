// shows current date
let date = new Date();
console.log("THis in GLOBAL CONTEXT: ", $(this)); // --> window object
document.getElementById("currentDay").innerHTML = date.toLocaleDateString(
  "en-uk",
  { weekday: "long", year: "numeric", month: "long", day: "numeric" } // this part outputs the code as "Friday, 19 January 2024" rather than just "1/19/24"
);

// colour codes each timeblock
date.getHours(); // this should get the hour from the date variable
$(".time-block").each(function () {
  // need help with this - ask tutor

  // What Data do we need here (?)
  // DateTime --> DayJS Library | Date Object --> Users Current Time
  // let currentHour = date.getHours();
  let currentHour = 13; // hard coded testing val
  console.log("Current Hour: ", currentHour);
  console.log("Current Element ID: ", $(this).attr("id"));
  // console.log("Current Element: ", $(this));
  // Time Blocks --> How do we GRAB reference to these elements/values (?)
  let elementHour = $(this).attr("id");
  // What is our Condition (?)
  if (elementHour == currentHour) {
    // what happens here(?)

    // $(this).removeClass("past")
    // --> what are the expected outcomes (?)  --> UPDATEDING the CSS (output view)
    $(this).addClass("present");
  } else if (elementHour < currentHour) {
    $(this).addClass("past");
  } else {
    $(this).addClass("future");
  }
  // --> Local Storage
});

// saves event to local storage (event being the text the user inputs into the description typearea)
let tasks = [];
let userInput = document.querySelector(".description");

function saveTasks() {}

// WHAT triggers our operation

$(".SaveBtn").on("click", function (event) {
  console.log($(this));
  console.log($(this).parent());
  console.log($(this).siblings());
  console.log($(this).siblings()[1]);
  console.log($(this).siblings(".description"));
});

// WHAT do we capture
// we need to capture user input --> input with class description | DATA
// we save this data to localStorage
