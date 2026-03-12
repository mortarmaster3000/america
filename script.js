const click = document.getElementById("click");
const number = document.getElementById("number");
const rate = document.getElementById("rate");

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

const nuclear = document.getElementById("nuclear");
const nuclearshopamt = document.getElementById("nuclearshopamt");
const nuclearprice = document.getElementById("nuclearprice");

const cyber = document.getElementById("cyber");
const cybershopamt = document.getElementById("cybershopamt");
const cyberprice = document.getElementById("cyberprice");

const secretbutton = document.getElementById("secretbutton");

const upgradesPanel = document.getElementById("upgrades-panel");
const upgradesToggle = document.getElementById("upgrades-toggle");

const lsd = document.getElementById("lsd");
const lsdprice = document.getElementById("lsdprice");

const threat = document.getElementById("threat");
const threatprice = document.getElementById("threatprice");

const generator = document.getElementById("generator");
const generatorprice = document.getElementById("generatorprice");

const fusion = document.getElementById("fusion");
const fusionprice = document.getElementById("fusionprice");

const oil = document.getElementById("oil");
const oilprice = document.getElementById("oilprice");

const whips = document.getElementById("whips");
const whipsprice = document.getElementById("whipsprice")

upgradesToggle.addEventListener("click", () => {
    upgradesPanel.classList.toggle("open");
    upgradesToggle.textContent = "Upgrades";
});



let count = 0
let Lamt = 0
let Camt = 0
let Clamt = 0
let Damt = 0
let Namt = 0
let Cyamt = 0

let childMultiply = 0
let laborMultiply = 0
let clankerMultiply = 0
let diabetesMultiply = 0
let nuclearMultiply = 0
let cyberMultiply = 0

let priceofchild = 10
let priceoflsd = 100
let priceofwhips = 750
let priceoflabor = 50
let priceofthreat = 250
let priceofclanker = 125
let priceofgenerator = 500
let priceofdiabetes = 500
let priceofnuclear = 750
let priceoffusion = 1500
let priceofcyber = 1250
let priceofoil = 2250

let childmoney = 0.005
let labormoney = 0.02
let clankermoney = 0.05
let nuclearmoney = 0.15
let cybermoney = 0.25

let childlsd = 1
let childlaborwhips = 1
let laborthreat = 1
let clankergenerator = 1
let nuclearfusion = 1
let cyberoil = 1


let childrate = 0
let laborrate = 0
let clankerrate = 0
let nuclearrate = 0
let cyberrate = 0


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

        if (Camt < 5) {
            childMultiply = 1.55;
        } else if (Camt < 10) {
            childMultiply = 1.3;
        } else if (Camt < 15) {
            childMultiply = 1.2
        } else if (Camt < 20) {
            childMultiply = 1.1
        } else if (Camt < 25) {
            childMultiply = 1.05
        } else if (Camt > 50) {
            childMultiply = 1.02
        } else if (Camt > 75) {
            childMultiply = 1.01
        } else if (Camt > 100) {
            childMultiply = 1.05
        } else if (Camt > 125) {
            childMultiply = 1.02
        }
         else if (Camt > 150) {
            childMultiply = 1.001
        }

        priceofchild = Math.floor(priceofchild * childMultiply);
        childprice.textContent = priceofchild;
        childrate = .5 * childlsd
    } else {

    }
}
child.addEventListener("click", buyChildren);

function buyLSD() {
    if (count >= priceoflsd) {
        childmoney = childmoney * 1.5;
        count -= priceoflsd;
        lsd.style.opacity = "0.5";
        lsd.disabled = true;
        lsd.style.display = "none";
    }
}
lsd.addEventListener("click", buyLSD);

function buyWhips() {
    if (count >= priceofwhips) {
        childmoney = childmoney * 2;
        count -= priceofwhips;
        whips.style.opacity = "0.5";
        whips.disabled = true;
        whips.style.display = "none";
    }
}
whips.addEventListener("click", buyWhips);


