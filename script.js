// ======================================
// BUTTON PRESS v4.0
// Part 1 - Variables & DOM
// ======================================

// ---------- Currency ----------

let clicks = 0;
let clickPower = 1;

const PRICE_CAP = 500000;

// ---------- Statistics ----------

let buttonClicks = 0;
let autoClicks = 0;
let itemsBought = 0;
let totalSpent = 0;
let highestCPS = 0;
let gearsUsed = 0;
let timesSaved = 0;

// ---------- Shop ----------

let clickers = 0;
let hands = 0;
let moais = 0;
let prophecies = 0;
let titanics = 0;
let cookies = 0;
let cinemas = 0;
let ends = 0;

// ---------- Prices ----------

let clickerPrice = 10;
let handPrice = 50;
let moaiPrice = 1000;
let prophecyPrice = 10000;
let titanicPrice = 25000;
let cookiePrice = 100000;
let cinemaPrice = 175000;
let endPrice = 100000000;

// ---------- Discount Shop ----------

const tapesPrice = 7500;
const dogPrice = 60000;
const gamblingPrice = 25000;

let tapesOwned = 0;
let dogOwned = 0;

let tapesCharges = 0;
let dogCharges = 0;

let gamblingDiscount = 0;
let gamblingActive = false;

// ---------- Gears ----------

const speedPrice = 5000;
const clickGearPrice = 5000;
const incomePrice = 10000;
const rainbowPrice = 50000;

let speedActive = false;
let clickGearActive = false;
let incomeActive = false;
let rainbowActive = false;

let speedTime = 0;
let clickGearTime = 0;
let incomeTime = 0;
let rainbowTime = 0;

// ---------- Settings ----------

let stackFloating = false;

// ---------- DOM ----------

// Main

const mainButton = document.getElementById("mainButton");
const clicksText = document.getElementById("clicks");

// Save

const saveGame = document.getElementById("saveGame");
const resetProgress = document.getElementById("resetProgress");
const resetAll = document.getElementById("resetAll");

// Shop Buttons

const buyClicker = document.getElementById("buyClicker");
const buyHand = document.getElementById("buyHand");
const buyMoai = document.getElementById("buyMoai");
const buyProphecy = document.getElementById("buyProphecy");
const buyTitanic = document.getElementById("buyTitanic");
const buyCookie = document.getElementById("buyCookie");
const buyCinema = document.getElementById("buyCinema");
const buyEnd = document.getElementById("buyEnd");

// Discount Buttons

const buyTapes = document.getElementById("buyTapes");
const buyDog = document.getElementById("buyDog");
const buyGambling = document.getElementById("buyGambling");

// Gear Buttons

const buySpeed = document.getElementById("buySpeed");
const buyClickGear = document.getElementById("buyClickGear");
const buyIncome = document.getElementById("buyIncome");
const buyRainbow = document.getElementById("buyRainbow");

// Settings

const stackFloatingClicks =
    document.getElementById("stackFloatingClicks");

// Win Screen

const winScreen = document.getElementById("winScreen");
const continueButton =
    document.getElementById("continueButton");

// Shop Counters

const clickersText = document.getElementById("clickers");
const handsText = document.getElementById("hands");
const moaisText = document.getElementById("moais");
const propheciesText =
    document.getElementById("prophecies");
const titanicsText =
    document.getElementById("titanics");
const cookiesText = document.getElementById("cookies");
const cinemasText = document.getElementById("cinemas");
const endsText = document.getElementById("ends");

// Statistics

const statClicks =
    document.getElementById("statClicks");

const buttonClicksText =
    document.getElementById("buttonClicks");

const autoClicksText =
    document.getElementById("autoClicks");

const itemsBoughtText =
    document.getElementById("itemsBought");

const totalSpentText =
    document.getElementById("totalSpent");

const highestCPSText =
    document.getElementById("highestCPS");

const gearsUsedText =
    document.getElementById("gearsUsed");

const timesSavedText =
    document.getElementById("timesSaved");

const completedText =
    document.getElementById("gameCompleted");
// ======================================
// BUTTON PRESS v4.0
// Part 2 - Main Button & Effects
// ======================================

// ---------- Floating Click Variables ----------

let floatingValue = 0;
let floatingResetTimer = null;

// ---------- Settings ----------

if (stackFloatingClicks) {

    stackFloatingClicks.onchange = () => {

        stackFloating = stackFloatingClicks.checked;

    };

}

// ---------- Floating Text ----------

function spawnFloatingText(x, y, amount) {

    const text = document.createElement("div");

    text.className = "floatingClicks";

    if (stackFloating) {

        floatingValue += amount;
        text.textContent = "+" + floatingValue;

    } else {

        floatingValue = 0;
        text.textContent = "+" + amount;

    }

    if (stackFloating) {

    clearTimeout(floatingResetTimer);

    floatingResetTimer = setTimeout(() => {

        floatingValue = 0;

    }, 1000);

}

    text.style.left = x + "px";
    text.style.top = y + "px";

    document.body.appendChild(text);

    setTimeout(() => {

        text.remove();

    }, 900);

}

