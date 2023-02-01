export default function component(element) {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Contact";
  element.appendChild(h1);

  const p = document.createElement("p");
  p.innerHTML = "Contact us at 123-456-7890.";
  element.appendChild(p);

  const p2 = document.createElement("p");
  p2.innerHTML = "Or email us at hello@email.com.";
  element.appendChild(p2);

  return element;
}
