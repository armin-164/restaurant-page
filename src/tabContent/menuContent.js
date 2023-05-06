function returnPrice(p) {
    const text = document.createElement("span");
    text.innerText = `${p} $`
    return text;
}


function addMenupageText () {
    const menuText = document.createElement("div");
    
    const foodPriceDiv = document.createElement("div");
    foodPriceDiv.classList = "food-price-div";

    const foodList = ["Hamburger", "Kebabpizza", "Pasta", "Sushi"];
    const foodPrices = ["2.99", "8.99", "4.99", "3.99"];

    for (let i = 0; i < foodList.length && i < foodPrices.length; i++) {
        const food = document.createElement("p");
        food.innerText = foodList[i];

        food.appendChild(returnPrice(foodPrices[i]));

        foodPriceDiv.appendChild(food);
    }

    menuText.appendChild(foodPriceDiv);

    return menuText;
}

export default addMenupageText;
