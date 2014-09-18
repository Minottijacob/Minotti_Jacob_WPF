/* 
Jacob Minotti
Sept. 18th 2014
Conditionals: Industry
 */

//alert ("Well met friend! You have successfully embedded your JavaScript into your HTML! You may begin coding!");

//Employees and vacation time

var coworkers = prompt ("How many other coworkers do you have in your department? (minimum of 5)");
var coworkersOnVacation = prompt ("How many coworkers are on vacation?");
var vacation;


//Now evaluating to see if this lucky person can go on vacation or not.

//vacation= (coworkersOnVacation > coworkers - 3) ? "Yes! You may go on vacation." : "I'm sorry you may not go on vacation this week.";

//Now alerting user their response
alert (vacation);

console.log (coworkersOnVacation > coworkers - 3);