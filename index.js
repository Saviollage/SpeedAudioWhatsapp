

var rateIndex = 0;
const rates = [1, 1.25, 1.5, 1.75, 2];

const interval = setInterval(() => {
    const header = document.querySelector("._2O84H");

    if (header) {
        clearInterval(interval);



        const button = document.createElement('button');
        button.innerHTML = `${rates[rateIndex]}x`;
        button.classList.add('TwoTimesButton');
        header.appendChild(button);

        button.addEventListener('click', () => {

            rateIndex++;
            if (rateIndex > 4)
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
