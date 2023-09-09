const milliSeconds = document.getElementById('time');

dayOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


let currentTime = new Date();


let currentTimeMillis = currentTime.getTime();
let convertGetTime = currentTimeMillis;
milliSeconds.textContent = `${convertGetTime}`;


let currentUTCDay = currentTime.getUTCDay();
let all = dayOfTheWeek[currentUTCDay - 1];
document.getElementById('day').textContent = `${all}`;