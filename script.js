let health = 100;
let logica = 0;
let forza = 0;
let fascino = 0;
let currentWeapon = 0;
let currentLogica = 0;
let currentForza = 0;
let currentFascino = 0;
let fighting = 0;
let monsterHealth;
let vecchio = currentWeapon;
let vecchioLogica = currentLogica;
let vecchioForza = currentForza;
let vecchioFascino = currentFascino;
let check = false;
let logico = "si";
let saputello = false;
let intelligentone = false;
let geniaccio = false;
let onniscente = false;

const De_Luca = 5;
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const healthText = document.querySelector("#healthText");
const logicaText= document.querySelector("#logicaText");
const forzaText = document.querySelector("#forzaText");
const fascinoText = document.querySelector("#fascinoText");
const tagLogicaText = document.querySelector("#tagLogicaText");
const tagForzaText = document.querySelector("#tagForzaText");
const tagFascinoText = document.querySelector("#tagFascinoText");
const enemyStats = document.querySelector("#enemyStats");
const enemyNameText = document.querySelector("#enemyNameText");
const enemyHealthText = document.querySelector("#enemyHealthText");

const logicaTitoli = [
    {
        name: "Stupido"
    },
    {
        name: "Saputello"
    },
    {
        name: "Intelligentone"
    },
    {
        name: "Geniaccio"
    },
    {
        name: "Onniscente"
    }
];

const forzaTitoli = [
    {
        name: "Fragile"
    },
    {
        name: "Debole"
    },
    {
        name: "Forte"
    },
    {
        name: "Imponente"
    },
    {
        name: "Sovraumano"
    }
];

const fascinoTitoli = [
    {
        name: "Brutto"
    },
    {
        name: "Antonio Pio"
    },
    {
        name: "Davide Passacatini"
    },
    {
        name: "Ottaviosky"
    },
    {
        name: "Tony white"
    }
];

const Gyat = [
    {
        name: "Giulia Crusco",
        level: 1
    },
    {
        name: "Elettra Lo Gatto",
        level: 10
    },
    {
        name: "Miriam Petrone",
        level: 100
    }
]

const Muscoli = [
    {
        name: "Secco",
        power: 1
    },
    {
        name: "Bicipite di Luca Gullo",
        power: 10
    },
    {
        name: "Bicipite di Pietro Garofalo",
        power: 25
    },
    {
        name: "Bicipite di Pisciotto",
        power: 50
    },
    {
        name: "Bicipite di Pietramale",
        power: 100
    }
]

const Nemici = [
    {
        name: "Roby Costa",
        sconfitto: false,
        health: 5,
        level: 1
    },
    {
        name: "Luca Gullo",
        sconfitto: false,
        health: 30,
        level: 10
    },
    {
        name: "Pietro Garofalo",
        sconfitto: false,
        health: 75,
        level: 25
    },
    {
        name: "Pisciotto",
        sconfitto: false,
        health: 150,
        level: 50
    },
    {
        name: "Pietramale",
        sconfitto: false,
        health: 300,
        level: 100
    },
    {
        name: "Francesco De Luca",
        sconfitto: true,
        health: 600,
        level: 100
    }
]

