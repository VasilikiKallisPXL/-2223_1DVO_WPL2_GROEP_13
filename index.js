function countdown(months) {
    var targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + months);

    var countdownTimer = setInterval(function() {
        var currentDate = new Date().getTime();
        var remainingTime = targetDate - currentDate;

        if (remainingTime <= 0) {
            clearInterval(countdownTimer);
            document.getElementById("countdown-time").textContent = "Countdown is afgelopen!";
            return;
        }

        var weeks = Math.floor(remainingTime / (7 * 24 * 60 * 60 * 1000));
        var days = Math.floor((remainingTime % (7 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
        var hours = Math.floor((remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        var minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
        var seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

        document.getElementById("countdown-month").textContent = formatTime(months);
        document.getElementById("countdown-weeks").textContent = formatTime(weeks);
        document.getElementById("countdown-days").textContent = formatTime(days);
        document.getElementById("countdown-hours").textContent = formatTime(hours);
        document.getElementById("countdown-minutes").textContent = formatTime(minutes);
        document.getElementById("countdown-seconds").textContent = formatTime(seconds);

        document.getElementById("countdown-unit-month").textContent = getUnit(months);
        document.getElementById("countdown-unit-weeks").textContent = getUnit(weeks);
        document.getElementById("countdown-unit-days").textContent = getUnit(days);
        document.getElementById("countdown-unit-hours").textContent = getUnit(hours);
        document.getElementById("countdown-unit-minutes").textContent = getUnit(minutes);
        document.getElementById("countdown-unit-seconds").textContent = getUnit(seconds);
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function getUnit(time) {
    return time === 1 ? "tijd" : "tijden";
}

countdown(5);


