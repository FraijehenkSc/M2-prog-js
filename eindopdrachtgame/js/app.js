class App
{
    runAplication()
    {
        let canvas = document.getElementById("myCanvas");
        let g = canvas.getContext("2d");

        g.beginPath();
        g.moveTo(60,320);
        g.lineTo(546,320);
        g.lineTo(590,380);
        g.lineTo(0,380);
        g.lineTo(60,320)

        g.fillStyle = "grey"
        g.fill()
        g.stroke();

        g.moveTo(60,320);
        g.lineTo(60,0);
        g.stroke();

        g.moveTo(546,320);
        g.lineTo(546,0);
        g.stroke();




        console.log("Hello World.")
    }
}
class House{
    makeHouse(x,y,color)
    {
        let canvas = document.getElementById("myCanvas");
        let g = canvas.getContext("2d");


        g.beginPath();
        g.moveTo(108 + x,220 + y);
        g.lineTo(108 + x,280 + y);
        g.lineTo(200 + x,280 + y);
        g.lineTo(200 + x,220 + y);
        g.lineTo(154 + x,172 + y);
        g.lineTo(108 + x,220 + y);

    
        g.fillStyle = color
        g.fill()
        g.stroke();
       

    }
}

class Tree{
    makeTree(x,y,color)
    {
        let canvas = document.getElementById("myCanvas");
        let g = canvas.getContext("2d");



        g.beginPath();
        g.arc(100 + x, 200 + y, 25, 0, 2 * Math.PI);
        g.moveTo(120 + x,200 + y)
        g.arc(120 + x, 200 + y, 25, 0, 2 * Math.PI);
        g.moveTo(120 + x,180 + y)
        g.arc(110 + x, 180 + y, 25, 0, 2 * Math.PI);

        g.fillStyle = color
        g.fill();

        g.beginPath();
        g.moveTo(107 + x,220 + y);
        g.lineTo(107 + x,270 + y);
        g.lineTo(115 + x,270 + y);
        g.lineTo(115 + x,220 + y);
        

        g.fillStyle = "brown"
        g.fill();



    }
}

class Snowman{
    makeSnoman(x,y){
        let canvas = document.getElementById("myCanvas");
        let g = canvas.getContext("2d");



        g.beginPath();
        g.arc(100 + x, 300 + y, 15, 0, 2 * Math.PI);
        g.fillStyle = "white"
        g.strokestyle = "black"
        g.fill();
        g.stroke();

        g.beginPath();
        g.arc(100 + x, 280 + y, 13, 0, 2 * Math.PI);
        g.fillStyle = "white"
        g.strokestyle = "black"
        g.fill();
        g.stroke();

        g.beginPath();
        g.arc(100 + x, 265 + y, 10, 0, 2 * Math.PI);
        g.fillStyle = "white"
        g.strokestyle = "black"
        g.fill();
        g.stroke();

        g.beginPath();
        g.arc(100 + x, 290 + y, 8.9, 0, 2 * Math.PI);
        g.fillStyle = "white"
        g.fill();

        g.beginPath();
        g.arc(100 + x, 275 + y, 8, 0, 2 * Math.PI);
        g.fillStyle = "white"
        g.fill();        


        g.beginPath();
        g.arc(105 + x, 263 + y, 1, 0, 2 * Math.PI);
        g.fillStyle = "white"
        g.strokestyle = "black"
        g.fill();
        g.stroke();

        g.beginPath();
        g.arc(95 + x, 263 + y, 1, 0, 2 * Math.PI);
        g.fillStyle = "white"
        g.strokestyle = "black"
        g.fill();
        g.stroke();

        g.beginPath();
        g.arc(100 + x, 268 + y, 3, 0, 2 * Math.PI);
        g.fillStyle = "orange"
        g.strokestyle = "black"
        g.fill();
        g.stroke();
        
        g.beginPath();
        g.arc(100 + x, 290 + y, 1, 0, 2 * Math.PI);
        g.fillStyle = "white"
        g.strokestyle = "black"
        g.fill();
        g.stroke();

        g.beginPath();
        g.arc(100 + x, 280 + y, 1, 0, 2 * Math.PI);
        g.fillStyle = "white"
        g.strokestyle = "black"
        g.fill();
        g.stroke();
        
        g.beginPath();
        g.arc(100 + x, 300 + y, 1, 0, 2 * Math.PI);
        g.fillStyle = "white"
        g.strokestyle = "black"
        g.fill();
        g.stroke();
    }
    

}


let app = new App();
app.runAplication();

let house = new House
let tree = new Tree
let snowman = new Snowman
let text = new Text

tree.makeTree(240,0,"green")

house.makeHouse(150,20,"lime")

tree.makeTree(140,0,"green")

house.makeHouse(50,20,"red")

house.makeHouse(250,20,"yellow")

tree.makeTree(0,20,"green")

tree.makeTree(380,20,"green")

snowman.makeSnoman(30,0)

snowman.makeSnoman(70,0)

snowman.makeSnoman(300,0)

snowman.makeSnoman(350,0)

let canvas = document.getElementById("myCanvas");
let g = canvas.getContext("2d");

g.font = "60px Comic Sans MS";

let gradient = g.createLinearGradient(5,100,10,5)

gradient.addColorStop(0, "red")
gradient.addColorStop(1, "green")
g.fillStyle = gradient
g.fillText("🎄Fijne Kerst🎄", 60, 90);

/*❄️❄️❄️❄️❄️❄️❄️❄️❄️
⛄⛄⛄⛄⛄⛄⛄⛄⛄*/