// ---------- Explosion Effect ----------

function spawnBoostEffect(x, y) {

    const effect = document.createElement("div");

    effect.className = "effect";

    if (Math.random() < 0.55) {

        effect.textContent = "💥";

    } else {

        effect.textContent = "💢";

    }

    effect.style.left = x + "px";
    effect.style.top = y + "px";

    document.body.appendChild(effect);

    setTimeout(() => {

        effect.remove();

    }, 800);

}

// ---------- Main Button ----------

mainButton.onclick = (e) => {

    let gain = clickPower;

    if (clickGearActive)
        gain *= 2;

    if (incomeActive)
        gain *= 2;

    if (rainbowActive)
        gain *= 5;

    clicks += gain;

    buttonClicks++;

    spawnFloatingText(
        e.clientX,
        e.clientY - 20,
        gain
    );

    if (clickGearActive || incomeActive) {

        spawnBoostEffect(
            e.clientX,
            e.clientY
        );

    }

    update();

};
// ======================================
// BUTTON PRESS v4.0
// Part 3 - Shop
// ======================================

// ---------- Helper ----------

function buyNormalItem(price, onBuy, multiplier) {

    if (clicks < price)
        return price;

    clicks -= price;

    totalSpent += price;
    itemsBought++;

    onBuy();

    price = Math.min(
        Math.floor(price * multiplier),
        PRICE_CAP
    );

    update();

    return price;

}

// ---------- Clicker ----------

buyClicker.onclick = () => {

    clickerPrice = buyNormalItem(

        clickerPrice,

        () => {

            clickers++;

        },

        1.25

    );

};

// ---------- Hand ----------

buyHand.onclick = () => {

    handPrice = buyNormalItem(

        handPrice,

        () => {

            hands++;
            clickPower += 2;

        },

        1.25

    );

};

// ---------- MOAI ----------

buyMoai.onclick = () => {

    moaiPrice = buyNormalItem(

        moaiPrice,

        () => {

            moais++;

        },

        1.15

    );

};

// ---------- Prophecy ----------

buyProphecy.onclick = () => {

    prophecyPrice = buyNormalItem(

        prophecyPrice,

        () => {

            prophecies++;
            clickPower += 50;

        },

        1.15

    );

};

// ---------- Titanic ----------

buyTitanic.onclick = () => {

    titanicPrice = buyNormalItem(

        titanicPrice,

        () => {

            titanics++;

        },

        1.125

    );

};

// ---------- Cookie ----------

buyCookie.onclick = () => {

    cookiePrice = buyNormalItem(

        cookiePrice,

        () => {

            cookies++;
            clickPower += 1000;

        },

        1.075

    );

};

// ---------- Absolute Cinema ----------

buyCinema.onclick = () => {

    cinemaPrice = buyNormalItem(

        cinemaPrice,

        () => {

            cinemas++;

        },

        1.035

    );

};

// ---------- The End ----------

buyEnd.onclick = () => {

    if (ends >= 1)
        return;

    if (clicks < endPrice)
        return;

    clicks -= endPrice;

    totalSpent += endPrice;

    ends = 1;

    if (winScreen)
        winScreen.style.display = "flex";

    update();

};

continueButton.onclick = () => {

    if (winScreen)
        winScreen.style.display = "none";

};
// ======================================
// BUTTON PRESS v4.0
// Part 4 - Discount Shop
// ======================================

// ---------- Get Discount ----------

function getDiscountMultiplier() {

    // 📼 Tapes
    if (tapesCharges > 0) {

        tapesCharges--;

        return 0.85;

    }

    // 🐶 Discount Dog
    if (dogCharges > 0) {

        dogCharges--;

        return 0.60;

    }

    // 🎲 Gambling
    if (gamblingActive) {

        gamblingActive = false;

        return (100 - gamblingDiscount) / 100;

    }

    return 1;

}

// ---------- Buy Tapes ----------

buyTapes.onclick = () => {

    if (clicks < tapesPrice)
        return;

    clicks -= tapesPrice;

    totalSpent += tapesPrice;

    tapesOwned++;

    tapesCharges = 1;

    update();

};

// ---------- Buy Dog ----------

buyDog.onclick = () => {

    if (clicks < dogPrice)
        return;

    clicks -= dogPrice;

    totalSpent += dogPrice;

    dogOwned++;

    dogCharges += 3;

    update();

};

// ---------- Gambling ----------

