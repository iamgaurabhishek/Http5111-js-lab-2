//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
        var username = "dart";
		// Correct password
        var password = "vader";
		// user name input
        var checkUser;
		// password input
        var checkPassword;


//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
checkUser = prompt("Enter the valid user name?");
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(checkUser);
//5. CREATE POPUP BOX FOR PASSWORD
checkPassword = prompt("Enter the password of " + username + " a valid one!!");
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(checkPassword);
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(checkUser === username && checkPassword === password){
    alert("Welcome back " + username);
    console.log("Login successful");
}
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE


//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
else{
    alert("Sorry wrong password / username");
    console.log("Login Fail");
}