const createHeader = () => {
    let header_container = document.createElement("div");
    header_container.classList = "header-container";

    let header_title = document.createElement("h1");
    header_title.classList = "header-title";
    header_title.innerText = "Welcome to my restaurant";
    header_container.appendChild(header_title);

    let header_links_container = document.createElement("div");
    header_links_container.classList = "header-links-container";

    let header_links_list = document.createElement("ul");
    header_links_list.classList = "header-links-list";

    let header_links_array = ["Home", "Menu", "About"];

    header_container.appendChild(header_links_container);
    header_links_container.appendChild(header_links_list);

    header_links_array.forEach(link => {
        let li = document.createElement("li");
        li.innerText = link;
        header_links_list.appendChild(li);
    });

    return header_container;
}

const addElements = () => {
    let content = document.getElementById("content");
    content.appendChild(createHeader());
    
};

export {addElements}

