const click = document.getElementById("click");
const number = document.getElementById("number");

const labor = document.getElementById("labor");
const slaveshopamt = document.getElementById("laborshopamt");
const laborprice = document.getElementById("laborprice")

const child = document.getElementById("child");
const childshopamt = document.getElementById("childshopamt");
const childprice = document.getElementById("childprice");
const childtext = document.getElementById("childtext");

const clanker = document.getElementById("clanker");
const clankershopamt = document.getElementById("clankershopamt");
const clankerprice = document.getElementById("clankerprice");

const diabetes = document.getElementById("diabetes");
const diabetesshopamt = document.getElementById("diabetesshopamt");
const diabetesprice = document.getElementById("diabetesprice");

const secretbutton = document.getElementById("secretbutton");

let count = 0
let Lamt = 0
let Camt = 0
let Clamt = 0
let Damt = 0

let priceoflabor = 50
let priceofchild = 10
let priceofclanker = 100
let priceofdiabetes = 500

function clickButton() {
    if (Damt >= 1) {
        count += Damt * 2;
        number.textContent = Math.floor(count);
    } else {
    count += 1;
    number.textContent = Math.floor(count); }
};
click.addEventListener("click", clickButton);

function clickSecretButton() {
    count += 100000000000
    number.textContent = Math.floor(count);
};
secretbutton.addEventListener("click", clickSecretButton);

function buyChildren() {
    if(count >= priceofchild) {
        Camt += 1;
        childshopamt.textContent = Camt;
        count -= priceofchild;
        document.getElementById("childprice").textContent = priceofchild;
    } else {

    }
}
child.addEventListener("click", buyChildren);

function buyLaborers() {

    if (count >= priceoflabor) {
    Lamt += 1; 
    laborshopamt.textContent = Lamt;
    count -= priceoflabor;
    document.getElementById("laborprice").textContent = priceoflabor;
    } else {

    }
};
labor.addEventListener("click", buyLaborers);

function buyClankers() {

    if (count >= priceofclanker) {
    Clamt += 1; 
    clankershopamt.textContent = Clamt;
    count -= priceofclanker;
    document.getElementById("clankerprice").textContent = priceofclanker;
    } else {

    }
};
clanker.addEventListener("click", buyClankers);

function buyDiabetes() {

    if (count >= priceofdiabetes) {
        Damt += 1;
        diabetesshopamt.textContent = Damt;
        count -= priceofdiabetes;
        document.getElementById("diabetesprice").textContent = priceofdiabetes;
    } else {

    }
};
diabetes.addEventListener("click", buyDiabetes)

function autoChild() {
    count += Camt * 0.005;
    number.textContent = Math.floor(count);
}

function autoLabor() {
    count += Lamt * 0.02;
    number.textContent = Math.floor(count);
}

function autoClanker() {
    count += Clamt * 0.05;
    number.textContent = Math.floor(count);
}

function updateShop() {
    if (count >= priceofchild) {
        child.style.opacity = "1";
    } else {
        child.style.opacity = "0.5";
    }
    if (count >= priceoflabor) {
        labor.style.opacity = "1";
    } else {
        labor.style.opacity = "0.5";
    }
    if (count >= priceofclanker) {
        clanker.style.opacity = "1";
    } else {
        clanker.style.opacity = "0.5";
    }
    if (count >= priceofdiabetes) {
        diabetes.style.opacity = "1";
    } else {
        diabetes.style.opacity = "0.5";
    }
}

setInterval(updateShop, 10);
setInterval(autoChild, 10);
setInterval(autoLabor, 10);
setInterval(autoClanker, 10);