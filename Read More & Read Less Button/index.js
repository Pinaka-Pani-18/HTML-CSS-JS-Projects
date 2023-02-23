const btnEl = document.querySelector(".btn");
const readEl = document.querySelector(".read");

let more = true;

const clicked = () => {
    if(!more){
        readEl.classList.add("hide");
        more = true;
        btnEl.innerHTML = "Read More...";
    }else{
        readEl.classList.remove("hide");
        more = false;
        btnEl.innerHTML = "Read Less";
    }
}

btnEl.addEventListener("click",clicked);