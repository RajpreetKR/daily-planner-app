// shows current date
let date = new Date();
console.log("THis in GLOBAL CONTEXT: ", $(this)); // --> window object
document.getElementById("currentDay").innerHTML = date.toLocaleDateString(
  "en-uk",
  { weekday: "long", year: "numeric", month: "long", day: "numeric" } // this part outputs the code as "Friday, 19 January 2024" rather than just "1/19/24"
);

// colour codes each timeblock
$(".time-block").each(function () {
  let currentHour = date.getHours();
  console.log("Current Hour: ", currentHour);
  console.log("Current Element ID: ", $(this).attr("id"));

  let elementHour = $(this).attr("id");

  if (elementHour == currentHour) {
    $(this).addClass("present");
  } else if (elementHour < currentHour) {
    $(this).addClass("past");
  } else {
    $(this).addClass("future");
  }
});

// saves user's input to local storage
$(".SaveBtn").on("click", function (event) {
  console.log("Clicked");
  console.log($(this).siblings(".description"));

  // get nearby values
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  // save in localStorage
  localStorage.setItem(time, value);
});

// keeps the description when page is refreshed
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
