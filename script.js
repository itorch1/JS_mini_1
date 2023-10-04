const percent = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

const timer = setInterval(blurIn, 30);

let load = 0;

function blurIn() {
    load++;
    if (load > 99)
        clearInterval(timer);

    percent.innerText = `${load}%`;
    percent.style.opacity = `${100-load}%`;

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    console.log(`${scale(load, 0, 100, 30, 0)}px`)
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}