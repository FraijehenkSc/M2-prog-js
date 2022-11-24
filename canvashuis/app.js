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
        g.moveTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.lineTo(300,100);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.beginPath();
        g.fillStyle = "lightgrey"
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(600,400);
        g.lineTo(600,600);
        g.lineTo(800,500);
        g.lineTo(800,300);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(600,400);
        g.lineTo(700,200);
        g.lineTo(800,300);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "aquamarine"
        g.moveTo(252,369);
        g.lineTo(530,434);
        g.lineTo(525,552);
        g.lineTo(258,486);
        g.closePath();
        g.stroke();
        g.fill();



        
        


        
       

        console.log(canvas);
        

    }
}

let app = new App();
app.runApplication();