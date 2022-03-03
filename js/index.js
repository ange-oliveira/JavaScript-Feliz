const root = document.querySelector("#root")

function newElement(tag, content) {
    const title = `<${tag}>${content}</${tag}>`

    root.insertAdjacentHTML("beforeend", title)


}


newElement("h3", "eita")
newElement("h1", "Ange")
newElement("p", "matheus ")