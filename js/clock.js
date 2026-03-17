const clock = document.querySelector("h2#clock");

function getClock () {
  const date = new Date();
  // const hours = date.getHours().toString().padStart(2, "0");
  // const min = date.getMinutes().toString().padStart(2, "0");
  // const second = date.getSeconds().toString().padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).toString().padStart(2, "0");
  const second = String(date.getSeconds()).toString().padStart(2, "0");
  clock.innerText = `${hours}:${min}:${second}`;
}
getClock();
setInterval(getClock, 1000);