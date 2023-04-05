import pizzaBackground from "./pizza.jpg";


const buildMainSection = (changeContent) => {
    
    const mainContainer = document.createElement("div");
    mainContainer.classList = "main-container";

    const mainBackgroundImg = document.createElement("img");
    mainBackgroundImg.src = pizzaBackground;
    mainBackgroundImg.classList = "main-background-img";
    mainContainer.appendChild(mainBackgroundImg);

    const mainContent = document.createElement("div");
    mainContent.classList = "main-content";
    mainContent.appendChild(changeContent);

    mainContainer.appendChild(mainContent);
    return mainContainer;
}

export default buildMainSection;