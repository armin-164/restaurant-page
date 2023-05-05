import addElements from "./homePageBuilder";
import addHomepageText from "./tabContent/homeContent";
import addMenupageText from "./tabContent/menuContent";
import "./style.css";

addElements(addHomepageText()); // This creates the site with the homepage content.

const tabs = document.querySelectorAll("li");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (tab.innerText === "Home") {
      const content = document.querySelector("#content");

      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }
      
      addElements(addHomepageText());
    } else if (tab.innerText === "Menu") {
      const content = document.querySelector("#content");
      content.innerHTML = "";
      addElements(addMenupageText());
    }
  });
});
