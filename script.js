let clicks = 0;

let clickPower = 1;

let clickers = 0;
let hands = 0;
let moais = 0;

let clickerPrice = 10;
let handPrice = 50;
let moaiPrice = 1000;

const clicksText = document.getElementById("clicks");

const button = document.getElementById("mainButton");

const clickerText = document.getElementById("clickers");
const handText = document.getElementById("hands");
const moaiText = document.getElementById("moais");

const clickerPriceText = document.getElementById("clickerPrice");
const handPriceText = document.getElementById("handPrice");
const moaiPriceText = document.getElementById("moaiPrice");

button.onclick = function () {

    clicks += clickPower;

    update();

};

document.getElementById("buyClicker").onclick = function () {

    if (clicks >= clickerPrice) {

        clicks -= clickerPrice;

        clickers++;

        clickerPrice = Math.floor(clickerPrice * 1.25);

        update();

    }

};

document.getElementById("buyHand").onclick = function () {

    if (clicks >= handPrice) {

        clicks -= handPrice;

        hands++;

        clickPower += 2;

        handPrice = Math.floor(handPrice * 1.25);

        update();

    }

};

document.getElementById("buyMoai").onclick = function () {

    if (clicks >= moaiPrice) {

        clicks -= moaiPrice;

        moais++;

        moaiPrice = Math.floor(moaiPrice * 1.15);

        update();

    }

};

setInterval(function () {

    clicks += clickers;
    clicks += moais * 10;

    update();

}, 1000);

function update() {

    clicksText.textContent = clicks;

    clickerText.textContent = clickers;
    handText.textContent = hands;
    moaiText.textContent = moais;

    clickerPriceText.textContent = clickerPrice;
    handPriceText.textContent = handPrice;
    moaiPriceText.textContent = moaiPrice;

}

update();