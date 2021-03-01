



var rateIndex = 0;
const rates = [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4];
console.log("😄 Thanks for using SpeedAudio")
const interval = setInterval(() => {

    const header = document.querySelector('header')
    if (header) {
        clearInterval(interval);

        const button = document.createElement('button');
        button.innerHTML = `${rates[rateIndex]}x`;
        button.classList.add('TwoTimesButton');
        header.appendChild(button);
        button.addEventListener('click', () => {

            rateIndex++;
            if (rateIndex > rates.length - 1)
                rateIndex = 0;

            button.innerHTML = `${rates[rateIndex]}x`;

            const audios = document.querySelectorAll('audio');

            audios.forEach(audio => {
                audio.playbackRate = rates[rateIndex];
            })
        })
    }
}, 1000);

setInterval(() => {
    const audios = document.querySelectorAll('audio');

    audios.forEach(audio => {
        audio.playbackRate = rates[rateIndex];
    })
}, 1000)
