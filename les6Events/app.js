let button = document.getElementById("myButton")
button.addEventListener("click", ()=>{
    console.log("hello world");

    const para = document.createElement("p");
    const node = document.createTextNode("nieuw stukje text.")
    para.appendChild(node);

    const el = document.getElementById("myButton")
    el.appendChild(para);
});
