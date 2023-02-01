import "./style.css";
import mainComponent from "./components/mainComponent.js";
import headerComponent from "./components/headerComponent.js";

(function () {
  let activeTab = "home";

  const navCallback = (e) => {
    activeTab = e.target.innerHTML.toLowerCase();
    deactivateAllTabs();
    e.target.classList.add("active");
    document.body.removeChild(document.querySelector(".main-component"));
    document.body.appendChild(mainComponent(activeTab));
  };

  document.body.appendChild(headerComponent(navCallback));

  document.body.appendChild(mainComponent(activeTab));

  function deactivateAllTabs() {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
  }
})();
