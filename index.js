setInterval(() => {
    currentDate = new Date();

    hourTime = currentDate.getHours();
    minuteTime = currentDate.getMinutes();
    secondTime = currentDate.getSeconds();

    hourRotation = 30*hourTime + (1/2)*minuteTime + (1/120)*secondTime;
    minuteRotation = 6*minuteTime + (1/10)*secondTime;
    secondRotation = 6*secondTime;

    hourHand = document.querySelector("#hour-hand");
    minuteHand = document.querySelector("#minute-hand");
    secondHand = document.querySelector("#second-hand");

    hourHand.style.transform = 'rotate('+hourRotation+'deg)';
    minuteHand.style.transform = 'rotate('+minuteRotation+'deg)';
    secondHand.style.transform = 'rotate('+secondRotation+'deg)';
}, 1000);