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
        dateRow.classList.add == "collapsed";
      }
      else {
        dateRow.style.display == "block"
      }
    }
};

function displayTime() {
  var ele = document.getElementsByName('startTime');
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
        var timeDisplay = parseInt(ele[i].value) % 12;
        if (timeDisplay === 0) timeDisplay = 12;
        document.getElementById("timeSelect").innerHTML = timeDisplay + " PM";
  }
};

let endDisplay = document.getElementById("displayEndTime");

function displayEnd() {
  var tiSelect = document.getElementsByName('startTime');
  for(x = 0; x < tiSelect.length; x++) {
    if(tiSelect[x].checked)
        var tiNum = (parseInt(tiSelect[x].value));
  };
  var durSelect = document.getElementsByName('duration');
  for(i = 0; i < durSelect.length; i++) {
    if(durSelect[i].checked)
      var durNum = parseInt(durSelect[i].value);
  };
  if (tiNum + durNum >= 13) 
    var durFormat = durNum % 12;
    var durFinal = durFormat;
  document.getElementById("timeSelect").innerHTML += " - " + durFinal + " PM";
};
