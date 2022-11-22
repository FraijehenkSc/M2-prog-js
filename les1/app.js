class App

{
    runApplication()
    {
        let appNaam = "TestApp"
        let versienummer = "0.9 double"
        let versiedatum = "22-11-2022"
        let autheur = "Nino"
        let copyright = "Nino inc."
        let distributeur = "Nino" 
        let darkmode = true
        
        console.log("appNaam: ",appNaam)
        console.log("versienummer: ",versienummer)
        console.log("versiedatum: ",versiedatum)
        console.log("autheur: ",autheur)
        console.log("copyright: ",copyright)
        console.log("distributeur: ",distributeur)
        console.log("darkmode: ",darkmode)
        

    }
}

let app = new App()
app.runApplication()