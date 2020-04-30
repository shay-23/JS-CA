const urlBreakingBad = "https://www.breakingbadapi.com/api/characters";

async function getBreakingBad() {
    try {
        const response = await fetch(urlBreakingBad);
        const jsonResult = await response.json();
        displayCharacters(jsonResult);
    } catch (error) {
        console.log(error + "Something is wrong");
    } finally {
        console.log("evrything is done!");
    }
}

getBreakingBad();

function displayCharacters(names) {
    const container = document.querySelector(".container");
    let html = "";
    for (let i = 0; i < names.length; i++) {
        console.log("html", html);
        if (!names[i].name) {
            continue;
        }
        html += `<div class="cardCharecter">
                    <img class="image" src="${names[i].img}" alt="Title/Name"</img> 
                    <h2>${names[i].name}</h2>
                    <h5>Portrayed</h5>
                    <h3>${names[i].portrayed}</h3>
                    <h5>Nickname</h5>
                    <h4>${names[i].nickname}</h4>
                    <a class="btn btn-primary" href = "detail.html?name=${names[i].name}">Read more</a>
                </div>`;
    }
    container.innerHTML = html;
}