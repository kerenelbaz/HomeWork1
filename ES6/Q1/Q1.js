const output = document.querySelector(".output");
const goBtn = document.querySelector(".goBtn");
const form = document.querySelector(".form");
const counterInput = document.querySelector(".counterInput");
const increaseBtn = document.querySelector(".increaseBtn");

class Counter {
    counter;
    initialize(value) {
        this.counter = value;
    }

    increment() {
        this.counter++;
        counterInput.value = this.counter;
    }

    go() {
        let numbers = "";
        for (let i = 0; i < this.counter; i++) {
            numbers += i + " ";
        }

        let mark = `<p>${numbers}</p>`;
        output.innerHTML = '';
        output.insertAdjacentHTML("beforeend", mark);
    }
}
let counter;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const c = new Counter();
    counter = c;
    c.initialize(counterInput.value);

    console.log(c);
});

increaseBtn.addEventListener("click", function (e) {
    if (!counter)
        return
    counter.increment(counterInput.value);
});

goBtn.addEventListener("click", function () {
    counter.go();
});


