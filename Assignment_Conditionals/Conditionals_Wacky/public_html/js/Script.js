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
        
        
    }
    else if (bananaDance === "") {
        alert ("I'm sorry. I didn't see a response.");
    }
    else {
        var wantToKnow
    }
    
}
else if (userIsBananas === "") {
    alert ("I'm sorry. I didn't see a response.");
    
}
else {
    alert ("That's a shame. Bananas are an excellent source of potassium!");
}