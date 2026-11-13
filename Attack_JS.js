// ============================================================
// Attack_JS — login check for the fake "Starry Skies" site.
// ============================================================
function verify() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username == "administrator" && password == "nYp0H27")
    if ((username == "administrator") && (password == "nYp0H27")) {
        window.location.replace("Attack_Hidden.html");
    }
    else {
        document.getElementById('fail').innerHTML = "Wrong Username or Password, please try again";
    }
}
setInterval(() => {
    document.getElementById('hint').innerHTML = 'Are you still stuck? You can use F12 or Ctrl+U on Chrome to view the sourcecode of the website'

}, 30000);
