
const espresso = document.getElementById("Espresso");
const cappuccino = document.getElementById("Cappuccino");
const cold = document.getElementById("Cold");
const signature = document.getElementById("Signature");
const myList = document.getElementById("myList");
const reserve = document.getElementById("reserve");

const espressoList = [
    "Espresso - $2.50",
    "Double Espresso - $3.50",
    "Macchiato - $3.00",
    "Americano - $3.00",
    "Luscious Lattes - $4.50"
];
const cappuccinoList = [
    "Cappuccino - $4.00",
    "Caramel Latte - $4.50",
    "Vanilla Latte - $4.50",
    "Mocha Latte - $4.50",
    "Choco Cappuccino - $4.00"
];
const coldList = [
    "Cold Brew - $4.50",
    "Nitro Coffee - $4.00",
    "Chai Latte - $4.50",
    "Matcha Latte - $3.50",
    "Specialty Brews - $4.00",

];
const signatureList = [
    "Aroma Haven House Blend - $5.00",
    "Honey Almond Bliss - $6.00",
    "Iced Salted Caramel Latte - $8.00",
    "Hazelnut Delight - $8.00",
    "Signature Sips - $7.00"
];

espresso.addEventListener("click", function () {
    var i = 0;
    myList.querySelectorAll("li").forEach(function (item) {
        const id = item.getAttribute("id");
        if (id === "li1") {
            item.innerText = espressoList[i];
            i++;
        }
    });
});
cappuccino.addEventListener("click", function () {
    var i = 0;
    myList.querySelectorAll("li").forEach(function (item) {
        const id = item.getAttribute("id");
        if (id === "li1") {
            item.innerText = cappuccinoList[i];
            i++;
        }
    });
});
cold.addEventListener("click", function () {
    var i = 0;
    myList.querySelectorAll("li").forEach(function (item) {
        const id = item.getAttribute("id");
        if (id === "li1") {
            item.innerText = coldList[i];
            i++;
        }
    });
});
signature.addEventListener("click", function () {
    var i = 0;
    myList.querySelectorAll("li").forEach(function (item) {
        const id = item.getAttribute("id");
        if (id === "li1") {
            item.innerText = signatureList[i];
            i++;
        }
    });
});
reserve.addEventListener("click", function () {
    document.getElementById("reservation-form").reset();
});