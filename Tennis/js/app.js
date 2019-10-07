console.log("Hello Jay!");

let player1Top = 383;
let player1TravelT = 0;
let player1Height = 33;
let player1Width = 63;
let player2Top = 383;
let player2Width = 99;
let player2Height = 83;
let ballRadius = 25;
let ballTop = 406;
let ballLeft = 642;
let ballTopTravel = 0;
let ballLeftTravel = 0;
let score1 = 0;
let score2 = 0;
let setScore1 = 0;
let setScore2 = 0;


let start = () =>{
    ballTop = 406;
    ballLeft = 642;
    if (Math.random() < 0.5){
        var court = 1;
    }else {
        var court = -1;
    }
    ballTopTravel = Math.random() * 5 + 3;
    ballLeftTravel = court * (Math.random() * 6 + 5);
};   


document.addEventListener("keydown", (e) => {
    if(e.key == "ArrowUp"){
        player1TravelT = -10;
    }
    if(e.key == "ArrowDown"){
        player1TravelT = 10;
    }
    // if(e.key == "ArrowLeft"){
    //     player1TravelL = -10;
    // }
    // if(e.key == "ArrowRight"){
    //     player1TravelL = 10;
    // }
}, false);

document.addEventListener("keyup", (e) => {
    if(e.key == "ArrowUp"){
        player1TravelT = 0;    
    }
    if(e.key == "ArrowDown"){
        player1TravelT = 0;    
    }
    // if(e.key == "ArrowLeft"){
    //     player1TravelL = 0;    
    // }
    // if(e.key == "ArrowRight"){
    //     player1TravelL = 0;
    // }
}, false);


window.setInterval(travel = () =>{
    player1Top += player1TravelT;
    player2Top += ballTopTravel;
    ballTop += ballTopTravel;
    ballLeft += ballLeftTravel;
    if(player1Top <= 176){
        player1Top = 176;
    }
    if(player1Top >= 600){
        player1Top = 600;
    }
    if(player2Top <= 96){
        player2Top = 96
    }
    if(player2Top >= 625){
        player2Top = 625;
    }
    if(ballTop <= 176 || ballTop >= 630){
        ballTopTravel = -ballTopTravel;
    }
    if(ballLeft <= 155){
        if (ballTop > player1Top - 75 && ballTop < player1Top + player1Height + 75)
        {
        ballLeftTravel = -ballLeftTravel;

    } else {
        score2+=15;
        if(score2 > 30){
            score2-=5
        }
        if(score2 > 40){
            score2-=50;
            score1 = 0;
            setScore2++;
        }
        start();
        alert('Point to Bowser!');

        if(setScore2 === 6){
            alert('BOWSER WINS!')
            ballLeft = 0;
            ballTop = 0;
        }
        
        if(setScore1 || setScore2 === 3){
            ballTopTravel = Math.random() * 7 + 3;
            ballLeftTravel = court * (Math.random() * 10 + 5);
        }

    }
}

    if(ballLeft >= 1104) {
        if (ballTop >= player2Top+6 && ballTop <= player2Top + 45){
            ballLeftTravel = -ballLeftTravel;
        }else {
            score1+=15;
            if(score1 > 30){
                score1-=5
            }
            if(score1 > 40){
                score1-=50;
                score2 = 0;
                setScore1++;
            } 
            alert('Point to Serena!')
            start();

        if(setScore1 === 6){
            alert('SERENA WINS!')
            ballLeft = 0;
            ballTop = 0;
        }

    }
    }
    

    document.getElementById("p1").style.top = (player1Top) + "px";
    document.getElementById("ball").style.top = (ballTop) + "px";
    document.getElementById("ball").style.left = (ballLeft) + "px"
    document.getElementById("p2").style.top = (player2Top) + "px";
    document.getElementById('score1').innerHTML = score1.toString();
    document.getElementById('score2').innerHTML = score2.toString();     
    document.getElementById('setScoreS').innerHTML = setScore1.toString();
    document.getElementById('setScoreB').innerHTML = setScore2.toString();     


}, 1000/70);










$(document).ready(function() {
    alert("Click to Begin");
});
