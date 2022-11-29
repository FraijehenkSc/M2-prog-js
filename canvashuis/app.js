class App

{
    runApplication()
    {
        
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        


        //g.fillRect(0,0,10,10);
        
        //g.beginPath();
        //g.moveTo(20,20);
        //g.lineTo(300,300);
        //g.closePath();
        //g.stroke();

        
        
        g.beginPath();
        g.fillStyle = "red"
        g.moveTo(30,10);
        g.lineTo(20,30);
        g.lineTo(60,40);
        g.lineTo(70,20);
        g.lineTo(30,10);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.beginPath();
        g.fillStyle = "lightgrey"
        g.moveTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(60,40);
        g.lineTo(60,60);
        g.lineTo(80,50);
        g.lineTo(80,30);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(60,40);
        g.lineTo(70,20);
        g.lineTo(80,30);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "aquamarine"
        g.moveTo(25.2,36.9);
        g.lineTo(53,43.4);
        g.lineTo(52.5,55.2);
        g.lineTo(25.8,48.6);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "#6C5F42"
        g.moveTo(66.9,56.3);
        g.lineTo(66.7,44.2);
        g.lineTo(73.5,40.9);
        g.lineTo(74,52.8);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "gold"
       
        g.arc(72.5,47.8,0.7,0,2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        


        



        
        


        
       

        console.log(canvas);
        

    }
}

let app = new App();
app.runApplication();