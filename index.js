const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

//set date for launch
let newYear = new Date("31 Mar 2022")

function launchTimer() {
//local current date
let currentDate = new Date();

  // totalTime in milli seconds
  let totalTime = newYear - currentDate;
  // totalTime in seconds
  let TotalSeconds = totalTime/1000;

  // days
  let dayTimer = Math.floor((TotalSeconds/60/60)/24);
  addZero(dayTimer)
  day.textContent = addZero(dayTimer);

  //hours
  let hourTimer = Math.floor((TotalSeconds/60/60)%24);
  hour.textContent = addZero(hourTimer);

  //minutes
  let minuteTimer = Math.floor((TotalSeconds/60)%60);
  minute.textContent = addZero(minuteTimer);

  //seconds
  let secondsTimer = Math.floor(TotalSeconds%60);
  second.textContent = addZero(secondsTimer);
  
}

//adds zero when timer is less than 10
function addZero(time) {
  if(time < 10) {
    return "0" + time;
  }
  return time
}

setInterval(launchTimer, 1000)



