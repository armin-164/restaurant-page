import pizzaBackground from "./pizza.jpg";


const buildMainSection = () => {
    const mainContainer = document.createElement("div");
    mainContainer.classList = "main-container";

    const mainBackgroundImg = document.createElement("img");
    mainBackgroundImg.src = pizzaBackground;
    mainContainer.appendChild(mainBackgroundImg);

    const mainContent = document.createElement("div");
    mainContent.classList = "main-content";
    mainContainer.appendChild(mainContent);


    return mainContainer;
}

export default buildMainSection;