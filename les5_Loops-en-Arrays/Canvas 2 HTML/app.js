class App
{
    runApplication()
    {
        let arr = ["Fortuna ","Artiest 2","Artiest 3","Artiest 4","Artiest 5"]
        console.log(arr);

        let headers = document.getElementsByClassName("bandName");
        for(let i = 0; i < headers.length; i++){
            headers[i].innerHTML = arr[i];
        }
    }
}

let app = new App();
app.runApplication();


