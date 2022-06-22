// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin123" && password == "admin123"){
alert ("Login godkendt!");
window.location = "login.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("Du har "+attempt+" forsøg tilbage;");
alert("Brugernavn = 'admin123' Adgangskode = 'admin123'");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}