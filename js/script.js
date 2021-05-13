// {

//     function welcome() {
//         console.log("Cześć :)");
//     }



//     const toogleTextSize = () => {
//         const body = document.querySelector(".body");
//         const nextText = document.querySelector(".nextText");

//         body.classList.toggle("body--bigText");
//         nextText.innerText = body.classList.contains("body--bigText") ? "mniejszą" : "większą";
//     };

//     const init = () => {
//         const changeTextButton = document.querySelector(".changeText");
//         changeTextButton.addEventListener("click", toogleTextSize);
//     };

// const showTelnumber= () =>{
//      const showNumber = document.querySelector(".showNumber")

//     showNumber.innerText = "tel:123-456-780";
//     };
//     const init2 = () => {
//         const jsDutyButton = document.querySelector(".jsDuty");
//     jsDutyButton.addEventListener("click", showTelnumber);
//     }
//     welcome();
//     init ();
//     init2();
// }



{
    const welcome = () => {
        console.log("Cześć!");
    }

    const toggleBackground = () => {
        const container = document.querySelector(".js-container");
        container.classList.toggle("container--Grey");
    };
    const showAdress = () => {
        const adressShow = document.querySelector(".js-adressShow");
        adressShow.innerHTML = ("Joanna <br> kom. 123456456 <br> kto@tam.pl");

    };

    const changeImage = () => {
        const imageChange = document.querySelector(".js-imageChange");
        const buttonImage = document.querySelector(".js-buttonImage");
        if (buttonImage.innerText === "Zobacz inne zdjęcie") {
            imageChange.src = "https://i.ibb.co/MC0bm5Y/morze.jpg";
            imageChange.alt = "morze";
            buttonImage.innerText = "Zobacz kolejne zdjęcie";
        } else {
            imageChange.src = "https://i.ibb.co/qCnSFW1/gory.jpg";
            imageChange.alt = "góry";
            buttonImage.innerText = "Zobacz inne zdjęcie";
        }
    };

    const init = () => {
        const buttonColor = document.querySelector(".js-buttonColor");
        buttonColor.addEventListener("click", toggleBackground);
        const buttonAdress = document.querySelector(".js-buttonAdress");
        buttonAdress.addEventListener("click", showAdress);
        const buttonImage = document.querySelector(".js-buttonImage");
        buttonImage.addEventListener("click", changeImage);
        welcome();
    };

    init();

}










