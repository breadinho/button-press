let clicks = 0;

let clickPower = 1;

let clickers = 0;
let hands = 0;


let clickerPrice = 10;
let handPrice = 50;



const clicksText = document.getElementById("clicks");

const button = document.getElementById("mainButton");


const clickerText = document.getElementById("clickers");
const handText = document.getElementById("hands");


const clickerPriceText =
document.getElementById("clickerPrice");

const handPriceText =
document.getElementById("handPrice");



// Main button

button.onclick = function(){

    clicks += clickPower;

    update();

};



// Buy clicker

document.getElementById("buyClicker").onclick = function(){

    if(clicks >= clickerPrice){

        clicks -= clickerPrice;

        clickers++;

        clickerPrice = Math.floor(clickerPrice * 1.25);

        update();

    }

};



// Buy hand

document.getElementById("buyHand").onclick = function(){

    if(clicks >= handPrice){

        clicks -= handPrice;

        hands++;

        clickPower += 2;

        handPrice = Math.floor(handPrice * 1.25);

        update();

    }

};



// Auto clickers

setInterval(function(){

    clicks += clickers;

    update();

},1000);




// Update screen

function update(){

    clicksText.textContent = clicks;

    clickerText.textContent = clickers;

    handText.textContent = hands;

    clickerPriceText.textContent = clickerPrice;

    handPriceText.textContent = handPrice;

}