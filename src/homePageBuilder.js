import buildHeader from "./createHeader";
import buildMainSection from "./createMainSection";

const addElements = (f) => {
  const content = document.getElementById("content");
  content.appendChild(buildHeader());
  content.appendChild(buildMainSection(f));
};

export default addElements;