function buyLaborers() {

    if (count >= priceoflabor) {
    Lamt += 1; 
    laborshopamt.textContent = Lamt;
    count -= priceoflabor;
    document.getElementById("laborprice").textContent = priceoflabor;

    if (Lamt < 5) {
        laborMultiply = 1.55;
    } else if (Lamt < 10) {
        laborMultiply = 1.3;
    } else if (Lamt < 15) {
        laborMultiply = 1.2
    } else if (Lamt < 20) {
        laborMultiply = 1.1
    } else if (Lamt < 25) {
        laborMultiply = 1.05
    } else if (Lamt > 50) {
        laborMultiply = 1.02
    } else if (Lamt > 75) {
        laborMultiply = 1.01
    } else if (Lamt > 100) {
        laborMultiply = 1.05
    } else if (Lamt > 125) {
        laborMultiply = 1.02
    }
     else if (Lamt > 150) {
        laborMultiply = 1.001
    }
    priceoflabor = Math.floor(priceoflabor * laborMultiply);
    laborprice.textContent = priceoflabor;
    laborrate = 2 * laborthreat
    } else {

    }
};
labor.addEventListener("click", buyLaborers);

function buyThreat() {
    if (count >= priceofthreat) {
        labormoney = labormoney * 1.5;
        count -= priceofthreat;
        threat.style.opacity = "0.5";
        threat.disabled = true;
        threat.style.display = "none";
    }
}
threat.addEventListener("click", buyThreat);

function buyClankers() {

    if (count >= priceofclanker) {
    Clamt += 1; 
    clankershopamt.textContent = Clamt;
    count -= priceofclanker;
    document.getElementById("clankerprice").textContent = priceofclanker;

    if (Clamt < 5) {
        clankerMultiply = 1.55;
    } else if (Clamt < 10) {
        clankerMultiply = 1.3;
    } else if (Clamt < 15) {
        clankerMultiply = 1.2
    } else if (Clamt < 20) {
        clankerMultiply = 1.1
    } else if (Clamt < 25) {
        clankerMultiply = 1.05
    } else if (Clamt > 50) {
        clankerMultiply = 1.02
    } else if (Clamt > 75) {
        clankerMultiply = 1.01
    } else if (Clamt > 100) {
        clankerMultiply = 1.05
    } else if (Clamt > 125) {
        clankerMultiply = 1.02
    }
     else if (Clamt > 150) {
        clankerMultiply = 1.001
    }
    priceofclanker = Math.floor(priceofclanker * clankerMultiply);
    clankerprice.textContent = priceofclanker;
    } else {

    }
};
clanker.addEventListener("click", buyClankers);

function buyGenerator() {
    if (count >= priceofgenerator) {
        clankermoney = clankermoney * 1.5;
        count -= priceofgenerator;
        generator.style.opacity = "0.5";
        generator.disabled = true;
        generator.style.display = "none";
    }
}
generator.addEventListener("click", buyGenerator);

function buyDiabetes() {

    if (count >= priceofdiabetes) {
        Damt += 1;
        diabetesshopamt.textContent = Damt;
        count -= priceofdiabetes;
        document.getElementById("diabetesprice").textContent = priceofdiabetes;

        if (Damt < 5) {
            diabetesMultiply = 1.55;
        } else if (Damt < 10) {
            diabetesMultiply = 1.3;
        } else if (Damt < 15) {
            diabetesMultiply = 1.2
        } else if (Damt < 20) {
            diabetesMultiply = 1.1
        } else if (Damt < 25) {
            diabetesMultiply = 1.05
        } else if (Damt > 50) {
            diabetesMultiply = 1.02
        } else if (Damt > 75) {
            diabetesMultiply = 1.01
        } else if (Damt > 100) {
            diabetesMultiply = 1.05
        } else if (Damt > 125) {
            diabetesMultiply = 1.02
        }
         else if (Damt > 150) {
            diabetesMultiply = 1.001
        }
        priceofdiabetes = Math.floor(priceofdiabetes * diabetesMultiply);
    diabetesprice.textContent = priceofdiabetes;
    } else {

    }
};
diabetes.addEventListener("click", buyDiabetes)

