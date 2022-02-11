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

let dateRow = document.getElementById('dateCollapse');
let datePick = document.getElementById('dp1');
let showDate = document.getElementById('dateSelect');


function displayDate() {
    showDate.innerHTML = String(datePick.value);
    showDate.style.display = "block";
    showDate.onchange = function() {
      if (dateRow.style.display == "block") {
        dateRow.classList.remove == "show";
      }
      else {
        dateRow.style.display == "block"
      }
    }
};

let timeVal = document.getElementsByClassName('time-cell');
let timeCell = document.getElementsByClassName('time-cell')[''];
let timeVar = timeCell.length;

console.log(timeCell)

// let timeSelect = timeCell.addEventListener("click", displayTime);
let showTime = document.getElementById('timeSelect');

function displayTime() {
  showTime.innerHTML = timeCell[i].value;
  showTime.style.display = "block";
};

for (var i = 0; i < timeVar; i++) {
  timeCell[i].addEventListener('click', displayTime, false);
}
