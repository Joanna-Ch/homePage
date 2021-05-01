console.log("cześć!");

let buttonColor = document.querySelector(".js-buttonColor");
let container = document.querySelector(".js-container");

buttonColor.addEventListener("click", () => {
    container.classList.toggle("container--Grey")
});

let buttonAdress = document.querySelector(".js-buttonAdress");
let adressShow = document.querySelector(".js-adressShow");
//  below button changes the background of the page
buttonAdress.addEventListener("click", () => {
    adressShow.innerHTML = ("Joanna <br> kom. 123456456 <br> kto@tam.pl");
    buttonAdress.remove();
});

let imageChange = document.querySelector(".js-imageChange");
let buttonImage = document.querySelector(".js-buttonImage");

buttonImage.addEventListener("click", () => {
    if (buttonImage.innerText === "Zobacz inne zdjęcie") {
        imageChange.src = "https://i.ibb.co/MC0bm5Y/morze.jpg";
        imageChange.alt = "morze";
        buttonImage.innerText = "Zobacz kolejne zdjęcie";
    } else {
        imageChange.src = "https://i.ibb.co/qCnSFW1/gory.jpg";
        imageChange.alt = "góry";
        buttonImage.innerText = "Zobacz inne zdjęcie";
    }
});









