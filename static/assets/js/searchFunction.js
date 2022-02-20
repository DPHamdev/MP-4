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
var durLabel = document.getElementsByClassName('durationLabel');

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

function displayTime() {
  for(i = 0; i < tiSelect.length; i++) {
      if(tiSelect[i].checked)
        var timeDisplay = parseInt(tiSelect[i].value) % 12;
        if (timeDisplay === 0) {
          timeDisplay = 12
        };
        document.getElementById("timeSelect").innerHTML = timeDisplay + " PM";
          for (x = 0; x < durSelect.length; x++) {
            var durDisplay = parseInt(durSelect[x].value);
            
            var durId = durSelect[x].getAttribute('id');
            
            for (a = 0; a < durLabel.length; a++) {
              var durFor = durLabel[a].htmlFor;
              
              var timeValue = timeDisplay + durDisplay >= 24;
              
              var parent = durSelect[x].parentNode.nodeName;
              console.log(parent);

              var spanParent = parent.nextSibling.nodeName;
              console.log(spanParent);

              // if (timeValue = true) {
                
              //   if(durSelect.parentNode) {
              //     durSelect.parentNode.style.display = 'inline-block';
              //   } else {
              //     durSelect.parentNode.style.display = 'none';
              //   }
              // }
                
                
                
              
                
              }
        // var durFor = durLabel.htmlFor;
        // if (durId == durFor)
        //       durLabel.style.display = 'none';  
        };
  };
};

// Display end time once duration has been selected.

function displayEnd() {
  for(x = 0; x < tiSelect.length; x++) {
    if(tiSelect[x].checked)
        var tiNum = parseInt(tiSelect[x].value);
  };
  for(i = 0; i < durSelect.length; i++) {
    if(durSelect[i].checked)
      var durNum = parseInt(durSelect[i].value);
  };
    var disTotal = tiNum + durNum;
    console.log(disTotal)
    if (disTotal >= 13)
      var durFormat = disTotal % 12;
    document.getElementById("durSelect").innerHTML = durFormat + " PM";
};
