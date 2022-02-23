$(document).ready(function(){

  $('#dp1').datepicker({
  format: 'D d-M-yyyy',
  autoclose: true,
  startDate: '0d',
  todayHighlight: true,
  todayBtn: "linked",
  altField: "#dateSelect",
  altFormat: "DD, d MM, yy"
  });
  
  $('.time-cell').click(function(){
  $('.time-cell').removeClass('select');
  $(this).addClass('select');
  });

  $('.dur-cell').click(function(){
  $('.dur-cell').removeClass('select');
  $(this).addClass('select');
  });
  
  });

// Variables required. 

let dateRow = document.getElementById('dateCollapse');
let datePick = document.getElementById('dp1');
let showDate = document.getElementById('dateSelect');
let timeCell = document.getElementsByClassName('time-cell');
var tiSelect = document.getElementsByName('startTime');
var durSelect = document.getElementsByName('duration');
var timeLabel = document.querySelectorAll('StartTimeLabel');
var durLabel = document.getElementsByClassName('durationLabel');




// timeLabel.addEventListener("click", displayTime);


// Display Date 

function displayDate() {
    showDate.innerHTML = String(datePick.value);
    showDate.style.display = "block";
    showDate.onchange = function() {
      if (dateRow.style.display == "block") {
        dateRow.classList.add == "collapsed";
      }
      else {
        dateRow.style.display == "block"
      }
    };
};

// Display start time after selection.


function getStartTime() {
  var startTimeChecked = document.querySelector('input[name="startTime"]:checked');
  var startTimeLabelChecked = startTimeChecked.closest('label');
  var startTimeVal = document.querySelector('input[name="startTime"]:checked').value % 12;
  if (startTimeVal === 0) {
    startTimeVal = 12
  }
  
  if (startTimeChecked.click) {
    startTimeLabelChecked.setAttribute('style', 'border: 2px solid yellow;');
  }
  document.getElementById("timeSelect").innerHTML = startTimeVal + " PM";

  return
}

// Display end time through duration length selection

function getDurationLength() {
  var startTimeVal = document.querySelector('input[name="startTime"]:checked').value;
  var durationLengthVal = document.querySelector('input[name="duration"]:checked').value;
  var endTimeVal = startTimeVal + durationLengthVal;

    if (endTimeVal >= 13) {
      var endTime = endTimeVal % 12;
      if (endTime === 0) {
        endTime = 12
      }
      document.getElementById("durSelect").innerHTML = endTime + " PM";
    }
  return
}

function updateTimeAndDuration() {
  getStartTime();
  getDurationLength();
}

