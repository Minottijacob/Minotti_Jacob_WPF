/* 
 Jacob Minotti
Sept. 18th, 2014
Conditionals: Personal
 */

//alert ("Lok'Tar Ogar, Friend! If you can see this message you have successfully attached you JavaScript file into your HTML and you're ready to code!");

//Homework or World of Warcraft

var userInput = prompt ("Do you have assignments due this week? Please answer Yes or No.");

if (userInput === "Yes"){
    alert ("You should probably work on your assignments.");
  
}
else if (userInput === "") {
         alert ("I'm sorry. I didn't see a response.");
         
}
else {
    var userElseInput = prompt ("Do you have any other responsibilities today? Please answer Yes or No.");
    if (userElseInput === "Yes"){
        alert ("I'm sorry you should take care of those before playing video games.");
    }
    else if (userElseInput === "") {
        alert ("I'm sorry. I didn't see a response.");
    }
    else {
        alert ("You've completed everything you needed to get done with today. You now may go and play some World of Warcraft.");
    }
    
}