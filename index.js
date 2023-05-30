function countdown(months) {
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + months);

    const countdownTimer = setInterval(function() {
        const currentDate = new Date().getTime();
        const remainingTime = targetDate - currentDate;

        if (remainingTime <= 0) {
            clearInterval(countdownTimer);
            document.getElementById("countdown-time").textContent = "Countdown is afgelopen!";
            return;
        }


        const days = Math.floor((remainingTime % (7 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
        const hours = Math.floor((remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

        document.getElementById("countdown-month").textContent = formatTime(months);
        document.getElementById("countdown-days").textContent = formatTime(days);
        document.getElementById("countdown-hours").textContent = formatTime(hours);
        document.getElementById("countdown-minutes").textContent = formatTime(minutes);
        document.getElementById("countdown-seconds").textContent = formatTime(seconds);

        document.getElementById("countdown-unit-month").textContent ="Maand";
        document.getElementById("countdown-unit-days").textContent = "Dag";
        document.getElementById("countdown-unit-hours").textContent = "Uur";
        document.getElementById("countdown-unit-minutes").textContent ="Minuten";
        document.getElementById("countdown-unit-seconds").textContent = "Seconden";
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}


countdown(5);


