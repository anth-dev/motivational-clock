function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    if (seconds == 1) {
        changeMessage();
        secondHand.style.transition = 'all 0.15s';
    } else if (seconds == 0) {
        secondHand.style.transition = 'none';
    }

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
     
}

function changeMessage() {
    let generatedNumber = Math.floor(Math.random()*8);
    if (generatedNumber < 1) {
        message.textContent = 'carpe diem';
    } else if (generatedNumber < 2) {
        message.textContent = 'sieze the day';
    } else if (generatedNumber < 3) {
        message.textContent = 'time doesn\'t wait';
    } else if (generatedNumber < 4) {
        message.textContent = 'don\'t procrastinate';
    } else if (generatedNumber < 5) {
        message.textContent = 'work hard';
    } else if (generatedNumber < 6) {
        message.textContent = 'win at life';
    } else if (generatedNumber < 7) {
        message.textContent = 'don\'t underestimate yourself';
    } else if (generatedNumber < 8) {
        message.textContent = 'you are capable of anything';
    }
}

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const message = document.querySelector('p');

setInterval(setDate, 1000);
changeMessage();