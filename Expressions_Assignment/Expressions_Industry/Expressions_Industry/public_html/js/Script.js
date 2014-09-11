/* 
 Jacob Minotti
Sept. 11th, 2014
Expressions: Industy
 */

//alert("Lok'Tar Ogar, friend! You have successfully linked your JavaScript into your HTML file. You may now begin coding.");

//Setting up for success- I want to calculate the average amount of Developers I should put on my company's next project.

var currentDevTeams = [4, 6, 4, 8, 3, 5, 6];
var total = currentDevTeams[0] + currentDevTeams[1] + currentDevTeams[2] + currentDevTeams[3] + currentDevTeams [4] + currentDevTeams[5] + currentDevTeams[6];
console.log(total);
var hired = prompt ("Please enter how many developers you've hired in the last couple of months.");
var addition = total + Number(hired);
var average = addition/8;
console.log (average);
alert("The average amount of developers on a project is " + average + ".");