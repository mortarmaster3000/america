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

const mcdonalds = document.getElementById("mcdonalds");
const mcdonaldsshopamt = document.getElementById("mcdonaldsshopamt");
const mcdonaldsprice = document.getElementById("mcdonaldsprice");

const diabetes = document.getElementById("diabetes");
const diabetesshopamt = document.getElementById("diabetesshopamt");
const diabetesprice = document.getElementById("diabetesprice");

const nuclear = document.getElementById("nuclear");
const nuclearshopamt = document.getElementById("nuclearshopamt");
const nuclearprice = document.getElementById("nuclearprice");

const cyber = document.getElementById("cyber");
const cybershopamt = document.getElementById("cybershopamt");
const cyberprice = document.getElementById("cyberprice");

const rdr = document.getElementById("rdr");
const rdrshopamt = document.getElementById("rdrshopamt");
const rdrprice = document.getElementById("rdrprice");

const secretbutton = document.getElementById("secretbutton");

const upgradesPanel = document.getElementById("upgrades-panel");
const upgradesToggle = document.getElementById("upgrades-toggle");

const lsd = document.getElementById("lsd");
const lsdprice = document.getElementById("lsdprice");

const whips = document.getElementById("whips");
const whipsprice = document.getElementById("whipsprice")

const candy = document.getElementById("candy");
const candyprice = document.getElementById("candyprice");

const threat = document.getElementById("threat");
const threatprice = document.getElementById("threatprice");

const hours = document.getElementById("hours");
const hoursprice = document.getElementById("hoursprice");

const law = document.getElementById("law");
const lawprice = document.getElementById("lawprice");

const generator = document.getElementById("generator");
const generatorprice = document.getElementById("generatorprice");

const data = document.getElementById("data");
const dataprice = document.getElementById("dataprice");

const seahorse = document.getElementById("seahorse");
const seahorseprice = document.getElementById("seahorseprice");

const health = document.getElementById("health");
const healthprice = document.getElementById("healthprice");

const drive = document.getElementById("drive");
const driveprice = document.getElementById("driveprice");

const play = document.getElementById("play");
const playprice = document.getElementById("playprice");

const vaccine = document.getElementById("vaccine");
const vaccineprice = document.getElementById("vaccineprice");

const type = document.getElementById("type");
const typeprice = document.getElementById("typeprice");

const nano = document.getElementById("nano");
const nanoprice = document.getElementById("nanoprice");

const fusion = document.getElementById("fusion");
const fusionprice = document.getElementById("fusionprice");

const nuke = document.getElementById("nuke");
const nukeprice = document.getElementById("nukeprice");

const quantum = document.getElementById("quantum");
const quantumprice = document.getElementById("quantumprice");

const oil = document.getElementById("oil");
const oilprice = document.getElementById("oilprice");

const jaw = document.getElementById("jaw");
const jawprice = document.getElementById("jawprice");

const cflag = document.getElementById("cflag");
const cflagprice = document.getElementById("cflagprice");

const dlc = document.getElementById("dlc");
const dlcprice = document.getElementById("dlcprice");

const anti = document.getElementById("anti");
const antiprice = document.getElementById("antiprice");

const mod = document.getElementById("mod");
const modprice = document.getElementById("modprice");

const tax = document.getElementById("tax");
const taxprice = document.getElementById("taxprice");

upgradesToggle.addEventListener("click", () => {
    upgradesPanel.classList.toggle("open");
    upgradesToggle.textContent = "Upgrades";
});



let count = 0
let Lamt = 0
let Camt = 0
let Clamt = 0
let Mamt = 0
let Damt = 0
let Namt = 0
let Cyamt = 0
let Ramt = 0

let childMultiply = 0
let laborMultiply = 0
let clankerMultiply = 0
let mcdonaldsMultiply = 0
let diabetesMultiply = 0
let nuclearMultiply = 0
let cyberMultiply = 0
let rdrMultiply = 0

let priceofchild = 10
let priceoflsd = 100
let priceofwhips = 300
let priceofcandy = 800

let priceoflabor = 50
let priceofthreat = 250
let priceofhours = 500
let priceoflaw = 950

let priceofclanker = 125
let priceofgenerator = 350
let priceofdata = 750
let priceofseahorse = 1000

let priceofmcdonalds = 250
let priceofhealth = 500
let priceofdrive = 850
let priceofplay = 1150

let priceofdiabetes = 500
let priceofvaccine = 850
let priceoftype = 1250
let priceofnano = 1750

