/* 
Jacob Minotti
Sept. 11th, 2014
Expression: Wacky
 */

//alert ("You put the lime in the coconut.");

//How many limes are actually in that coconut before you shake it all up?
var name = prompt ("Hello user. Tell me what's your name?");
alert ("Greetings " + name + "!");
var limes = prompt ("Do you know how many limes are in the coconut before you shake it all up? Yes or No?");
// If Else Statement
if (limes === "Yes") {
   var limesInCoconut = prompt ("You do! How many?");
   alert ("So I'll put " + limesInCoconut + " limes in the coconut before I shake it all up!");
   var sharingIsCaring = prompt ("How many people are you going to share this beverage with?");
   var totalLimes = limesInCoconut * sharingIsCaring;
   
}