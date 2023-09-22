
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
const dwn = document.querySelector('.dwn');
const down = document.querySelector("#down");

dwn.style.background = "url('images/day.png')";
dwn.style.backgroundSize = "cover";
dwn.style.width = "600px";
dwn.style.height = "400px";

    down.addEventListener("mousedown", e => {
        console.log("Ahh! Who turned off the lights?!")
        dwn.style.background = "url('images/night.png')";
        dwn.style.backgroundSize = "cover";
    })

    down.addEventListener("mouseup", e => {
        console.log("Yay! I can see again!")
        dwn.style.background = "url('images/day.png')";
        dwn.style.backgroundSize = "cover";
    })

const dbl = document.querySelector('.dbl');
const double = document.querySelector("#double");

    double.style.background = "url('images/night.png')";
    double.style.backgroundSize = "cover";
    double.style.width = "600px";
    double.style.height = "400px";

    double.addEventListener("dblclick", e => {
        console.log("*Groans* 5 more minutes of sleep please!")
        double.style.background = "url('images/day.png')";
        double.style.backgroundSize = "cover";
    })