function buyNuclear() {

    if (count >= priceofnuclear) {
    Namt += 1; 
    nuclearshopamt.textContent = Namt;
    count -= priceofnuclear;
    document.getElementById("nuclearprice").textContent = priceofnuclear;

    if (Namt < 5) {
        nuclearMultiply = 1.55;
    } else if (Namt < 10) {
        nuclearMultiply = 1.3;
    } else if (Namt < 15) {
        nuclearMultiply = 1.2
    } else if (Namt < 20) {
        nuclearMultiply = 1.1
    } else if (Namt < 25) {
        nuclearMultiply = 1.05
    } else if (Namt > 50) {
        nuclearMultiply = 1.02
    } else if (Namt > 75) {
        nuclearMultiply = 1.01
    } else if (Namt > 100) {
        nuclearMultiply = 1.05
    } else if (Namt > 125) {
        nuclearMultiply = 1.02
    }
     else if (Namt > 150) {
        nuclearMultiply = 1.001
    }
    priceofnuclear = Math.floor(priceofnuclear * nuclearMultiply);
    nuclearprice.textContent = priceofnuclear;
    } else {

    }
};
nuclear.addEventListener("click", buyNuclear);

function buyFusion() {
    if (count >= priceoffusion) {
        nuclearmoney = nuclearmoney * 1.5;
        count -= priceoffusion;
        fusion.style.opacity = "0.5";
        fusion.disabled = true;
        fusion.style.display = "none";
    }
}
fusion.addEventListener("click", buyFusion);

function buyCyberTrump() {

    if (count >= priceofcyber) {
    Cyamt += 1; 
    cybershopamt.textContent = Cyamt;
    count -= priceofcyber;
    document.getElementById("cyberprice").textContent = priceofcyber;

    if (Cyamt < 5) {
        cyberMultiply = 1.55;
    } else if (Cyamt < 10) {
        cyberMultiply = 1.3;
    } else if (Cyamt < 15) {
        cyberMultiply = 1.2
    } else if (Cyamt < 20) {
        cyberMultiply = 1.1
    } else if (Cyamt < 25) {
        cyberMultiply = 1.05
    } else if (Cyamt > 50) {
        cyberMultiply = 1.02
    } else if (Cyamt > 75) {
        cyberMultiply = 1.01
    } else if (Cyamt > 100) {
        cyberMultiply = 1.05
    } else if (Cyamt > 125) {
        cyberMultiply = 1.02
    }
     else if (Cyamt > 150) {
        cyberMultiply = 1.001
    }
    priceofcyber = Math.floor(priceofcyber * cyberMultiply);
    cyberprice.textContent = priceofcyber;
    } else {

    }
};
cyber.addEventListener("click", buyCyberTrump);

function buyOil() {
    if (count >= priceofoil) {
        cybermoney = cybermoney * 1.5;
        count -= priceofoil;
        oil.style.opacity = "0.5";
        oil.disabled = true;
        oil.style.display = "none";
    }
}
oil.addEventListener("click", buyOil);

function autoChild() {
    count += Camt * childmoney;
    number.textContent = Math.floor(count);
}

function autoLabor() {
    count += Lamt * labormoney;
    number.textContent = Math.floor(count);
}

function autoClanker() {
    count += Clamt * clankermoney;
    number.textContent = Math.floor(count);
}

function autoNuclear() {
    count += Namt * nuclearmoney;
    number.textContent = Math.floor(count);
}

function autoCyber() {
    count += Cyamt * cybermoney;
    number.textContent = Math.floor(count);
}

function updateRate() {
    const perSecond = (Camt * childmoney * 100) + (Lamt * labormoney * 100) + (Clamt * clankermoney * 100) + (Namt * nuclearmoney * 100) + (Cyamt * cybermoney * 100);
    rate.textContent = perSecond.toFixed(1);
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
    }     if (count >= priceofnuclear) {
        nuclear.style.opacity = "1";
    } else {
        nuclear.style.opacity = "0.5";
    }     if (count >= priceofcyber) {
        cyber.style.opacity = "1";
    } else {
        cyber.style.opacity = "0.5";
    }     if (count >= priceoflsd) {
        lsd.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        lsd.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofthreat) {
        threat.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        threat.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofgenerator) {
        generator.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        generator.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceoffusion) {
        fusion.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        fusion.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofoil) {
        oil.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        oil.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofwhips) {
        whips.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        whips.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    } 
    

    
};

setInterval(updateShop, 10);
setInterval(autoChild, 10);
setInterval(autoLabor, 10);
setInterval(autoClanker, 10);
setInterval(autoNuclear, 10);
setInterval(autoCyber, 10);
setInterval(updateRate, 10);