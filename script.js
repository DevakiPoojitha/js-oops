class Blog {
    constructor(title, detail) {
        this.title = title
        this.detail = detail
    }
    addTitle() {
        const title_Card = document.createElement("h1")
        title_Card.setAttribute("id", "blog-title")
        console.log(title_Card)
        document.getElementById("card-text").appendChild(title_Card)
        title_Card.innerHTML += this.title
    }
    addDescription() {
        const description_Card = document.createElement("p")
        description_Card.setAttribute("id", "blog-description")
        console.log(description_Card)
        document.getElementById("card-text").appendChild(description_Card)
        description_Card.innerHTML += this.detail
    }
}
document.getElementById("close").addEventListener("click", () => {
    document.getElementById("popupContact").style.display = "none"
    document.getElementById("title").value = ""
    document.getElementById("detail").value = ""
})
document.getElementById("addBlog").addEventListener("click", () => {
    document.getElementById("popupContact").style.display = "block"
    document.getElementById("title").value = ""
    document.getElementById("detail").value = ""
})

document.getElementById("post").addEventListener("click", () => {
    document.getElementById("popupContact").style.display = "none"
    const title = document.getElementById("title").value
    const description = document.getElementById("detail").value
    const image = document.createElement("img")
    image.src = "./assets/javascript.png"
    document.getElementById("card-text").append(image)
    const nblog = new Blog(title, description)
    nblog.addTitle()
    nblog.addDescription()
})
