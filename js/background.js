const images = [
  "0.jpeg",
  "1.jpeg",
  // "2.jpeg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
const bgImage = document.body;
console.dir(bgImage)
bgImage.background = `img/${chosenImage}`;
// bgImage.classList.add(`bg-[url(img/${chosenImage})]`);
bgImage.classList.add("h-screen");
bgImage.classList.add("w-full");
bgImage.classList.add("object-center");
bgImage.classList.add("absolute");
bgImage.classList.add("top-0");
bgImage.classList.add("-z-10");
// document.body.appendChild(bgImage);

// const bgImage = document.createElement("div");
// bgImage.classList.add(`bg-[url(img/${chosenImage})]`);
// bgImage.classList.add("h-full");
// document.body.appendChild(bgImage);


//https://picsum.photos/300/300?random=1

// const bgImage = document.createElement("img");
// bgImage.src = "https://picsum.photos/300/300?random=1";
// document.body.appendChild(bgImage);


