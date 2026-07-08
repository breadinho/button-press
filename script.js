// ===== VARIABLES =====

let clicks = 0;
let clickPower = 1;

let clickers = 0;
let hands = 0;
let moais = 0;
let prophecies = 0;
let titanics = 0;
let cookies = 0;
let cinemas = 0;
let ends = 0;

let clickerPrice = 10;
let handPrice = 50;
let moaiPrice = 1000;
let prophecyPrice = 10000;
let titanicPrice = 25000;
let cookiePrice = 100000;
let cinemaPrice = 175000;

let speedPrice = 3500;
let clickGearPrice = 5000;
let incomePrice = 10000;

let speedActive = false;
let clickGearActive = false;
let incomeActive = false;

let speedTime = 0;
let clickGearTime = 0;
let incomeTime = 0;


// ===== ELEMENTS =====

const clicksText = document.getElementById("clicks");

const clickersText = document.getElementById("clickers");
const handsText = document.getElementById("hands");
const moaisText = document.getElementById("moais");
const propheciesText = document.getElementById("prophecies");
const titanicsText = document.getElementById("titanics");
const cookiesText = document.getElementById("cookies");
const cinemasText = document.getElementById("cinemas");
const endsText = document.getElementById("ends");

const clickerPriceText = document.getElementById("clickerPrice");
const handPriceText = document.getElementById("handPrice");
const moaiPriceText = document.getElementById("moaiPrice");
const prophecyPriceText = document.getElementById("prophecyPrice");
const titanicPriceText = document.getElementById("titanicPrice");
const cookiePriceText = document.getElementById("cookiePrice");
const cinemaPriceText = document.getElementById("cinemaPrice");

const speedStatus = document.getElementById("speedStatus");
const clickGearStatus = document.getElementById("clickGearStatus");
const incomeStatus = document.getElementById("incomeStatus");


// ===== MAIN CLICK =====

document.getElementById("mainButton").onclick = () => {

    let gain = clickPower;

    if (clickGearActive) gain *= 2;
    if (incomeActive) gain *= 2;

    clicks += gain;

    update();

};


// ===== SHOP =====

document.getElementById("buyClicker").onclick = () => {

    if (clicks >= clickerPrice) {

        clicks -= clickerPrice;
        clickers++;

        clickerPrice = Math.floor(clickerPrice * 1.25);

        update();
    }

};


document.getElementById("buyHand").onclick = () => {

    if (clicks >= handPrice) {

        clicks -= handPrice;
        hands++;

        clickPower += 2;

        handPrice = Math.floor(handPrice * 1.25);

        update();
    }

};


document.getElementById("buyMoai").onclick = () => {

    if (clicks >= moaiPrice) {

        clicks -= moaiPrice;
        moais++;

        moaiPrice = Math.floor(moaiPrice * 1.15);

        update();
    }

};


document.getElementById("buyProphecy").onclick = () => {

    if (clicks >= prophecyPrice) {

        clicks -= prophecyPrice;
        prophecies++;

        clickPower += 50;

        prophecyPrice = Math.floor(prophecyPrice * 1.15);

        update();
    }

};


document.getElementById("buyTitanic").onclick = () => {

    if (clicks >= titanicPrice) {

        clicks -= titanicPrice;
        titanics++;

        titanicPrice = Math.floor(titanicPrice * 1.125);

        update();
    }

};


document.getElementById("buyCookie").onclick = () => {

    if (clicks >= cookiePrice) {

        clicks -= cookiePrice;
        cookies++;

        clickPower += 1000;

        cookiePrice = Math.floor(cookiePrice * 1.075);

        update();
    }

};


document.getElementById("buyCinema").onclick = () => {

    if (clicks >= cinemaPrice) {

        clicks -= cinemaPrice;
        cinemas++;

        clickPower += 1000;

        cinemaPrice = Math.floor(cinemaPrice * 1.035);

        update();
    }

};


// ===== GEARS =====

document.getElementById("buySpeed").onclick = () => {

    if (clicks >= speedPrice) {

        clicks -= speedPrice;

        speedActive = true;
        speedTime = 15;

        update();
    }

};


document.getElementById("buyClickGear").onclick = () => {

    if (clicks >= clickGearPrice) {

        clicks -= clickGearPrice;

        clickGearActive = true;
        clickGearTime = 15;

        update();
    }

};


document.getElementById("buyIncome").onclick = () => {

    if (clicks >= incomePrice) {

        clicks -= incomePrice;

        incomeActive = true;
        incomeTime = 15;

        update();
    }

};
// ===== AUTO INCOME =====

setInterval(() => {

    let cps = clickers + (moais * 10) + (titanics * 100);

    if (speedActive) cps *= 2;
    if (incomeActive) cps *= 2;

    clicks += cps / 10;

    update();

}, 100);


// ===== GEAR TIMERS =====

setInterval(() => {

    if (speedActive) {

        speedTime--;

        if (speedTime <= 0) {

            speedActive = false;
            speedTime = 0;

        }

    }


    if (clickGearActive) {

        clickGearTime--;

        if (clickGearTime <= 0) {

            clickGearActive = false;
            clickGearTime = 0;

        }

    }


    if (incomeActive) {

        incomeTime--;

        if (incomeTime <= 0) {

            incomeActive = false;
            incomeTime = 0;

        }

    }

    update();

}, 1000);


// ===== END GAME =====

document.getElementById("buyEnd").onclick = () => {

    if (clicks >= 1000000 && ends < 2) {

        clicks -= 1000000;

        ends++;

        document.getElementById("winScreen").style.display = "flex";

        update();

    }

};


document.getElementById("continueButton").onclick = () => {

    document.getElementById("winScreen").style.display = "none";

};


// ===== UPDATE =====

function update() {

    clicksText.textContent = Math.floor(clicks);


    clickersText.textContent = clickers;
    handsText.textContent = hands;
    moaisText.textContent = moais;
    propheciesText.textContent = prophecies;
    titanicsText.textContent = titanics;
    cookiesText.textContent = cookies;
    cinemasText.textContent = cinemas;
    endsText.textContent = ends;


    clickerPriceText.textContent = clickerPrice;
    handPriceText.textContent = handPrice;
    moaiPriceText.textContent = moaiPrice;
    prophecyPriceText.textContent = prophecyPrice;
    titanicPriceText.textContent = titanicPrice;
    cookiePriceText.textContent = cookiePrice;
    cinemaPriceText.textContent = cinemaPrice;


    speedStatus.textContent =
        speedActive ? "⚡ Active (" + speedTime + "s)" : "Ready";


    clickGearStatus.textContent =
        clickGearActive ? "💥 Active (" + clickGearTime + "s)" : "Ready";


    incomeStatus.textContent =
        incomeActive ? "💰 Active (" + incomeTime + "s)" : "Ready";

}


// ===== START =====

const winScreen = document.getElementById("winScreen");

winScreen.style.display = "none";

update();

update();