const createHeader = () => {
  const headerContainer = document.createElement("div");
  headerContainer.classList = "header-container";

  const headerTitle = document.createElement("h1");
  headerTitle.classList = "header-title";
  headerTitle.innerText = "Welcome to my restaurant";
  headerContainer.appendChild(headerTitle);

  const headerLinksContainer = document.createElement("div");
  headerLinksContainer.classList = "header-links-container";

  const headerLinksList = document.createElement("ul");
  headerLinksList.classList = "header-links-list";

  const headerLinksArray = ["Home", "Menu", "About"];

  headerContainer.appendChild(headerLinksContainer);
  headerLinksContainer.appendChild(headerLinksList);

  headerLinksArray.forEach((link) => {
    const li = document.createElement("li");
    li.innerText = link;
    headerLinksList.appendChild(li);
  });

  return headerContainer;
};

const addElements = () => {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
};

export default addElements;