let priceofnuclear = 750
let priceoffusion = 1250
let priceofnuke = 1750
let priceofquantum = 2250

let priceofcyber = 1250
let priceofoil = 1750
let priceofjaw = 2250
let priceofcflag = 3000

let priceofrdr = 2000
let priceofdlc = 2750
let priceofanti = 3500
let priceofmod = 4250

let priceoftax = 5000

let childmoney = 0.005
let labormoney = 0.02
let clankermoney = 0.05
let mcdonaldsmoney = 0.1
let nuclearmoney = 0.15
let cybermoney = 0.25
let rdrmoney = 0.50
let othermoney = childmoney + labormoney + clankermoney + mcdonaldsmoney + nuclearmoney + cybermoney + rdrmoney 


let childlsd = 1
let childlaborwhips = 1
let childcandy = 1

let laborthreat = 1
let laborhours = 1
let laborlaw = 1

let clankergenerator = 1
let clankerdata = 1
let clankerseahorse = 1

let mcdonaldshealth = 1
let mcdonaldsdrive = 1
let mcdonaldsplay = 1

let diabetesvaccine = 1
let diabetestype = 1
let diabetesnano = 1

let nuclearfusion = 1
let nuclearnuke = 1
let nuclearquantum = 1

let cyberoil = 1
let cyberjaw = 1
let cybercflag = 1

let rdrdlc = 1
let rdranti = 1
let rdrmod = 1

let othertax = 1


let childrate = 0
let laborrate = 0
let clankerrate = 0
let mcdonaldsrate = 0
let nuclearrate = 0
let cyberrate = 0
let rdrrate = 0


