// ===== VARIABLES =====

let clicks = 0, clickPower = 1;

let clickers = 0, hands = 0, moais = 0, prophecies = 0, titanics = 0;

let clickerPrice = 10;
let handPrice = 50;
let moaiPrice = 1000;
let prophecyPrice = 10000;
let titanicPrice = 25000;

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

const clickerText = document.getElementById("clickers");
const handText = document.getElementById("hands");
const moaiText = document.getElementById("moais");
const prophecyText = document.getElementById("prophecies");
const titanicText = document.getElementById("titanics");

const clickerPriceText = document.getElementById("clickerPrice");
const handPriceText = document.getElementById("handPrice");
const moaiPriceText = document.getElementById("moaiPrice");
const prophecyPriceText = document.getElementById("prophecyPrice");
const titanicPriceText = document.getElementById("titanicPrice");

const speedPriceText = document.getElementById("speedPrice");
const clickGearPriceText = document.getElementById("clickGearPrice");
const incomePriceText = document.getElementById("incomePrice");

const speedStatus = document.getElementById("speedStatus");
const clickGearStatus = document.getElementById("clickGearStatus");
const incomeStatus = document.getElementById("incomeStatus");

// ===== CLICK BUTTON =====

document.getElementById("mainButton").onclick = () => {

    let gain = clickPower;

    if (clickGearActive) gain *= 2;
    if (incomeActive) gain *= 2;

    clicks += gain;

    update();

};

// ===== CLICKER =====

document.getElementById("buyClicker").onclick = () => {

    if (clicks < clickerPrice) return;

    clicks -= clickerPrice;
    clickers++;
    clickerPrice = Math.floor(clickerPrice * 1.25);

    update();

};

// ===== HAND =====

document.getElementById("buyHand").onclick = () => {

    if (clicks < handPrice) return;

    clicks -= handPrice;
    hands++;
    clickPower += 2;
    handPrice = Math.floor(handPrice * 1.25);

    update();

};

// ===== MOAI =====

document.getElementById("buyMoai").onclick = () => {

    if (clicks < moaiPrice) return;

    clicks -= moaiPrice;
    moais++;
    moaiPrice = Math.floor(moaiPrice * 1.15);

    update();

};

// ===== PROPHECY =====

document.getElementById("buyProphecy").onclick = () => {

    if (clicks < prophecyPrice) return;

    clicks -= prophecyPrice;
    prophecies++;
    clickPower += 50;
    prophecyPrice = Math.floor(prophecyPrice * 1.15);

    update();

};

// ===== TITANIC =====

document.getElementById("buyTitanic").onclick = () => {

    if (clicks < titanicPrice) return;

    clicks -= titanicPrice;
    titanics++;
    titanicPrice = Math.floor(titanicPrice * 1.125);

    update();

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
// ===== AUTO CLICK =====

setInterval(() => {

    let cps = clickers + (moais * 10) + (titanics * 100);

    if (speedActive) cps *= 2;
    if (incomeActive) cps *= 2;

    clicks += cps / 10;

    update();

}, 100);

// ===== TIMERS =====

setInterval(() => {

    if (speedActive && --speedTime <= 0) {
        speedActive = false;
        speedTime = 0;
    }

    if (clickGearActive && --clickGearTime <= 0) {
        clickGearActive = false;
        clickGearTime = 0;
    }

    if (incomeActive && --incomeTime <= 0) {
        incomeActive = false;
        incomeTime = 0;
    }

    update();

}, 1000);

// ===== UPDATE =====

function update() {

    clicksText.textContent = Math.floor(clicks);

    clickerText.textContent = clickers;
    handText.textContent = hands;
    moaiText.textContent = moais;
    prophecyText.textContent = prophecies;
    titanicText.textContent = titanics;

    clickerPriceText.textContent = clickerPrice;
    handPriceText.textContent = handPrice;
    moaiPriceText.textContent = moaiPrice;
    prophecyPriceText.textContent = prophecyPrice;
    titanicPriceText.textContent = titanicPrice;

    speedPriceText.textContent = speedPrice;
    clickGearPriceText.textContent = clickGearPrice;
    incomePriceText.textContent = incomePrice;

    speedStatus.textContent =
        speedActive ? `⚡ Active (${speedTime}s)` : "Ready";

    clickGearStatus.textContent =
        clickGearActive ? `💥 Active (${clickGearTime}s)` : "Ready";

    incomeStatus.textContent =
        incomeActive ? `💰 Active (${incomeTime}s)` : "Ready";
}

// ===== START =====

update();