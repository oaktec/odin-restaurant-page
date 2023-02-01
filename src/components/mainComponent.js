import addHomeContent from "./homeContent.js";

export default function component(activeTab) {
  const element = document.createElement("div");
  element.classList.add("main-component");

  switch (activeTab) {
    case "home":
      addHomeContent(element);
      break;
    case "menu":
      addMenuContent(element);
      break;
    case "contact":
      addContactContent(element);
      break;
    default:
      break;
  }

  return element;
}
