// ===============================
// BUTTON PRESS v3.0
// Part 1 - Variables & Elements
// ===============================

// ---------- GAME DATA ----------

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

// ---------- SHOP PRICES ----------

let clickerPrice = 10;
let handPrice = 50;
let moaiPrice = 1000;
let prophecyPrice = 10000;
let titanicPrice = 25000;
let cookiePrice = 100000;
let cinemaPrice = 175000;
let endPrice = 100000000;

// ---------- GEAR PRICES ----------

const speedPrice = 5000;
const clickGearPrice = 5000;
const incomePrice = 10000;
const rainbowPrice = 50000;

// ---------- PRICE CAP ----------

const PRICE_CAP = 500000;

// ---------- GEAR STATES ----------

let speedActive = false;
let clickGearActive = false;
let incomeActive = false;
let rainbowActive = false;

let speedTime = 0;
let clickGearTime = 0;
let incomeTime = 0;
let rainbowTime = 0;

// ---------- DOM ----------

const mainButton = document.getElementById("mainButton");

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
const endPriceText = document.getElementById("endPrice");

const speedStatus = document.getElementById("speedStatus");
const clickStatus = document.getElementById("clickGearStatus");
const incomeStatus = document.getElementById("incomeStatus");
const rainbowStatus = document.getElementById("rainbowStatus");

// ---------- BUTTONS ----------

const buyClicker = document.getElementById("buyClicker");
const buyHand = document.getElementById("buyHand");
const buyMoai = document.getElementById("buyMoai");
const buyProphecy = document.getElementById("buyProphecy");
const buyTitanic = document.getElementById("buyTitanic");
const buyCookie = document.getElementById("buyCookie");
const buyCinema = document.getElementById("buyCinema");
const buyEnd = document.getElementById("buyEnd");

const buySpeed = document.getElementById("buySpeed");
const buyClickGear = document.getElementById("buyClickGear");
const buyIncome = document.getElementById("buyIncome");
const buyRainbow = document.getElementById("buyRainbow");

const saveGame = document.getElementById("saveGame");
const resetProgress = document.getElementById("resetProgress");
const resetAll = document.getElementById("resetAll");

const winScreen = document.getElementById("winScreen");
const continueButton = document.getElementById("continueButton");
// ===============================
// MAIN BUTTON
// ===============================

mainButton.onclick = (e) => {

    let gain = clickPower;

    if (clickGearActive) gain *= 2;
    if (incomeActive) gain *= 2;
    if (rainbowActive) gain *= 5;

    clicks += gain;

    if (clickGearActive || incomeActive) {

        const boom = document.createElement("div");

        boom.className = "effect";
        boom.innerHTML = "💥";

        boom.style.left = e.clientX + "px";
        boom.style.top = e.clientY + "px";

        document.body.appendChild(boom);

        setTimeout(() => boom.remove(), 800);

    }

    update();

};

// ===============================
// SHOP
// ===============================

buyClicker.onclick = () => {

    if (clicks < clickerPrice) return;

    clicks -= clickerPrice;
    clickers++;

    clickerPrice = Math.min(
        Math.floor(clickerPrice * 1.25),
        10 * PRICE_CAP
    );

    update();

};

buyHand.onclick = () => {

    if (clicks < handPrice) return;

    clicks -= handPrice;
    hands++;

    clickPower += 2;

    handPrice = Math.min(
        Math.floor(handPrice * 1.25),
        50 * PRICE_CAP
    );

    update();

};

buyMoai.onclick = () => {

    if (clicks < moaiPrice) return;

    clicks -= moaiPrice;
    moais++;

    moaiPrice = Math.min(
        Math.floor(moaiPrice * 1.15),
        1000 * PRICE_CAP
    );

    update();

};

buyProphecy.onclick = () => {

    if (clicks < prophecyPrice) return;

    clicks -= prophecyPrice;
    prophecies++;

    clickPower += 50;

    prophecyPrice = Math.min(
        Math.floor(prophecyPrice * 1.15),
        10000 * PRICE_CAP
    );

    update();

};

buyTitanic.onclick = () => {

    if (clicks < titanicPrice) return;

    clicks -= titanicPrice;
    titanics++;

    titanicPrice = Math.min(
        Math.floor(titanicPrice * 1.125),
        25000 * PRICE_CAP
    );

    update();

};

buyCookie.onclick = () => {

    if (clicks < cookiePrice) return;

    clicks -= cookiePrice;
    cookies++;

    clickPower += 1000;

    cookiePrice = Math.min(
        Math.floor(cookiePrice * 1.075),
        100000 * PRICE_CAP
    );

    update();

};

