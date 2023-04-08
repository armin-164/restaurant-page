const addHomepageText = () => {
    const containerText = document.createElement("div");
    containerText.classList = "text-container";

    const promoContainer = document.createElement("div");
    promoContainer.classList = "promo-container";

    const headerText = document.createElement("h2");
    headerText.innerText = "Savor the Flavor here at The Italian Place";

    const sloganText = document.createElement("p");
    sloganText.innerText = "Delicious food at w prices"

    const orderButton = document.createElement("button");
    orderButton.classList = "order-button";
    orderButton.innerText = "Order Now";



    headerText.appendChild(sloganText);
    promoContainer.appendChild(headerText);
    promoContainer.appendChild(orderButton);


    containerText.appendChild(promoContainer);

    
    return containerText;
}

export default addHomepageText;