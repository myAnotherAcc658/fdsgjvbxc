const tg = window.Telegram.WebApp;
tg.expand();

let page = 1;

tg.BackButton.onClick(() => {
    if (page > 1) {
        window.history.back();
        page--;
    } else {
        tg.BackButton.hide();
    }
});

let mainButton = tg.BottomButton.setParams({
    text: "Дальше",
    color: tg.themeParams.button_color,
    textColor: tg.themeParams.button_text_color,
    has_shine_effect: true,
    type: "main",
    is_active: true,
    is_visible: true
});
let randomNumberButton = tg.BottomButton.setParams({
    text: "Рандом. число",
    color: tg.themeParams.button_color,
    textColor: tg.themeParams.button_text_color,
    has_shine_effect: false,
    type: "secondary",
    positiom: "top",
    is_active: true,
    is_visible: false
});

tg.BottomButton.onClick((button) => {
    if (button.text == "Дальше") {
        page++;
        switch (page) {
            case 1:
                window.location.href = "/index.html";
                break;
            case 2:
                window.location.href = "/2.html"
                tg.BackButton.show();
                break;
            case 3:
                window.location.href = "/3.html"
                tg.BackButton.show();
                break;
            case 4:
                window.location.href = "/4.html"
                tg.BackButton.show();
                break;
            case 5:
                window.location.href = "/5.html"
                tg.BackButton.show();
                break;
            case 6:
                window.location.href = "/6.html"
                tg.BackButton.show();
                break;
            case 7:
                window.location.href = "/7.html"
                tg.BackButton.show();
                break;
            case 8:
                window.location.href = "/8.html"
                tg.BackButton.show();
                break;
            case 9:
                window.location.href = "/9.html"
                break;
        }
    }

    if (button.text == "Рандом. число") {
        const funnyNumsArray = ["228", "1337", "1488", "52", "69", "7-8", "777"]

        let luckyNumberElement = document.getElementById("luckyNumber");
        const randomNumChosen = getRandomElement(funnyNumsArray);
        localStorage.setItem("randomNum", randomNumChosen);
        luckyNumberElement.textContent = randomNumChosen;
        mainButton.enable();
    }
})

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.endsWith("7.html")) {
        secondartyButton.show();
        if (!localStorage.getItem("randomNum")) {
            mainButton.disable();
        }
    } else {
        secondartyButton.hide();
        mainButton.enable();
    }
});

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


