export default function component(navCallback) {
  const element = document.createElement("div");
  element.classList.add("header-component");

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  li1.textContent = "Home";
  li1.addEventListener("click", navCallback);
  li2.textContent = "Menu";
  li2.addEventListener("click", navCallback);
  li3.textContent = "Contact";
  li3.addEventListener("click", navCallback);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  nav.appendChild(ul);
  element.appendChild(nav);

  return element;
}
