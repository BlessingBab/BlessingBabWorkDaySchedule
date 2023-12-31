// Loading HTML and CSS first
$(document).ready(function () {
  const displayTime = document.querySelector("#currentDay");

  // Display today's day and date
  currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");

  displayTime.textContent = currentTime;

  // saveBtn click listener
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    const text = $(this).siblings(".description").val();
    const time = $(this).parent().attr("id");

    // text saved in local storage
    localStorage.setItem(time, text);
  });
});

function timeTracker() {
  //get current number of hours.
  const timeNow = dayjs().hour();

  // loop over time blocks
  $(".time-block").each(function () {
    const blockTime = parseInt($(this).attr("id").split("hour")[1]);

    // To check the time and add the classes for background indicators
    if (blockTime < timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (blockTime === timeNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

// Get item from local storage if any
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

timeTracker();
