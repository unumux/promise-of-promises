let timerRun = false;
let startTime = Date.now();

const timerEl = document.querySelector(".timer");

export function start() {
    timerRun = true;
    startTime = Date.now();
    requestAnimationFrame(timerTick);
}

export function stop() {
    timerRun = false;
}

function timerTick() {
    if(timerRun) {
        const elapsed = Date.now() - startTime;
        timerEl.innerHTML = `${(elapsed / 1000).toFixed(3)}<span class="timer__seconds">s</span>`;
        requestAnimationFrame(timerTick);
    }
}

