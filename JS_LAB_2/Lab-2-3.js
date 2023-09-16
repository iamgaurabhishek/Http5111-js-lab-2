//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var checkJoin;

checkJoin = confirm("Would you like to join the mailing list?")

//==== LOGIC =============
if(checkJoin === true){
    var checkEmail = prompt("Enter the email ", "me@example.com");
    if(checkEmail ==="" || checkEmail=== "me@example.com" || checkEmail=== null || checkEmail===undefined){
        alert("Thank you, your email is not valid.")
    }
    else{
        alert("Thank you, our next newsletter will be sent to " + checkEmail)
    }
}
else{
    alert("Thank you, we will not bother you again.")
}