const locations = [
    {
        name: "casa",
        "button text": ["Vai a scuola", "Vai in Palestra", "Esci con gli amici"],
        "button functions": [scuola, palestra, uscita],
        text: "La tua avventura inizia di mattina. Scegli cosa fare attraverso i pulsanti qua sopra."
    },
    {
        name: "scuola",
        "button text": ["Torna a Casa", "Vai in Palestra", "Esci con gli amici"],
        "button functions": [casa, palestra, uscita],
        text: "Ascolti la lezione di oggi."
    },
    {
        name: "palestra",
        "button text": ["Combatti avversari", "Torna a casa", "Esci con gli amici"],
        "button functions": [combatti, casa, uscita],
        text: "Vai ad allenarti in palestra da Morello."
    },
    {
        name: "uscita",
        "button text": ["Rimorchia", "Discoteca", "Torna a casa"],
        "button functions": [rimorchio, discoteca, casa],
        text: "Esci con gli amici. Cosa fate?"
    },
    {
        name: "combatti",
        "button text": ["Attacca", "Schiva", "Scappa"],
        "button functions": [attacca, schiva, scappa],
        text: "Vai ad allenarti in palestra da Morello."
    },
    {
        name: "vittoria",
        "button text": ["Torna a casa", "Torna a casa", "Torna a casa"],
        "button functions": [casa, casa, casa],
        text: "Hai vinto!"
    },
    {
        name: "De_Luca",
        "button text": ["Combatti", "Vai in palestra", "Torna a casa"],
        "button functions": [king, palestra, casa],
        text: "E' comparso il Re della Logica! cosa vuoi fare?"
    },
    {
        name: "scappa",
        "button text": ["Torna a casa", "Torna a casa", "Torna a casa"],
        "button functions": [casa, casa, casa],
        text: "Sei scappato..."
    },
    {
        name: "sconfitto",
        "button text": ["Riprova?", "", ""],
        "button functions": [restart, restart, restart],
        text: "Hai perso! Riprova facendo scelte differenti."
    },
    {
        name: "king",
        "button text": ["Attacca", "Schiva", "Scappa"],
        "button functions": [conoscenza, schiva, scappa],
        text: "Stai affrontando il Re della Logica! Annientalo!"
    },
    {
        name: "discoteca",
        "button text": ["Rimorchia", "Torna a casa", ""],
        "button functions": [rimorchio, casa, ],
        text: "Stai affrontando il Re della Logica! Annientalo!"
    },
    {
        name: "rimorchio",
        "button text": ["Attacca", "Schiva", "Scappa"],
        "button functions": [conoscenza, schiva, scappa],
        text: "Andate in cerca di Gyat."
    }
]

button1.onclick = scuola;
button2.onclick = palestra;
button3.onclick = uscita;

function update(location) {
    enemyStats.style.display = "none";
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
}

function casa() {
    update(locations[0]);
    button2.style.display = "inline";
    button3.style.display = "inline";
    text.innerText = "Una nuova giornata ha inizio! Scegli cosa fare ora.";
    health = 100;
    healthText.innerText = health;
}

function scuola() {
    update(locations[1])
    text.innerText += " Il tuo sapere aumenta!";
    logica += 30;
    logicaText.innerText = logica;
    intelleto();
    if(logica >= 300 && check === false)
    {
        update(locations[6]);
    }
}

function palestra() {
    update(locations[2])
    forza += 15;
    forzaText.innerText = forza;
    text.innerText = "Ti Alleni.";
    ipertrofia();
    if(vecchio != currentWeapon){
        if(currentWeapon != 4)
        {
            text.innerText = " Congratulazioni! Ora il tuo bicipite è grande come il " + Muscoli[currentWeapon].name + ". Danno aumentato!";
            vecchio = currentWeapon;
        }else{
            text.innerText = " Congratulazioni! Hai sbloccato la forza finale! Il " + Muscoli[currentWeapon].name + ". Danno aumentato!";
            vecchio = currentWeapon;
        }
    }
}

function uscita() {
    update(locations[3])
}

function forzaTag(fight) {
    tagForzaText.innerText = forzaTitoli[fighting].name;
    text.innerText += " Hai sbloccato il titolo '" + forzaTitoli[fighting].name + "'.";
    Nemici[fight].sconfitto = true
}

function combatti() {
    if(fighting < 5)
    {
        update(locations[4])
        nemiciHealth = Nemici[fighting].health;
        enemyStats.style.display = "block";
        enemyNameText.innerText = Nemici[fighting].name;
        enemyHealthText.innerText = nemiciHealth;
        text.innerText = "Stai combattendo contro " + Nemici[fighting].name + ". Annientalo!";
    }else{
        text.innerText = "Hai sconfitto tutti i nemici disponibili";
    }
}

function rimorchio() {
    
}

function discoteca() {
    update(locations[10]);
    button3.style.display = "none";
    fascino += 10;
    fascinoText.innerText = fascino;
    text.innerText = "Andate a sballarvi in discoteca! Fascino aumentato!"
}

function attacca() {
    nemiciHealth -= Muscoli[currentWeapon].power;
    enemyHealthText.innerText = nemiciHealth;
    text.innerText = "Attacchi con tutta la tua potenza!";
    if(nemiciHealth <= 0){
        vittoria();
    }else{
        if(Nemici[fighting].level > Muscoli[currentWeapon].power)
        {
            health -= attaccoNemico(Nemici[fighting].level);
        }else{
            health -= fighting;
        }
    }
    if(health <= 0) {
        sconfitta();
    }
    healthText.innerText = health;
}

