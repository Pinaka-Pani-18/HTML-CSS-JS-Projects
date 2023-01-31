const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
    colorContainerEls.forEach((colorContainerEl) => {
        const newColor = createRandomColor();
        colorContainerEl.style.backgroundColor = "#" + newColor;
        colorContainerEl.innerHTML = "#" + newColor;
    })
}

createRandomColor();

function createRandomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const random = Math.floor(Math.random() *chars.length);
        colorCode = colorCode + chars.substring(random,random+1);
    }
    return colorCode;
}