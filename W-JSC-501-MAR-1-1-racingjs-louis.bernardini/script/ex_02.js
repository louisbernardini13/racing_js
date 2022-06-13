let x = document.getElementById("compteur");
let nbclic = 0;

x.onclick = function compteur()
{
    nbclic++;
    x.textContent = nbclic;
}