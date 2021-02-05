const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockFace: document.querySelector('.js-clockFace'),
};

// const date = new Date();  // Date now(); мсек
// //const date = new Date(1000);  //продивитись бібліотеки moment.js та date-fns

// //console.log(date);
// console.dir(date.getMinutes()); //методи getSeconds()

//      setInterval(() => {
//          console.log(new Date);
//      }, 1000);

const timer = {
    intervalId: null,
    isActive: false,   // щщб не накоплювати багаторазову активацшю start
    start() {
        //console.log(this);
        if (this.isActive) {
            return;
        }

        this.isActive = true; // якщо вже активний start
        const startTime = Date.now();

        updateClockFace(0);

        this.intervalId = setInterval(() => { // для метода вписую  intervalId
            const currentTime = Date.now();

            // console.log('startTime: ', startTime);
            // console.log('currentTime: ', currentTime);

            const deltaTime = currentTime - startTime;

            //console.log('deltaTime: ', deltaTime);
            
            updateClockFace(deltaTime);
        }, 1000);
    },

    stop() {
        //console.log(this);
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.isActive = false;
        
        updateClockFace(0);
    },
};


/* *** прив'язка таймера до інтерфейса */
// refs.startBtn.addEventListener('click', timer.start);
// refs.stopBtn.addEventListener('click', timer.stop);
refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

timer.start();


function updateClockFace(time) {  //можна підключити плагін/бібліотеку Countdown Timer
    /**
     * Копіпаста зі стека
     */
    const hours = 
        pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = 
        pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = 
        pad(Math.floor((time % (1000 * 60)) / 1000));
    
    // console.log(`${hours}:${mins}:${secs}`);

    refs.clockFace.textContent = `${hours}:${mins}:${secs}`;
}

function pad(value) {
    return String(value).padStart(2, '0');
}
