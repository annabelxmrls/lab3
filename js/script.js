
// mouse position
const position = document.querySelector('.position');
const point = document.querySelector('#point');

position.addEventListener ('mousedown', e => {
    point.innerHTML = e.offsetX + ', ' + e.offsetY;

    console.log("Client: " , e.clientX , e.clientY)
    console.log("Page: " , e.pageX , epageY)
    console.log("Screen: " , e.screenX , e.screenY)
    console.log("Event Object: ", e);
})

// trigger animation
const container = document.getElementById("container");
const insect = document.getElementById('insect');

        container.addEventListener('click', (e) => {
            insect.style.transform = `translateY(${e.clientY - 25}px)`;
            insect.style.transform += `translateX(${e.clientX - 25}px)`;
            insect.style.opacity = 1;
            console.log('You added a butterfly! Look at it fly!')
        }, false);

// trigger animation 2

const down = document.querySelector("#down");

    down.style.backgroundImage = "url('../images/day.png')";
    down.style.backgroundSize = "cover";
    down.style.width = "600px";
    down.style.height = "400px";

    down.addEventListener("mousedown", e => {
        console.log("Ahh! Who turned off the lights?!")
        down.style.backgroundImage = "url('../images/night.png')";
    })

    down.addEventListener("mouseup", e => {
        console.log("Yay! I can see again!")
        down.style.backgroundImage = "url('../images/day.png')";
    })

const double = document.querySelector("#double");

    double.style.backgroundImage = "url('../images/night.png')";
    double.style.backgroundSize = "cover";
    double.style.width = "600px";
    double.style.height = "400px";

    double.addEventListener("dblclick", e => {
        console.log("*Groans* 5 more minutes of sleep please!")
        double.style.backgroundImage = "url('../images/day.png')";
    })