buyGambling.onclick = () => {

    if (clicks < gamblingPrice)
        return;

    clicks -= gamblingPrice;

    totalSpent += gamblingPrice;

    gamblingDiscount =
        Math.floor(Math.random() * 86) + 15;

    gamblingActive = true;

    alert(
        "🎲 You rolled " +
        gamblingDiscount +
        "% OFF!\n\nYour next SHOP item is discounted!"
    );

    update();

};

// ======================================
// Replace buyNormalItem()
// with this one!
// ======================================

function buyNormalItem(price, onBuy, multiplier) {

    if (clicks < price)
        return price;

    let discount = getDiscountMultiplier();

    let finalPrice =
        Math.floor(price * discount);

    if (clicks < finalPrice)
        return price;

    clicks -= finalPrice;

    totalSpent += finalPrice;

    itemsBought++;

    onBuy();

    price = Math.min(

        Math.floor(price * multiplier),

        PRICE_CAP

    );

    update();

    return price;

}
// ======================================
// BUTTON PRESS v4.0
// Part 5 - Gears & Auto Income
// ======================================

// ---------- Speed ----------

buySpeed.onclick = () => {

    if (clicks < speedPrice) return;

    clicks -= speedPrice;
    totalSpent += speedPrice;

    speedActive = true;
    speedTime = 15;

    gearsUsed++;

    update();

};

// ---------- x2 Click ----------

buyClickGear.onclick = () => {

    if (clicks < clickGearPrice) return;

    clicks -= clickGearPrice;
    totalSpent += clickGearPrice;

    clickGearActive = true;
    clickGearTime = 15;

    gearsUsed++;

    update();

};

// ---------- x2 Money ----------

buyIncome.onclick = () => {

    if (clicks < incomePrice) return;

    clicks -= incomePrice;
    totalSpent += incomePrice;

    incomeActive = true;
    incomeTime = 15;

    gearsUsed++;

    update();

};

// ---------- Rainbow ----------

buyRainbow.onclick = () => {

    if (clicks < rainbowPrice) return;

    clicks -= rainbowPrice;
    totalSpent += rainbowPrice;

    rainbowActive = true;
    rainbowTime = 10;

    gearsUsed++;

    mainButton.classList.add("rainbowButton");

    update();

};

// ======================================
// AUTO INCOME
// ======================================

setInterval(() => {

    let cps = 0;

    cps += clickers;
    cps += moais * 10;
    cps += titanics * 100;
    cps += cinemas * 1500;

    if (speedActive)
        cps *= 2;

    if (incomeActive)
        cps *= 2;

    if (rainbowActive)
        cps *= 5;

    if (cps > highestCPS)
        highestCPS = cps;

    clicks += cps / 10;

    autoClicks += cps / 10;

    update();

}, 100);

// ======================================
// TIMERS
// ======================================

setInterval(() => {

    if (speedActive) {

        speedTime--;

        if (speedTime <= 0)
            speedActive = false;

    }

    if (clickGearActive) {

        clickGearTime--;

        if (clickGearTime <= 0)
            clickGearActive = false;

    }

    if (incomeActive) {

        incomeTime--;

        if (incomeTime <= 0)
            incomeActive = false;

    }

    if (rainbowActive) {

        rainbowTime--;

        if (rainbowTime <= 0) {

            rainbowActive = false;

            mainButton.classList.remove(
                "rainbowButton"
            );

        }

    }

    update();

}, 1000);
// ======================================
// BUTTON PRESS v4.0
// Part 6 - Save / Load / Update
// ======================================

// ---------- SAVE ----------

saveGame.onclick = () => {

    const data = {

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

        buttonClicks,
        autoClicks,
        itemsBought,
        totalSpent,
        highestCPS,
        gearsUsed,
        timesSaved,

        tapesOwned,
        dogOwned,

        tapesCharges,
        dogCharges,

        gamblingDiscount,
        gamblingActive,

        stackFloating

    };

    localStorage.setItem(
        "buttonPressSave",
        JSON.stringify(data)
    );

    timesSaved++;

    update();

    alert("💾 Game Saved!");

};

// ---------- LOAD ----------

