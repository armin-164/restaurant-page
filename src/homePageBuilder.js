import buildHeader from "./createHeader";
import buildMainSection from "./createMainSection";
import addHomepageText from "./tabContent/homeContent";

const addElements = () => {
  const content = document.getElementById("content");
  content.appendChild(buildHeader());
  content.appendChild(buildMainSection(addHomepageText()));
};

export default addElements;
