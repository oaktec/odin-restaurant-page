import MainPic from "./img/main-pic.jpg";

export default function component() {
  const element = document.createElement("div");
  element.classList.add("main-component");

  const h1 = document.createElement("h1");
  h1.innerHTML = "Welcome to our restaurant!";
  element.appendChild(h1);

  const p = document.createElement("p");
  p.innerHTML =
    "We are a small family restaurant located in the heart of downtown. We serve a variety of dishes from around the world. We hope you enjoy your stay!";
  element.appendChild(p);

  const mainPic = new Image();
  mainPic.src = MainPic;
  element.appendChild(mainPic);
  return element;
}
