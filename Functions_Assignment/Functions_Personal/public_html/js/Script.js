/* 
Jacob R. Minotti
Sept 25th, 2014
Functions : Personal
 */

//alert ("Lok'Tar Ogar.");

var goldCalc = function(gold, cost){
        var getMount = (gold >= cost) ? "You may purchase the Spectral Tiger mount!" : "I'm sorry you have a little more saving to do.";
    return getMount;
};
//Setting up some var
var gold = prompt ("How much gold do you have in World of Warcraft?");
var cost = prompt ("How much gold does the Spectral Tiger mount cost on your server?");
var mount = goldCalc(gold, cost);

alert (mount);
