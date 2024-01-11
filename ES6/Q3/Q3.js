const form = document.querySelector(".form");
const infoDiv = document.querySelector(".infoDiv");

class Clock {
    hours;
    minutes;
    seconds;
    country;

    constructor(hours, minutes, seconds, country) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.country = country;
    }

    convertToSeconds() {
        return this.hours * 3600 + this.minutes * 60 + this.seconds;
    }

    show() {
        return (`${this.hours.toString().padStart(2, '0')} :
                ${this.minutes.toString().padStart(2, '0')} :
                ${this.seconds.toString().padStart(2, '0')}`);
    }

}

const clockArr = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const dataArr = [...new FormData(this)];
    const data = Object.fromEntries(dataArr);

    //create clock
    const clock = new Clock(data.hours, data.minutes, data.seconds, data.country);

    //add the clock to the clock array
    clockArr.push(clock);
    // console.log(clockArr);

    //presnt the array information
    if (clockArr.length === 5) {
        infoDiv.innerHTML = "";
        clockArr.forEach((clock) => {
            const mark = `
                    <p>
                        country: ${clock.country}<br>
                        time: ${clock.show()}<br>
                        in seconds: ${clock.convertToSeconds()}<br>
                    </p>
                    `;

            infoDiv.insertAdjacentHTML("beforeend", mark);
        });
        clockArr = [];
        infoDiv.innerHTML = "";
    }

    //clear the form values
    Array.from(form.elements).forEach(element => {
        if (element.type !== 'submit' && element.type !== 'button') {
            element.value = '';
        }
    });

});