const tg = window.Telegram.WebApp;
tg.expand();

if (Number(localStorage.getItem("page")) > 10) {
    localStorage.setItem("page", 1)
}
if (window.location.href == "https://myanotheracc658.github.io/fdsgjvbxc/index.html") {
    window.location.reload();
}

tg.BackButton.onClick(() => {
    let currentPage = Number(localStorage.getItem("page"));
    
    if (currentPage > 1) {
        if (currentPage > 10) {
            localStorage.setItem("page", 1)
        } else {
            currentPage--;

            switch (currentPage) {
                case 1:
                    window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/index.html");
                    break;
                case 2:
                    window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/2.html");
                    tg.BackButton.show();
                    break;
                case 3:
                    window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/3.html");
                    tg.BackButton.show();
                    break;
                case 4:
                    window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/4.html");
                    tg.BackButton.show();
                    break;
                case 5:
                    window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/5.html");
                    tg.BackButton.show();
                    break;
                case 6:
                    window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/6.html");
                    tg.BackButton.show();
                    break;
                case 7:
                    window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/7.html");
                    tg.BackButton.show();
                    break;
                case 8:
                    window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/8.html");
                    tg.BackButton.show();
                    break;
                case 9:
                    window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/81.html");
                    break;
                case 10:
                    window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/9.html");
                    break;
            }
            localStorage.setItem("page", String(currentPage))
        }
    } else {
        tg.BackButton.hide();
    }
});

tg.MainButton.setParams({
    text: "Дальше",
    color: tg.themeParams.button_color,
    textColor: tg.themeParams.button_text_color,
    has_shine_effect: false,
    is_active: true,
    is_visible: true
});
tg.SecondaryButton.setParams({
    text: "Рандом. число",
    color: tg.themeParams.bottom_bar_bg_color,
    textColor: tg.themeParams.button_color,
    has_shine_effect: false,
    positiom: "top",
    is_active: true,
    is_visible: false
});

tg.MainButton.onClick(() => {
    let currentPage = Number(localStorage.getItem("page"));
    
    if (currentPage > 10) {
        localStorage.setItem("page", 1)
    } else {
        currentPage++;

        switch (currentPage) {
            case 1:
                window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/index.html");
                break;
            case 2:
                window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/2.html");
                tg.BackButton.show();
                break;
            case 3:
                window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/3.html");
                tg.BackButton.show();
                break;
            case 4:
                window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/4.html");
                tg.BackButton.show();
                break;
            case 5:
                window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/5.html");
                tg.BackButton.show();
                break;
            case 6:
                window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/6.html");
                tg.BackButton.show();
                break;
            case 7:
                window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/7.html");
                tg.BackButton.show();
                break;
            case 8:
                window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/8.html");
                tg.BackButton.show();
                break;
            case 9:
                window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/81.html");
                break;
            case 10:
                window.location.replace("https://myanotheracc658.github.io/fdsgjvbxc/9.html");
                break;
        }
        localStorage.setItem("page", String(currentPage))
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


