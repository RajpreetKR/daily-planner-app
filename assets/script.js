// shows current date
let date = new Date();
document.getElementById("currentDay").innerHTML = date.toLocaleDateString(
  "en-uk",
  { weekday: "long", year: "numeric", month: "long", day: "numeric" } // this part outputs the code as "Friday, 19 January 2024" rather tahn just "1/19/24"
);
