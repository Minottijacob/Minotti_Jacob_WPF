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
//Testing for any missing values

if (coworkers === "" || coworkersOnVacation === ""){
    alert ("I'm sorry. I didn't see a response.");
}
else {
//Now evaluating to see if this lucky person can go on vacation or not.

vacation= (coworkersOnVacation > coworkers - 3) ? "I'm sorry but you can not go on vacation this week."  : "Yes! You may go on vacation.";

//Now alerting user their response
alert (vacation);
}
//console.log (coworkersOnVacation > coworkers - 3);