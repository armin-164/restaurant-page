import buildHeader from "./createHeader";

const addElements = () => {
  const content = document.getElementById("content");
  content.appendChild(buildHeader());
};

export default addElements;
