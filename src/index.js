import "./style.css";
import mainComponent from "./components/mainComponent.js";
import headerComponent from "./components/headerComponent.js";

(function () {
  let activeTab = "home";

  const navCallback = (e) => {
    activeTab = e.target.innerHTML.toLowerCase();
  };

  document.body.appendChild(headerComponent(navCallback));

  document.body.appendChild(mainComponent());
})();
