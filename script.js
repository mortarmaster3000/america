const click = document.getElementById("click");
const number = document.getElementById("number");

const slaves = document.getElementById("slaves");
const shopamt = document.getElementById("shopamt");

let count = 0
let amt = 0

function clickButton() {
    count += 1;
    number.textContent = Math.floor(count);
};
click.addEventListener("click", clickButton);


function buySlaves() {
    amt += 1; 
    shopamt.textContent = amt;
};
slaves.addEventListener("click", buySlaves);

function autoSlave() {
    count += amt * 0.01;
    number.textContent = Math.floor(count);
}

setInterval(autoSlave, 10);