var join = document.getElementById("Join");
var home = document.getElementById("Home");
var logIn = document.getElementById("Log In");
var about = document.getElementById("About");

home.onclick = goHome;
join.onclick = createAccount;
logIn.onclick = Enter;
about.onclick = aboutUs;

function createAccount(){
    console.log("hi");
}

function goHome(){
    console.log(home)
}

function Enter(){
    about.href
}

function aboutUs(){
    console.log("about");
}