var i = 0;
var txt = 'COME BACK TO ME';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("txt").innerHTML += txt.charAt(i);
    document.getElementById("txt1").innerHTML += txt.charAt(i);
    document.getElementById("txt2").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } 
  else{
    setTimeout(reset, 5000);
  }
}
function reset(){
	document.getElementById("txt").innerHTML = "";
	document.getElementById("txt1").innerHTML = "";
	document.getElementById("txt2").innerHTML = "";
    i=0;
    typeWriter();
}


// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("tourDate").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("tourDates").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("tourDatesMd").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("tourDate").innerHTML = "Ya no, jaja";
    document.getElementById("tourDates").innerHTML = "Ya no, jaja";
    document.getElementById("tourDatesMd").innerHTML = "Ya no, jaja";
  }
}, 1000);

function load() {
  $("#loadImage").fadeToggle("slow");
  setTimeout(load,1500);
}

load();

typeWriter();

