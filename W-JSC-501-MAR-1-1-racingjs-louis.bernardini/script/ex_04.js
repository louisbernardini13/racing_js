var cadre = document.querySelector("footer div");

window.addEventListener("keydown" , function(e){
    console.log(e);
    console.log(e.key.length);
    if(e.key.length == 1 && e.key != " "){
        cadre.innerHTML += e.key;
    //cadre.innerHTML = cadre.innerHTML + " " + e.key;
    var currenttext = cadre.innerHTML;
    var key = e.key;
    cadre.innerHTML = (currenttext + key).slice(-42);
    }
} )