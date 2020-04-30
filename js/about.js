/*first option
function newTime() {
    const timeRun = document.querySelector(".about_page");
    const removeText = document.querySelector(".about")
    timeRun.removeChild(removeText);
    timeRun.innerHTML = "Banana color of banana rainbow!"
};

setTimeout(newTime, 3000);


second option*/
const changeText = document.getElementsByTagName("p");

const replaced = changeHTML.replace("The", "Banana");

console.log("changeText",changeText);
console.log("replaced",replaced);


const changeText = document.getElementsByTagName("p");
changeText.innerText = replace("The", "Banana");

console.log(changeText);