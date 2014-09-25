/* 
 Jacob Minotti
Sept. 18th, 2014
Conditionals: Wacky
 */

//Testing for proper intergration with the HTML
//alert ("Throm-Ka!");

//Dancing Bananas

var userIsBananas = prompt ("Do you like bananas? Yes or No?");

if (userIsBananas === "Yes") {
    var bananaDance = prompt ("Do you know the Banana Dance?");
    
    // setting up for another conditional
    if (bananaDance === "Yes") {
        alert ("Lets all do the banana dance! 。(⌒∇⌒。)	"); 
        
        
    }
    else if (bananaDance === "") {
        alert ("I'm sorry. I didn't see a response.");
    }
    else {
        var wantToKnow = prompt ("Would you like to know?");
        
        //Setting up for conditional for variable wantToKnow
        if (wantToKnow === "Yes") {
            alert ("It's easy! Just look at the emoji to do the banana dance! 。(⌒∇⌒。)	");
        }
        else if (wantToKnow === "") {
            alert ("I'm sorry. I didn't see a response.");
        }
        else {
            alert ("That's lame! The Banana Dance is really cool!");
        }
    }
    
}
else if (userIsBananas === "") {
    alert ("I'm sorry. I didn't see a response.");
    
}
else {
    alert ("That's a shame. Bananas are an excellent source of potassium!");
}