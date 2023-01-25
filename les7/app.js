class Dino
{
    constructor(naam, vleeseter, leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;
    }
    eetDino(dino)
    {
        dino.leeft = false;  
        console.log(this.naam +"eet de dino "+ dino.naam);
    }
    eetPlant(plant)
    {
        console.log(this.naam + "eet de plant " + plant.naam);
    }
    rezDino()
    {
        this.leeft = true;
        console.log(this.naam + "leeft weer!")
    }
    
}

class Plant
{
    constructor(naam)
    {
        this.naam = naam;
    }
}



let trex = new Dino("Trex ",true,40)
let Triceratops = new Dino("Triceratops ",false,13)
let Megalodon = new Dino("Megalodon ",true,200)
let grass = new Plant("Gras ")



/*Triceratops.eetPlant(grass)
trex.eetDino(Megalodon)
console.log(Megalodon)
Megalodon.rezDino()
console.log(Megalodon)*/

let eetdinoBtn = document.getElementById("dino1")
eetdinoBtn.addEventListener('click', (e) => {
    trex.eetDino(Megalodon) 
})







