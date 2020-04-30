const queryString = document.location.search;
const paramater = new URLSearchParams(queryString);

const name = paramater.get("name");

const url = "https://www.breakingbadapi.com/api/characters?name=Walter White";

const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + url;

async function getCharacterByName() {
    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");
    const pSecond = document.querySelector("p");
    try {
        const response = await fetch(corsEnabledUrl);
        const res = await response.json();

        for (let i = 0; i < res.length; i++) {
            h1.innerHTML = res[i].name;
            p.innerHTML = res[i].birthday;
            pSecond.innerHTML = res[i].status;
            console.log(res);

        }
    } catch (error) {
        h1.innerHTML = "There is an error";
        console.log(error);
    }
    /*
    finally {
        const loading = document.querySelector(".detail-container");
        loading.style.display = "none";
    }*/
}

getCharacterByName();