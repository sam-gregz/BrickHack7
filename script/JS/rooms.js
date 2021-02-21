var game = document.querySelector('.game');
var chat = document.querySelector('.chat');
var broadcast = document.querySelector('.broadcast');
var home = document.getElementById("Home");
console.log(game);
console.log(home);

home.onclick = goHome;
game.onclick = goToGame;
chat.onclick = goToChat;
broadcast.onclick = goToBroadcast;

function goHome(){
    console.log("go home");
}

function goToGame(){
    console.log("go to game");
}

function goToChat(){
    console.log("go to chat");
}

function goToBroadcast(){
    console.log("go to broadcast");
}