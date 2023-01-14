let loader = document.querySelector("#loader");
let timer = document.querySelector("#timer");

var timeInSecs;
var ticker;

let countDown = new Date("06/03/2022 04:00:00 GMT+00:00").getTime();
let now = new Date().getTime();
let distance = countDown - now;

function startTimer(secs) {
    timeInSecs = parseInt(secs);
    ticker = setInterval("tick()", 1000);
}

function loading() {
    // if (timer.getAttribute("hidden")) {
    //     loader.setAttribute("hidden", "hidden");
    //     timer.removeAttribute("hidden");
    // } else {
    //     timer.setAttribute("hidden", "hidden");
    //     loader.removeAttribute("hidden");
    // }
    loader.setAttribute("hidden", "hidden");
    timer.removeAttribute("hidden");
}

startTimer(0);

function tick() {
    var secs = timeInSecs;
    if (secs > 0) {
        timeInSecs--;
    } else {
        clearInterval(ticker);
        let now2 = new Date().getTime();
        distance = countDown - now2;
        while (distance < 0) {
            countDown = countDown + 20 * 60 * 60 * 1000;
            distance = countDown - now2;
        }

        startTimer(distance / 1000);
    }

    var hours = Math.floor(secs / 3600);
    secs %= 3600;
    var mins = Math.floor(secs / 60);
    secs %= 60;
    var curhours = (hours < 10 ? "0" : "") + hours;
    var curmins = (mins < 10 ? "0" : "") + mins;
    var cursecs = (secs < 10 ? "0" : "") + secs;

    document.getElementById("hours").innerHTML = curhours;
    document.getElementById("mins").innerHTML = curmins;
    document.getElementById("secs").innerHTML = cursecs;
}

setTimeout(loading, 2000)