function attaccoNemico(livello) {
    let hit = (livello - Muscoli[currentWeapon].power);
    console.log(hit);
    return hit;
}

function schiva() {
    text.innerText = "Hai schivato l'attacco. Ora contrattacca!"
}

function scappa() {
    update(locations[7]);
    button2.style.display = "none";
    button3.style.display = "none";
}

function ipertrofia() {
    if(forza >= 30 && forza < 60){
        currentWeapon = 1;
    }else if(forza >= 60 && forza < 90){
        currentWeapon = 2;
    }else if(forza >= 90 && forza < 120){ 
        currentWeapon = 3;
    }else if(forza >= 200){
        currentWeapon = 4;
    }
}

function vittoria() {
    update(locations[5])
    button2.style.display = "none";
    button3.style.display = "none";
    if(Nemici[fighting].name === "Pietramale")
    {
        tagForzaText.innerText = "Re Della Forza"
        text.innerText += " Hai sbloccato il titolo Re Della Forza" 
    }
    fighting++;
    if(!Nemici[fighting].sconfitto)
    {
        forzaTag(fighting)
    }
}

function sconfitta() {
    update(locations[8])
    button2.style.display = "none";
    button3.style.display = "none";

}

function restart() {
    logica = 0;
    forza = 0;
    fascino = 0;
    currentWeapon = 0;
    fighting = 0;
    tagForzaText.innerText = forzaTitoli[fighting].name;
    logicaText.innerText = logica;
    forzaText.innerText = forza;
    fascinoText.innerText = fascino;
    casa();
}

function king() {
    update(locations[9])
    nemiciHealth = Nemici[De_Luca].health;
    enemyStats.style.display = "block";
    enemyNameText.innerText = Nemici[De_Luca].name;
    enemyHealthText.innerText = nemiciHealth;
    text.innerText = "Stai combattendo contro " + Nemici[De_Luca].name + ". Annientalo!";
}

function conoscenza() {
    nemiciHealth -= logica;
    enemyHealthText.innerText = nemiciHealth;
    text.innerText = "Attacchi il nemico con tutta la tua conoscenza!";
    if(nemiciHealth <= 0){
        check = true;
        genio();
    }else{
        if(Nemici[fighting].level >= 300)
        {
            health -= attaccoNemico(Nemici[De_Luca].level);
        }else{
            health -= De_Luca;
        }
    }
    if(health <= 0) {
        sconfitta();
    }
    healthText.innerText = health;
}

function genio() {
    update(locations[5])
    button2.style.display = "none";
    button3.style.display = "none";
    tagLogicaText.innerText = "Re Della Logica"
    text.innerText += " Hai sbloccato il titolo 'Re Della Logica'.";
    Nemici[De_Luca].sconfitto = true
}

function intelleto() {
    if(logica >= 30 && logica < 90){
        logico = logicaTitoli[1].name;
        tagLogicaText.innerText = logico;
        if(saputello === false){
            text.innerText += " Congratulazioni hai sbloccato il titolo '" + logicaTitoli[1].name + "'.";
            saputello = true;
        }
    }else if(logica >= 90 && logica < 150){
        logico = logicaTitoli[2].name;
        tagLogicaText.innerText = logico;
        if(intelligentone === false){
            text.innerText += " Congratulazioni hai sbloccato il titolo '" + logicaTitoli[2].name + "'.";
            intelligentone = true;
        }
    }else if(logica >= 150 && logica < 210){
        logico = logicaTitoli[3].name;
        tagLogicaText.innerText = logico;
        if(geniaccio === false){
            text.innerText += " Congratulazioni hai sbloccato il titolo '" + logicaTitoli[3].name + "'.";
            geniaccio = true;
        }
    }else if(logica >= 270 && logica <300){
        logico = logicaTitoli[4].name;
        tagLogicaText.innerText = logico;
        if(onniscente === false){
            text.innerText += " Congratulazioni hai sbloccato il titolo '" + logicaTitoli[4].name + "'.";
            onniscente = true;
        }
    }
}