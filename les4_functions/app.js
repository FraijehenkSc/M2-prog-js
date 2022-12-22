class App
{
    runAplication()
    {
        console.log("hello world!");
    }

    printMario()
    {
        console.log("MARIO!!")
    }
    bowser(){
        console.log("BWAHAHA!!!")
        let bowser = "BWAHAHA!!!"

        return bowser
    }
    telOp(getal1,getal2){
        let som = getal1 + getal2
        return som
    }
}  

let app = new App
app.runAplication()


console.log(app.telOp(1,2))