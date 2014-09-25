/* 
Jacob R. Minotti
Sept 25th, 2014
Functions : Personal
 */

//alert ("Lok'Tar Ogar.");
var userPrompt = prompt ("How much gold do you currently have in World of Warcraft?");

var getMount = function characterGold() {
    (userPrompt > 600000) ? "You can purchase the Spectral Tiger mount" : "I'm sorry you have a little more saving to do.";
};
alert (getMount); 