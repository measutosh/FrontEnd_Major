const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minsE1 = document.getElementById("mins");
const secondsE1 = document.getElementById("seconds");

const lastDate = "1 Jan 2022";

function countdown() {
  const blastDate = new Date(lastDate);
  const currentDate = new Date();

  const totalsecs = new Date(blastDate - currentDate) /  1000;
  
  const days = Math.floor(totalsecs / 3600 / 24);
  const hours = Math.floor(totalsecs / 3600) % 24;
  const mins = Math.floor(totalsecs / 60) % 60;
  const seconds = Math.floor(totalsecs) % 60;
  


  daysE1.innerHTML = days;//formatTime(days);
  hoursE1.innerHTML = hours;//formatTime(hours);
  minsE1.innerHTML = mins;//formatTime(mins);
  secondsE1.innerHTML = seconds;//formatTime(seconds);


  console.log(minsE1);
  
}

// function formatTime(time) {
//   return time < 10 ? '0'+'${time}' : time;
// }

//initial call
countdown();
setInterval(countdown, 1000);