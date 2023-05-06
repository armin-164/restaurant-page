import addElements from "./homePageBuilder";
import addHomepageText from "./tabContent/homeContent";
import addMenupageText from "./tabContent/menuContent";
import buildMainSection from "./createMainSection";
import "./style.css";

// This is the intial page load
addElements(addHomepageText()); 

//This is the tab logic for when clicking tabs and changing content
(function tabLogic()  {
  const tabs = document.querySelectorAll("li");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const content = document.querySelector("#content");

      if (tab.innerText === "Home") {
        content.removeChild(content.children[1]);
        content.appendChild(buildMainSection(addHomepageText()));
      } else if (tab.innerText === "Menu") {
        content.removeChild(content.children[1]);
        content.appendChild(buildMainSection(addMenupageText()));
      }
      else if (tab.innerText === "About") {
        content.removeChild(content.children[1]);
        content.appendChild(buildMainSection(addMenupageText()));
      }
    });
  });
})();
