let button = document.getElementById("button");
let span = document.getElementById("location");

// span.textContent = '???';

button.addEventListener("click", handleClick)

async function handleClick() {
    const response = await fetch('https://api.open-notify.org/iss-now.json');
    const location = await response.json();
    span.innerHTML = `The ISS is currently located at latitude: ${location.iss_position.latitude} longitude: ${location.iss_position.longitude}`;

};
