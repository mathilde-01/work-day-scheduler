
$(document).ready(function () { // code wrap, call to jQuery after HTML, CSS
  // display current day & time.
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  // saveBtn click listener for user input and time stamp
  $(".saveBtn").on("click", function () {
      // get input values
      console.log(this);
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      // save items in local storage
      localStorage.setItem(time, text);
  })
  // load any saved data from LocalStorage for each hour created.
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour12 .description").val(localStorage.getItem("hour-12"));
  $("#hour13 .description").val(localStorage.getItem("hour-13"));
  $("#hour14 .description").val(localStorage.getItem("hour-14"));
  $("#hour15 .description").val(localStorage.getItem("hour-15"));
  $("#hour16 .description").val(localStorage.getItem("hour-16"));
  $("#hour17 .description").val(localStorage.getItem("hour-17"));


  function hourTracker() {
      //get current number of hours.
      var currentHour = moment().hour();

      // loop over time blocks
      $(".time-block").each(function () {
          var blockHour = parseInt($(this).attr("id").split("hour-")[1]);
          console.log(currentHour)

          // apply the past, present, or future class 
          if (blockHour < currentHour) {
              $(this).addClass("past");
              $(this).removeClass("future");
              $(this).removeClass("present");
          }
          else if (blockHour === currentHour) {
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
  hourTracker();
})