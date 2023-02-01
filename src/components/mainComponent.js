import addMainContent from "./homeContent.js";

export default function component() {
  const element = document.createElement("div");
  element.classList.add("main-component");
  addMainContent(element);

  return element;
}
