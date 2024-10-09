
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
const colors = ["linear-gradient(to right, #fbc2eb, #a6c1ee)",  // Light Pink to Light Blue
    "linear-gradient(to right, #ffecd2, #fcb69f)",  // Light Peach to Soft Orange
    "linear-gradient(to right, #d4fc79, #96e6a1)",  // Light Green to Soft Mint
    "linear-gradient(to right, #ff9a9e, #fecfef)",  // Light Coral to Soft Pink
    "linear-gradient(to right, #a1c4fd, #c2e9fb)",  // Sky Blue to Pale Cyan
    "linear-gradient(to right, #fdfbfb, #ebedee)",  // Almost White to Light Grey
    "linear-gradient(to right, #f6d365, #fda085)",  // Soft Yellow to Light Peach
    "linear-gradient(to right, #e0c3fc, #8ec5fc)",  // Light Purple to Soft Blue
    "linear-gradient(to right, #a8edea, #fed6e3)",  // Light Aqua to Light Pink
    "linear-gradient(to right, #fbc7d4, #9796f0)"];
let colorIndex = 0;
changeBackgroundEl.addEventListener("click", function() {
    backgroundEl.style.background = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length
})

const inputEl = document.querySelector("#input-el")
const nameEl = document.querySelector("#change-name")
const nameTitle = document.querySelector("#name-title")
nameEl.addEventListener("click", function() {

    // nameTitle.textContent = inputEl.value
    // inputEl.value = ""
    if (inputEl.value.trim() !== "") {
        nameTitle.textContent = inputEl.value;
        inputEl.value = "";
    } else {
        alert("Please enter a valid name.");
    }
})

const descriptionEl = document.querySelector("#change-description")
const nameDescription = document.querySelector("#name-description")
descriptionEl.addEventListener("click", function() {
    if (inputEl.value.trim() !== "") {
        nameDescription.textContent = inputEl.value;
        inputEl.value = "";
    } else {
        alert("Please enter a valid description.");
    }
})

const resetEl = document.querySelector("#reset")
// const containerEl = document.querySelector(".container")
resetEl.addEventListener("click", function() {
    imageEl.setAttribute("src", "images/declan-sun-nnI25x23mpA-unsplash.jpg")
    backgroundEl.style.background = "linear-gradient(-45deg, #415800, #e560dc, #ffb374, #ef5f5f, #d840b6)";
    nameTitle.textContent = "Muhammad Saad";
    nameDescription.textContent = "Mern Stack Developer";
    inputEl.value = "";
})