function clickButton() {
    if (Damt >= 1) {
        count += Damt * 2 * diabetesvaccine * diabetestype * diabetesnano;
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
        childrate = .5 * childlsd * childlaborwhips * childcandy * othertax
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

function buyCandy() {
    if (count >= priceofcandy) {
        childmoney = childmoney * 2;
        count -= priceofcandy;
        candy.style.opacity = "0.5";
        candy.disabled = true;
        candy.style.display = "none";
    }
}
candy.addEventListener("click", buyCandy);


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
    laborrate = 2 * laborthreat * laborhours * laborlaw * othertax
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

function buyHours() {
    if (count >= priceofhours) {
        labormoney = labormoney * 2;
        count -= priceofhours;
        hours.style.opacity = "0.5";
        hours.disabled = true;
        hours.style.display = "none";
    }
}
hours.addEventListener("click", buyHours);

function buyLaw() {
    if (count >= priceoflaw) {
        labormoney = labormoney * 2;
        count -= priceoflaw;
        law.style.opacity = "0.5";
        law.disabled = true;
        law.style.display = "none";
    }
}
law.addEventListener("click", buyLaw);

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
    clankerrate = 5 * clankergenerator * clankerdata * clankerseahorse * othertax
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

function buyData() {
    if (count >= priceofdata) {
        clankermoney = clankermoney * 2;
        count -= priceofdata;
        data.style.opacity = "0.5";
        data.disabled = true;
        data.style.display = "none";
    }
}
data.addEventListener("click", buyData);

function buySeahorse() {
    if (count >= priceofseahorse) {
        clankermoney = clankermoney * 2;
        count -= priceofseahorse;
        seahorse.style.opacity = "0.5";
        seahorse.disabled = true;
        seahorse.style.display = "none";
    }
}
seahorse.addEventListener("click", buySeahorse);

function buyMcdonalds() {

    if (count >= priceofmcdonalds) {
    Mamt += 1; 
    mcdonaldsshopamt.textContent = Mamt;
    count -= priceofmcdonalds;
    document.getElementById("mcdonaldsprice").textContent = priceofmcdonalds;

    if (Mamt < 5) {
        mcdonaldsMultiply = 1.55;
    } else if (Mamt < 10) {
        mcdonaldsMultiply = 1.3;
    } else if (Mamt < 15) {
        mcdonaldsMultiply = 1.2
    } else if (Mamt < 20) {
        mcdonaldsMultiply = 1.1
    } else if (Mamt < 25) {
        mcdonaldsMultiply = 1.05
    } else if (Mamt > 50) {
        mcdonaldsMultiply = 1.02
    } else if (Mamt > 75) {
        mcdonaldsMultiply = 1.01
    } else if (Mamt > 100) {
        mcdonaldsMultiply = 1.05
    } else if (Mamt > 125) {
        mcdonaldsMultiply = 1.02
    }
     else if (Mamt > 150) {
        mcdonaldsMultiply = 1.001
    }
    priceofmcdonalds = Math.floor(priceofmcdonalds * mcdonaldsMultiply);
    mcdonaldsprice.textContent = priceofmcdonalds;
    mcdonaldsrate = 10 * mcdonaldshealth * mcdonaldsdrive * mcdonaldsplay *othertax
    } else {

    }
};
mcdonalds.addEventListener("click", buyMcdonalds);

function buyHealth() {
    if (count >= priceofhealth) {
        mcdonaldsmoney = mcdonaldsmoney * 1.5;
        count -= priceofhealth;
        health.style.opacity = "0.5";
        health.disabled = true;
        health.style.display = "none";
    }
}
health.addEventListener("click", buyHealth);

function buyDrive() {
    if (count >= priceofdrive) {
        mcdonaldsmoney = mcdonaldsmoney * 2;
        count -= priceofdrive;
        drive.style.opacity = "0.5";
        drive.disabled = true;
        drive.style.display = "none";
    }
}
drive.addEventListener("click", buyDrive);

function buyPlay() {
    if (count >= priceofplay) {
        mcdonaldsmoney = mcdonaldsmoney * 2;
        count -= priceofplay;
        play.style.opacity = "0.5";
        play.disabled = true;
        play.style.display = "none";
    }
}
play.addEventListener("click", buyPlay);

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

function buyVaccine() {
    if (count >= priceofvaccine) {
        diabetesvaccine = 2;
        count -= priceofvaccine;
        vaccine.style.opacity = "0.5";
        vaccine.disabled = true;
        vaccine.style.display = "none";
    }
}
vaccine.addEventListener("click", buyVaccine);

function buyType() {
    if (count >= priceoftype) {
        diabetestype = 2;
        count -= priceoftype;
        type.style.opacity = "0.5";
        type.disabled = true;
        type.style.display = "none";
    }
}
type.addEventListener("click", buyType);

function buyNano() {
    if (count >= priceofnano) {
        diabetesnano = 2;
        count -= priceofnano;
        nano.style.opacity = "0.5";
        nano.disabled = true;
        nano.style.display = "none";
    }
}
nano.addEventListener("click", buyNano);

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
    nuclearrate = 15 * nuclearfusion * nuclearnuke * nuclearquantum * othertax
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

function buyNuke() {
    if (count >= priceofnuke) {
        nuclearmoney = nuclearmoney * 2;
        count -= priceofnuke;
        nuke.style.opacity = "0.5";
        nuke.disabled = true;
        nuke.style.display = "none";
    }
}
nuke.addEventListener("click", buyNuke);

function buyQuantum() {
    if (count >= priceofquantum) {
        nuclearmoney = nuclearmoney * 2;
        count -= priceofquantum;
        quantum.style.opacity = "0.5";
        quantum.disabled = true;
        quantum.style.display = "none";
    }
}
quantum.addEventListener("click", buyQuantum);

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
    cyberrate = 25 * cyberoil * cyberjaw * cybercflag * othertax
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

function buyJaw() {
    if (count >= priceofjaw) {
        cybermoney = cybermoney * 2;
        count -= priceofjaw;
        jaw.style.opacity = "0.5";
        jaw.disabled = true;
        jaw.style.display = "none";
    }
}
jaw.addEventListener("click", buyJaw);

function buyCflag() {
    if (count >= priceofcflag) {
        cybermoney = cybermoney * 2;
        count -= priceofcflag;
        cflag.style.opacity = "0.5";
        cflag.disabled = true;
        cflag.style.display = "none";
    }
}
cflag.addEventListener("click", buyCflag);

function buyRdr() {

    if (count >= priceofrdr) {
    Ramt += 1; 
    rdrshopamt.textContent = Ramt;
    count -= priceofrdr;
    document.getElementById("rdrprice").textContent = priceofrdr;

    if (Ramt < 5) {
        rdrMultiply = 1.55;
    } else if (Ramt < 10) {
        rdrMultiply = 1.3;
    } else if (Ramt < 15) {
        rdrMultiply = 1.2
    } else if (Ramt < 20) {
        rdrMultiply = 1.1
    } else if (Ramt < 25) {
        rdrMultiply = 1.05
    } else if (Ramt > 50) {
        rdrMultiply = 1.02
    } else if (Ramt > 75) {
        rdrMultiply = 1.01
    } else if (Ramt > 100) {
        rdrMultiply = 1.05
    } else if (Ramt > 125) {
        rdrMultiply = 1.02
    }
     else if (Ramt > 150) {
        rdrMultiply = 1.001
    }
    priceofrdr = Math.floor(priceofrdr * rdrMultiply);
    rdrprice.textContent = priceofrdr;
    rdrrate = 50 * rdrdlc * rdranti * rdrmod * othertax
    } else {

    }
};
rdr.addEventListener("click", buyRdr);

function buyDlc() {
    if (count >= priceofdlc) {
        rdrmoney = rdrmoney * 1.5;
        count -= priceofdlc;
        dlc.style.opacity = "0.5";
        dlc.disabled = true;
        dlc.style.display = "none";
    }
}
dlc.addEventListener("click", buyDlc);

function buyAnti() {
    if (count >= priceofanti) {
        rdrmoney = rdrmoney * 2;
        count -= priceofanti;
        anti.style.opacity = "0.5";
        anti.disabled = true;
        anti.style.display = "none";
    }
}
anti.addEventListener("click", buyAnti);

function buyMod() {
    if (count >= priceofmod) {
        rdrmoney = rdrmoney * 2;
        count -= priceofmod;
        mod.style.opacity = "0.5";
        mod.disabled = true;
        mod.style.display = "none";
    }
}
mod.addEventListener("click", buyMod);





function buyTax() {
    if (count >= priceoftax) {
        othermoney = othermoney * 2;
        count -= priceoftax;
        tax.style.opacity = "0.5";
        tax.disabled = true;
        tax.style.display = "none";
    }
}
tax.addEventListener("click", buyTax);

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

function autoMcdonalds() {
    count += Mamt * mcdonaldsmoney;
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

function autoRdr() {
    count += Ramt * rdrmoney;
    number.textContent = Math.floor(count);
}

function updateRate() {
    const perSecond = (Camt * childmoney * 100) + (Lamt * labormoney * 100) + (Clamt * clankermoney * 100) + (Namt * nuclearmoney * 100) + (Cyamt * cybermoney * 100) + (Ramt * rdrmoney * 100) + (Mamt * mcdonaldsmoney * 100);
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
    if (count >= priceofmcdonalds) {
        mcdonalds.style.opacity = "1";
    } else {
        mcdonalds.style.opacity = "0.5";
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
    }     if (count >= priceofrdr) {
        rdr.style.opacity = "1";
    } else {
        rdr.style.opacity = "0.5";
    }     if (count >= priceoflsd) {
        lsd.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        lsd.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }    if (count >= priceofwhips) {
       whips.style.opacity = "1";
       upgradesPanel.style.opacity = "1";
   } else {
       whips.style.opacity = "0.5";
       upgradesPanel.style.opacity = "1";
   }     if (count >= priceofcandy) {
       candy.style.opacity = "1";
       upgradesPanel.style.opacity = "1";
   } else {
       candy.style.opacity = "0.5";
       upgradesPanel.style.opacity = "1";
   }     if (count >= priceofthreat) {
        threat.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        threat.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }    if (count >= priceofhours) {
        hours.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        hours.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }    if (count >= priceoflaw) {
        law.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        law.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofgenerator) {
        generator.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        generator.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofdata) {
        data.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        data.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofseahorse) {
        seahorse.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        seahorse.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofhealth) {
        health.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        health.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofdrive) {
        drive.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        drive.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofplay) {
        play.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        play.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofvaccine) {
        vaccine.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        vaccine.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceoftype) {
        type.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        type.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofnano) {
        nano.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        nano.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }      if (count >= priceoffusion) {
        fusion.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        fusion.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }      if (count >= priceofnuke) {
        nuke.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        nuke.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }      if (count >= priceofquantum) {
        quantum.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        quantum.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofoil) {
        oil.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        oil.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofjaw) {
        jaw.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        jaw.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofcflag) {
        cflag.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        cflag.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofdlc) {
        dlc.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        dlc.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofanti) {
        anti.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        anti.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceofmod) {
        mod.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        mod.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }     if (count >= priceoftax) {
        tax.style.opacity = "1";
        upgradesPanel.style.opacity = "1";
    } else {
        tax.style.opacity = "0.5";
        upgradesPanel.style.opacity = "1";
    }
        

    
};

setInterval(updateShop, 10);
setInterval(autoChild, 10);
setInterval(autoLabor, 10);
setInterval(autoClanker, 10);
setInterval(autoMcdonalds, 10);
setInterval(autoNuclear, 10);
setInterval(autoCyber, 10);
setInterval(autoRdr, 10);
setInterval(updateRate, 10);