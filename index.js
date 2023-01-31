homeScore = document.getElementById('home');
guestScore = document.getElementById('guest');
newGameBtn = document.getElementById('new-game');
leader = document.getElementById('lead');

let point = 0;
let score = 0;



//function for the additions of point for home team

function add1Point(){
    point = point + 1;
    homeScore.textContent = point;
}

function add2Point(){
    point = point + 2;
    homeScore.textContent = point;
}

function add3Point(){
    point = point + 3;
    homeScore.textContent = point;
}


//functions for the additions of point for guest team

function addPoint1(){
    score = score + 1;
    guestScore.textContent = score;
}

function addPoint2(){
    score = score + 2;
    guestScore.textContent = score;
}

function addPoint3(){
    score = score + 3;
    guestScore.textContent = score;

}

function strtNewGame(){
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    score = 0;
    point = 0;
}

