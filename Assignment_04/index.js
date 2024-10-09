
const imageEl = document.querySelector("img");
const changePictureEl = document.querySelector("#change-picture")
const images = [
    "https://images.unsplash.com/photo-1726682577615-728e4272a60c?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1727709350469-5fde916217a8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1610415304248-5fd40f3e2263?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1727452166441-d1d8de08f041?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1727949238080-8f3355c0613b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "images/declan-sun-nnI25x23mpA-unsplash.jpg"
]
let imageIndex = 5;

changePictureEl.addEventListener("click", function() {
    imageEl.setAttribute("src", images[imageIndex])
    imageIndex = (imageIndex + 1) % images.length
})



const backgroundEl = document.querySelector(".container");
const changeBackgroundEl = document.querySelector("#change-background")
const colors = ["tomato", "lightblue", "lightgreen", "yellow", "purple"];
let colorIndex = 0;
changeBackgroundEl.addEventListener("click", function() {
    backgroundEl.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length
})

const inputEl = document.querySelector("#input-el")
const nameEl = document.querySelector("#change-name")
const nameTitle = document.querySelector("#name-title")
nameEl.addEventListener("click", function() {
    nameTitle.textContent = inputEl.value
    inputEl.value = ""
})

const descriptionEl = document.querySelector("#change-description")
const nameDescription = document.querySelector("#name-description")
descriptionEl.addEventListener("click", function() {
    nameDescription.textContent = inputEl.value
    inputEl.value = "";
})

const resetEl = document.querySelector("#reset")
// const containerEl = document.querySelector(".container")
resetEl.addEventListener("click", function() {
    imageEl.setAttribute("src", "images/declan-sun-nnI25x23mpA-unsplash.jpg")
    backgroundEl.style.backgroundColor = "#eee";
    nameTitle.textContent = "Muhammad Saad";
    nameDescription.textContent = "Mern Stack Developer";
    inputEl.value = "";
})