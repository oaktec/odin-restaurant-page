export default function component(element) {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Contact";
  element.appendChild(h1);

  const p = document.createElement("p");
  p.innerHTML = "Contact us at 555-555-5555.";
  element.appendChild(p);
  return element;
}
