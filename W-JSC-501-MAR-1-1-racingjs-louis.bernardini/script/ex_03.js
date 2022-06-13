let cadre = document.getElementById('cadre');

cadre.onclick = function (){
    let name = prompt("Quel est votre nom ?");
    while (true) {
        if (name === null) {
            break;
        }
        else if (name == ""){
            cadre.onclick();
        }
       else if (confirm = confirm("Etes vous sûr que " + name + " est votre nom ?")) {
            alert("Bonjour " + name + " !");
            document.getElementById('cadre').innerHTML = ("Bonjour " + name + " !");
        }
       else {
           cadre.onclick();
        }
       break;
    }
}