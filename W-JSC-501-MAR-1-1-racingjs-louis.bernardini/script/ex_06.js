var cadre = document.querySelector("footer div");

class Hero {
    constructor (name , type , intelligence , force){
        this.name = name;
        this.type = type;
        this.intelligence = intelligence;
        this.force = force;
    }
    capitalize = function(sentence){
        return sentence && sentence[0].toUpperCase() + sentence.slice(1);
    }
    toString = function(){
        cadre.innerHTML += "Je suis " + this.capitalize(this.name) + " le " + this.type + ", j'ai " + this.intelligence + " points d'intelligence et " + this.force + 
        " points de force !<br>";
    }
}
var mage = new Hero("amadeus", "mage", 10, 3);
console.log(mage);
var guerrier = new Hero("pontius", "guerrier", 3, 10);
mage.toString();
guerrier.toString();