buyCinema.onclick = () => {

    if (clicks < cinemaPrice) return;

    clicks -= cinemaPrice;
    cinemas++;

    cinemaPrice = Math.min(
        Math.floor(cinemaPrice * 1.035),
        175000 * PRICE_CAP
    );

    update();

};
// ===============================
// GEARS
// ===============================

buySpeed.onclick = () => {
    if (clicks < speedPrice) return;
    clicks -= speedPrice;
    speedActive = true;
    speedTime = 15;
    update();
};

buyClickGear.onclick = () => {
    if (clicks < clickGearPrice) return;
    clicks -= clickGearPrice;
    clickGearActive = true;
    clickGearTime = 15;
    update();
};

buyIncome.onclick = () => {
    if (clicks < incomePrice) return;
    clicks -= incomePrice;
    incomeActive = true;
    incomeTime = 15;
    update();
};

buyRainbow.onclick = () => {
    if (clicks < rainbowPrice) return;

    clicks -= rainbowPrice;

    rainbowActive = true;
    rainbowTime = 10;

    mainButton.classList.add("rainbowButton");

    update();
};

// ===============================
// AUTO INCOME
// ===============================

setInterval(() => {

    let cps = 0;

    cps += clickers;
    cps += moais * 10;
    cps += titanics * 100;
    cps += cinemas * 1500;

    if (speedActive) cps *= 2;
    if (incomeActive) cps *= 2;
    if (rainbowActive) cps *= 5;

    clicks += cps / 10;

    update();

}, 100);

// ===============================
// TIMERS
// ===============================

setInterval(() => {

    if (speedActive && --speedTime <= 0)
        speedActive = false;

    if (clickGearActive && --clickGearTime <= 0)
        clickGearActive = false;

    if (incomeActive && --incomeTime <= 0)
        incomeActive = false;

    if (rainbowActive && --rainbowTime <= 0) {

        rainbowActive = false;
        mainButton.classList.remove("rainbowButton");

    }

    update();

}, 1000);

// ===============================
// THE END
// ===============================

buyEnd.onclick = () => {

    if (clicks < endPrice || ends >= 1) return;

    clicks -= endPrice;
    ends++;

    winScreen.style.display = "flex";

    update();

};

continueButton.onclick = () => {

    winScreen.style.display = "none";

};

// ===============================
// SAVE
// ===============================

saveGame.onclick = () => {

    const save = {

        clicks,
        clickPower,

        clickers,
        hands,
        moais,
        prophecies,
        titanics,
        cookies,
        cinemas,
        ends,

        clickerPrice,
        handPrice,
        moaiPrice,
        prophecyPrice,
        titanicPrice,
        cookiePrice,
        cinemaPrice,
        endPrice

    };

    localStorage.setItem(
        "buttonPressSave",
        JSON.stringify(save)
    );

    alert("Game Saved!");

};

// ===============================
// LOAD
// ===============================

const save = JSON.parse(localStorage.getItem("buttonPressSave"));

if (save) {

    clicks = save.clicks ?? clicks;
    clickPower = save.clickPower ?? clickPower;

    clickers = save.clickers ?? clickers;
    hands = save.hands ?? hands;
    moais = save.moais ?? moais;
    prophecies = save.prophecies ?? prophecies;
    titanics = save.titanics ?? titanics;
    cookies = save.cookies ?? cookies;
    cinemas = save.cinemas ?? cinemas;
    ends = save.ends ?? ends;

    clickerPrice = save.clickerPrice ?? clickerPrice;
    handPrice = save.handPrice ?? handPrice;
    moaiPrice = save.moaiPrice ?? moaiPrice;
    prophecyPrice = save.prophecyPrice ?? prophecyPrice;
    titanicPrice = save.titanicPrice ?? titanicPrice;
    cookiePrice = save.cookiePrice ?? cookiePrice;
    cinemaPrice = save.cinemaPrice ?? cinemaPrice;
    endPrice = save.endPrice ?? endPrice;

}

// ===============================
// RESET
// ===============================

resetProgress.onclick = () => {

    localStorage.removeItem("buttonPressSave");
    location.reload();

};

resetAll.onclick = () => {

    localStorage.clear();
    location.reload();

};

// ===============================
// UPDATE
// ===============================

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
    endPriceText.textContent = endPrice;

    speedStatus.textContent =
        speedActive ? "⚡ " + speedTime + "s" : "Ready";

    clickStatus.textContent =
        clickGearActive ? "💥 " + clickGearTime + "s" : "Ready";

    incomeStatus.textContent =
        incomeActive ? "💰 " + incomeTime + "s" : "Ready";

    rainbowStatus.textContent =
        rainbowActive ? "🌈 " + rainbowTime + "s" : "Ready";

    if (ends >= 1) {
        buyEnd.disabled = true;
        buyEnd.textContent = "MAXED";
    }

}

update();