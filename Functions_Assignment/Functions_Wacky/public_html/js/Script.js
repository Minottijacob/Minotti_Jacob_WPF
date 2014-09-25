/* 
Jacob R. Minotti
Sept. 25th, 2014
Functions: Wacky
 */

     //alert ("Lok'Tar Ogar");
var isThis = prompt ("Is this the Krusty Krab? Yes or No.");
var patrick = prompt ("Is your name Patrick Star? Yes or No.");

function krabby (isThis, patrick) {
    if (isThis === "No" && patrick === "Yes" ) {
        alert ("This is Patrick.");
    }
    else {
        alert ("Hi! May I take your order?");
    };

}

krabby(isThis, patrick);