const form = document.querySelector(".form");
const submitBtn = document.querySelector("#submitBtn");
const btnsDiv = document.querySelector(".btnsDiv");
const showBtn = document.querySelector(".showBtn");
const quackBtn = document.querySelector(".quackBtn");
const infoDiv = document.querySelector(".infoDiv");

class Duck {
    constructor(name, color, age, weight, image) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.image = image;
    }

    Show() {
        const mark = `
          <p>
              name: ${this.name}<br>
              color: ${this.color}<br>
              age: ${this.age}<br>
              weight: ${this.weight}<br>
              image: <img src="${this.image}">
              <br>
          </p>`;
        infoDiv.innerHTML = "";
        infoDiv.insertAdjacentHTML("beforeend", mark);
    }

    Quack() {
        const quackString = "Quack ".repeat((this.age * this.weight) / 2);
        const mark = `<p>${quackString}</p>`;
        infoDiv.innerHTML = "";
        infoDiv.insertAdjacentHTML("beforeend", mark);
        const sound = new Audio("075176_duck-quack-40345.mp3");

        let playCount = 0;

        // Function to play the sound
        function playSound() {
            sound.play();
        }

        // Event listener for the 'ended' event
        sound.addEventListener('ended', function () {
            playCount++;

            if (playCount < 3) {
                // Play the sound again after it has ended
                sound.play();
            }
        });

        // Play the sound initially
        playSound();

    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const dataArr = [...new FormData(this)];
    const data = Object.fromEntries(dataArr);

    //create duck
    const duck = new Duck(
        data.name,
        data.color,
        data.age,
        data.weight,
        data.image
    );

    //disable button
    submitBtn.disabled = true;

    showBtn.addEventListener("click", function () {
        duck.Show();
    });

    quackBtn.addEventListener("click", function () {
        duck.Quack();
    });

    btnsDiv.removeAttribute("hidden");
});