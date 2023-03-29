import buildHeader from "./createHeader";
import buildMainSection from "./createMainSection";

const addElements = () => {
  const content = document.getElementById("content");
  content.appendChild(buildHeader());
  content.appendChild(buildMainSection());
};

export default addElements;
