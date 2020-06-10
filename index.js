updateClock=function(){
    const currentTime=new Date();
let currentHour=currentTime.getHours();
let currentMinutes=currentTime.getMinutes();
let currentSeconds=currentTime.getSeconds();
let status=(currentHour>12)? "PM":"AM"

currentHour=(currentHour>12)? currentHour-12:currentHour;
currentSeconds=(currentSeconds<10? "0":"")+currentSeconds
currentMinutes=(currentMinutes<10? "0":"")+currentMinutes

timeOfDay=`${currentHour}:${currentMinutes}:${ currentSeconds} ${status}`
document.getElementById("clock").innerHTML=timeOfDay
}

