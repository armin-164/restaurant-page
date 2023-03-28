import createHeader from "./createHeader";

const addElements = () => {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
};

export default addElements;
