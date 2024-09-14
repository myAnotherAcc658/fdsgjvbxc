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

tg.MainButton.setParams({
    text: "Дальше",
    color: tg.themeParams.button_color,
    textColor: tg.themeParams.button_text_color,
    has_shine_effect: true,
    is_active: true,
    is_visible: true
});
tg.SecondaryButton.setParams({
    text: "Рандом. число",
    color: tg.themeParams.button_color,
    textColor: tg.themeParams.button_text_color,
    has_shine_effect: false,
    positiom: "top",
    is_active: true,
    is_visible: false
});

tg.MainButton.onClick(() => {
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
})

tg.SecondaryButton.onClick(() => {
    const funnyNumsArray = ["228", "1337", "1488", "52", "69", "7-8", "777"]

    let luckyNumberElement = document.getElementById("luckyNumber");
    const randomNumChosen = getRandomElement(funnyNumsArray);
    localStorage.setItem("randomNum", randomNumChosen);
    luckyNumberElement.textContent = randomNumChosen;
    tg.MainButton.enable();
})

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.endsWith("7.html")) {
        tg.SecondaryButton.show();
        if (!localStorage.getItem("randomNum")) {
            tg.MainButton.disable();
        }
    } else {
        tg.SecondaryButton.hide();
        tg.MainButton.enable();
    }
});

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


