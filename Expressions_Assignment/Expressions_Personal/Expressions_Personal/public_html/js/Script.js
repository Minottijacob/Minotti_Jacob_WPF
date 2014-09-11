/* 
Jacob Minotti
Sept. 11th, 2014
Expressions: Personal
 */
//alert("Lok'Tar Ogar, Friend! You have successfully setup your JavaScript files.");

//Greeting users, addressing my purpose
var name = prompt("Please enter your name in the text box below.");
alert("Greetings, " + name + ". Let's find out how many days you're going to waste raiding in World of Warcraft this week!");
//Setting up Variable
var raidDays = prompt("How many days this week do you plan on raiding?");
var hoursDevoted = prompt("How many hours do you plan on raiding this week?");
var daysWasted = raidDays *hoursDevoted/24;
console.log(daysWasted);
//Alerting user their answer
