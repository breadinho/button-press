// =======================
// BUTTON PRESS v2.1
// Part 1
// =======================

// Currency
let clicks = 0;

// Manual click power
let clickPower = 1;

// Shop
let clickers = 0;
let hands = 0;
let moais = 0;

// Prices
let clickerPrice = 10;
let handPrice = 50;
let moaiPrice = 1000;

// Gear
let speedPrice = 2500;
let speedActive = false;
let speedTime = 0;

// =======================
// Elements
// =======================

const clicksText = document.getElementById("clicks");

const mainButton = document.getElementById("mainButton");

const clickSound = document.getElementById("clickSound");
const buySound = document.getElementById("buySound");

const clickerText = document.getElementById("clickers");
const handText = document.getElementById("hands");
const moaiText = document.getElementById("moais");

const clickerPriceText = document.getElementById("clickerPrice");
const handPriceText = document.getElementById("handPrice");
const moaiPriceText = document.getElementById("moaiPrice");

const speedPriceText = document.getElementById("speedPrice");
const speedStatus = document.getElementById("speedStatus");

// =======================
// Main Button
// =======================

mainButton.onclick = function () {

    clicks += clickPower;

    clickSound.currentTime = 0;
    clickSound.play();

    update();

};

// =======================
// Clicker
// =======================

document.getElementById("buyClicker").onclick = function () {

    if (clicks >= clickerPrice) {

        clicks -= clickerPrice;

        clickers++;

        clickerPrice = Math.floor(clickerPrice * 1.25);

        buySound.currentTime = 0;
        buySound.play();

        update();

    }

};

// =======================
// Hand
// =======================

document.getElementById("buyHand").onclick = function () {

    if (clicks >= handPrice) {

        clicks -= handPrice;

        hands++;

        clickPower += 2;

        handPrice = Math.floor(handPrice * 1.25);

        buySound.currentTime = 0;
        buySound.play();

        update();

    }

};

// =======================
// MOAI
// =======================

document.getElementById("buyMoai").onclick = function () {

    if (clicks >= moaiPrice) {

        clicks -= moaiPrice;

        moais++;

        moaiPrice = Math.floor(moaiPrice * 1.15);

        buySound.currentTime = 0;
        buySound.play();

        update();

    }

};

// =======================
// x2 SPEED GEAR
// =======================

document.getElementById("buySpeed").onclick = function () {

    if (clicks >= speedPrice && !speedActive) {

        clicks -= speedPrice;

        speedActive = true;

        speedTime = 15;

        speedPrice = Math.floor(speedPrice * 1.20);

        buySound.currentTime = 0;
        buySound.play();

        update();

    }

};

// =======================
// Auto Click Engine
// =======================

setInterval(function () {

    let cps = clickers + (moais * 10);

    if (speedActive) {
        cps *= 2;
    }

    clicks += cps;

    update();

}, 1000);

// =======================
// Speed Gear Timer
// =======================

setInterval(function () {

    if (speedActive) {

        speedTime--;

        if (speedTime <= 0) {

            speedActive = false;
            speedTime = 0;

        }

        update();

    }

}, 1000);

// =======================
// Update UI
// =======================

function update() {

    clicksText.textContent = Math.floor(clicks);

    clickerText.textContent = clickers;
    handText.textContent = hands;
    moaiText.textContent = moais;

    clickerPriceText.textContent = clickerPrice;
    handPriceText.textContent = handPrice;
    moaiPriceText.textContent = moaiPrice;

    speedPriceText.textContent = speedPrice;

    if (speedActive) {

        speedStatus.textContent =
            "⚡ Active (" + speedTime + "s)";

    } else {

        speedStatus.textContent = "Ready";

    }

}

// =======================
// First Update
// =======================

update();