(function loadGame() {

    const save =
        localStorage.getItem("buttonPressSave");

    if (!save) {

        update();
        return;

    }

    const data = JSON.parse(save);

    Object.assign(window, data);

    // Manual restore

    clicks = data.clicks ?? 0;
    clickPower = data.clickPower ?? 1;

    clickers = data.clickers ?? 0;
    hands = data.hands ?? 0;
    moais = data.moais ?? 0;
    prophecies = data.prophecies ?? 0;
    titanics = data.titanics ?? 0;
    cookies = data.cookies ?? 0;
    cinemas = data.cinemas ?? 0;
    ends = data.ends ?? 0;

    clickerPrice = data.clickerPrice ?? 10;
    handPrice = data.handPrice ?? 50;
    moaiPrice = data.moaiPrice ?? 1000;
    prophecyPrice = data.prophecyPrice ?? 10000;
    titanicPrice = data.titanicPrice ?? 25000;
    cookiePrice = data.cookiePrice ?? 100000;
    cinemaPrice = data.cinemaPrice ?? 175000;

    buttonClicks = data.buttonClicks ?? 0;
    autoClicks = data.autoClicks ?? 0;
    itemsBought = data.itemsBought ?? 0;
    totalSpent = data.totalSpent ?? 0;
    highestCPS = data.highestCPS ?? 0;
    gearsUsed = data.gearsUsed ?? 0;
    timesSaved = data.timesSaved ?? 0;

    tapesOwned = data.tapesOwned ?? 0;
    dogOwned = data.dogOwned ?? 0;

    tapesCharges = data.tapesCharges ?? 0;
    dogCharges = data.dogCharges ?? 0;

    gamblingDiscount =
        data.gamblingDiscount ?? 0;

    gamblingActive =
        data.gamblingActive ?? false;

    stackFloating =
        data.stackFloating ?? false;

    if (stackFloatingClicks)
        stackFloatingClicks.checked =
            stackFloating;

    update();

})();

// ---------- RESET ----------

resetProgress.onclick = () => {

    if (!confirm("Reset progress?"))
        return;

    localStorage.removeItem("buttonPressSave");

    location.reload();

};

resetAll.onclick = () => {

    if (!confirm("Delete EVERYTHING?"))
        return;

    localStorage.clear();

    location.reload();

};

// ---------- UPDATE ----------

function update() {

    if (clicksText)
        clicksText.textContent =
            Math.floor(clicks);

    if (statClicks)
        statClicks.textContent =
            Math.floor(clicks);

    if (buttonClicksText)
        buttonClicksText.textContent =
            buttonClicks;

    if (autoClicksText)
        autoClicksText.textContent =
            Math.floor(autoClicks);

    if (itemsBoughtText)
        itemsBoughtText.textContent =
            itemsBought;

    if (totalSpentText)
        totalSpentText.textContent =
            Math.floor(totalSpent);

    if (highestCPSText)
        highestCPSText.textContent =
            Math.floor(highestCPS);

    if (gearsUsedText)
        gearsUsedText.textContent =
            gearsUsed;

    if (timesSavedText)
        timesSavedText.textContent =
            timesSaved;

    if (completedText)
        completedText.textContent =
            ends ? "YES" : "NO";

    if (clickersText)
        clickersText.textContent =
            clickers;

    if (handsText)
        handsText.textContent =
            hands;

    if (moaisText)
        moaisText.textContent =
            moais;

    if (propheciesText)
        propheciesText.textContent =
            prophecies;

    if (titanicsText)
        titanicsText.textContent =
            titanics;

    if (cookiesText)
        cookiesText.textContent =
            cookies;

    if (cinemasText)
        cinemasText.textContent =
            cinemas;

    if (endsText)
        endsText.textContent =
            ends;

    // Prices

    document.getElementById("clickerPrice").textContent = Math.floor(clickerPrice);
    document.getElementById("handPrice").textContent = Math.floor(handPrice);
    document.getElementById("moaiPrice").textContent = Math.floor(moaiPrice);
    document.getElementById("prophecyPrice").textContent = Math.floor(prophecyPrice);
    document.getElementById("titanicPrice").textContent = Math.floor(titanicPrice);
    document.getElementById("cookiePrice").textContent = Math.floor(cookiePrice);
    document.getElementById("cinemaPrice").textContent = Math.floor(cinemaPrice);

    // Discount status

    const gamble =
        document.getElementById("gamblingStatus");

    if (gamble) {

        gamble.textContent =
            gamblingActive
            ? gamblingDiscount + "% OFF"
            : "None";

    }

    const tapes =
        document.getElementById("tapesOwned");

    if (tapes)
        tapes.textContent = tapesOwned;

    const dog =
        document.getElementById("dogOwned");

    if (dog)
        dog.textContent = dogOwned;

    // Gear status

    if (document.getElementById("speedStatus"))
        document.getElementById("speedStatus").textContent =
            speedActive
            ? speedTime + "s"
            : "Ready";

    if (document.getElementById("clickGearStatus"))
        document.getElementById("clickGearStatus").textContent =
            clickGearActive
            ? clickGearTime + "s"
            : "Ready";

    if (document.getElementById("incomeStatus"))
        document.getElementById("incomeStatus").textContent =
            incomeActive
            ? incomeTime + "s"
            : "Ready";

    if (document.getElementById("rainbowStatus"))
        document.getElementById("rainbowStatus").textContent =
            rainbowActive
            ? rainbowTime + "s"
            : "Ready";

}

update();