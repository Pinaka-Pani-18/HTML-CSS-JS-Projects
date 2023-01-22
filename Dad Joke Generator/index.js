const btnEl = document.getElementById("btn");
const ApiKey = "2iI55Ei+Yj476K2w9qNObg==FOoYBaEv39t4fIfw";
const jokeEl = document.getElementById("joke");

const options = {
    method: "GET",
    headers: { 
        'X-Api-Key': ApiKey
    },
}

const ApiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
    try {
    jokeEl.innerText = "Updating...";

    btnEl.disabled = true;
    btnEl.innerText = "Loading...";

    const response = await fetch(ApiURL,options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell Me a Joke";

    jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An Error Happened Try Again Later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me a Joke";
        console.log(error);
    }
}



btnEl.addEventListener('click',getJoke);