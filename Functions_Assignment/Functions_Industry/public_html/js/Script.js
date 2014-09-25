/* 
Jacob R. Minotti
Sept. 25th, 2014
Functions: Industry
 */

//alert ("Lok'Tar Ogar");

//Project 
var time = prompt ("What day is it?");
var expected = prompt ("What day is your project due?");


function project(time, expected) {
    if (time > expected) {
        alert ("You still have time to work on the project.");
    }
    else if (time === expected) {
        alert ("Did you finish the project?");
    }
    else {
        alert ("Your project is overdue.");
    }
};

project(time, expected);

