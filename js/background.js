const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);


//https://picsum.photos/300/300?random=1

// const bgImage = document.createElement("img");
// bgImage.src = "https://picsum.photos/300/300?random=1";
// document.body.appendChild(bgImage);


