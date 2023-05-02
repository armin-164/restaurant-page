const addHomepageText = () => {
    const containerText = document.createElement("div");
    containerText.classList = "text-container";

    //
    const promoContainer = document.createElement("div");
    promoContainer.classList = "promo-container";

    const headerText = document.createElement("h2");
    headerText.innerText = "Savor the Flavor here at The Italian Place";

    const sloganText = document.createElement("p");
    sloganText.innerText = "Delicious food at w prices"

    const orderButton = document.createElement("button");
    orderButton.classList = "order-button";
    orderButton.innerText = "Order Now";
    //

    headerText.appendChild(sloganText);
    promoContainer.appendChild(headerText);
    promoContainer.appendChild(orderButton);


    containerText.appendChild(promoContainer);
    containerText.appendChild(addInfoContent());

    
    return containerText;
}

function addInfoContent() {
    const infoContainer = document.createElement("div");
    infoContainer.classList = "info-container";

    const openingHours = document.createElement("div");
    openingHours.innerText = "Mon-Thurs:8am-8pm \n Fri-Sun:8am-11pm";

    const addressContainer = document.createElement("div");
    addressContainer.innerText = "2025 S Washington Ave \n Lansing Charter Township";

    infoContainer.append(openingHours, addressContainer);
    return infoContainer;
}

export default addHomepageText;