function addAboutpageText () {
    const aboutDiv = document.createElement("div");

    const title = document.createElement("h2");
    title.innerText = "About Us";

    const paragraph = document.createElement("p");
    paragraph.innerText = "Welcome to our restaurant, where we serve delicious hamburgers, kebab pizzas, pastas, and sushi. We're committed to using high-quality ingredients and providing great service at affordable prices. Our menu offers something for everyone, with fresh, tasty options that are sure to satisfy. Come visit us today and taste the difference!";

    aboutDiv.append(title,paragraph);

    return aboutDiv;
}

export default addAboutpageText;