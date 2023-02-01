export default function component(element) {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Menu";
  element.appendChild(h1);

  const p = document.createElement("p");
  p.innerHTML = "Menu stuff goes here.";
  element.appendChild(p);
  return element;
}
