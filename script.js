// ===== VARIABLES =====

let clicks = 0;

let clickPower = 1;

let clickers = 0;
let hands = 0;
let moais = 0;

let clickerPrice = 10;
let handPrice = 50;
let moaiPrice = 1000;

let speedPrice = 2500;
let clickGearPrice = 2500;
let incomePrice = 5000;

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

const clickerPriceText = document.getElementById("clickerPrice");
const handPriceText = document.getElementById("handPrice");
const moaiPriceText = document.getElementById("moaiPrice");

const speedPriceText = document.getElementById("speedPrice");
const clickGearPriceText = document.getElementById("clickGearPrice");
const incomePriceText = document.getElementById("incomePrice");

const speedStatus = document.getElementById("speedStatus");
const clickGearStatus = document.getElementById("clickGearStatus");
const incomeStatus = document.getElementById("incomeStatus");

// ===== MAIN BUTTON =====

document.getElementById("mainButton").onclick = function () {

    let gain = clickPower;

    if (clickGearActive || incomeActive) {
        gain *= 2;
    }

    clicks += gain;

    update();

};

// ===== CLICKER =====

document.getElementById("buyClicker").onclick = function () {

    if (clicks >= clickerPrice) {

        clicks -= clickerPrice;

        clickers++;

        clickerPrice = Math.floor(clickerPrice * 1.25);

        update();

    }

};

// ===== HAND =====

document.getElementById("buyHand").onclick = function () {

    if (clicks >= handPrice) {

        clicks -= handPrice;

        hands++;

        clickPower += 2;

        handPrice = Math.floor(handPrice * 1.25);

        update();

    }

};

// ===== MOAI =====

document.getElementById("buyMoai").onclick = function () {

    if (clicks >= moaiPrice) {

        clicks -= moaiPrice;

        moais++;

        moaiPrice = Math.floor(moaiPrice * 1.15);

        update();

    }

};

// ===== x2 SPEED =====

document.getElementById("buySpeed").onclick = function () {

    if (clicks >= speedPrice && !speedActive) {

        clicks -= speedPrice;

        speedActive = true;

        speedTime = 15;

        speedPrice = Math.floor(speedPrice * 1.20);

        update();

    }

};

// ===== x2 CLICK =====

document.getElementById("buyClickGear").onclick = function () {

    if (clicks >= clickGearPrice && !clickGearActive) {

        clicks -= clickGearPrice;

        clickGearActive = true;

        clickGearTime = 15;

        clickGearPrice = Math.floor(clickGearPrice * 1.20);

        update();

    }

};

// ===== x2 INCOME =====

document.getElementById("buyIncome").onclick = function () {

    if (clicks >= incomePrice && !incomeActive) {

        clicks -= incomePrice;

        incomeActive = true;

        incomeTime = 15;

        incomePrice = Math.floor(incomePrice * 1.20);

        update();

    }

};
// ===== AUTO CLICK =====

setInterval(function () {

    let cps = clickers + (moais * 10);

    if (speedActive || incomeActive) {
        cps *= 2;
    }

    clicks += cps;

    update();

}, 1000);

// ===== TIMERS =====

setInterval(function () {

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

// ===== UPDATE =====

function update() {

    clicksText.textContent = Math.floor(clicks);

    clickerText.textContent = clickers;
    handText.textContent = hands;
    moaiText.textContent = moais;

    clickerPriceText.textContent = clickerPrice;
    handPriceText.textContent = handPrice;
    moaiPriceText.textContent = moaiPrice;

    speedPriceText.textContent = speedPrice;
    clickGearPriceText.textContent = clickGearPrice;
    incomePriceText.textContent = incomePrice;

    speedStatus.textContent =
        speedActive ? "⚡ Active (" + speedTime + "s)" : "Ready";

    clickGearStatus.textContent =
        clickGearActive ? "💥 Active (" + clickGearTime + "s)" : "Ready";

    incomeStatus.textContent =
        incomeActive ? "💰 Active (" + incomeTime + "s)" : "Ready";

}

// ===== START =====

update();