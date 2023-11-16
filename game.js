let rockBtn = document.getElementById('rock')
let paperBtn = document.querySelector("#paper")
let scissorBtn = document.querySelector("#scissor")

let playerScore = document.querySelector(".player-score")
let computerScore = document.querySelector(".computer-score")

userScore = 0;
compScore = 0;

let playHand = document.querySelector("#left")
let compHand = document.querySelector("#right")

playHand.style.visibility = "hidden"
compHand.style.visibility = "hidden"

function computerChoice(){
    let choice = Math.floor(Math.random() * 3) 
    let hand = "";
    if(choice ==0){

        compHand.src = "./assets/rock-hand.png"
        hand = 'rock';
    }
    else if(choice == 1){
        compHand.src = "./assets/paper-hand.png"
        hand = 'paper';
    }
    else if(choice == 2){
        compHand.src = "./assets/scissors-hand.png"
        hand = 'scissor';
    }
    return hand;
}

function score(hand1, hand2){
    if(hand1 == 'rock' && hand2 == 'rock'){}
    if(hand1 == 'paper' && hand2 == 'paper'){}
    if(hand1 == 'scissor' && hand2 == 'scissor'){}
    if(hand1 == 'rock' && hand2 == 'scissor'){
    userScore++
    }
    if(hand1 == 'rock' && hand2 == 'paper'){
        compScore++
    }
    if(hand1 == 'paper' && hand2 =='rock'){
        userScore++
    }
    if(hand1 == 'paper' && hand2 == 'scissor'){
        compScore++
    }
    if(hand1 == 'scissor' && hand2 == 'paper'){
        userScore++
    }
    if(hand1 == 'scissor' && hand2 == 'rock'){
        compScore++
    }

    playerScore.innerHTML = userScore;
    computerScore.innerHTML = compScore
}

var msg = document.querySelector('whowon')

rockBtn.onclick = () =>{
    playHand.style.visibility = 'inherit'
    compHand.style.visibility = 'inherit'
    
    playHand.src = "./assets/rock-hand.png"

    let hand1 = 'rock'
    let hand2 = computerChoice()
    score(hand1,hand2)
    message();
    console.log('hello')
}

paperBtn.onclick = () =>{
    playHand.style.visibility = 'inherit'
    compHand.style.visibility = 'inherit'
    
    playHand.src = "./assets/paper-hand.png"

    let hand1 = 'paper'
    let hand2 = computerChoice()
    score(hand1,hand2)
    message();
    console.log('hello')
}

scissorBtn.onclick = () =>{
    playHand.style.visibility = 'inherit'
    compHand.style.visibility = 'inherit'
    
    playHand.src = "./assets/scissors-hand.png"

    let hand1 = 'scissor'
    let hand2 = computerChoice()
    score(hand1,hand2)
    message();
    console.log('hello')
}

let turntill = 0;
function message(){
    let newmessage = document.querySelector("#whowon")
    turntill++;
    if(turntill == 15){
         if(userScore>compScore){
            newmessage.innerHTML = "You won the Game";
         }
         if(compScore>userScore){
            newmessage.innerHTML = "Computer Won";
         }
         if(compScore == userScore){
                newmessage.innerHTML = "Draw";
         }
    }
}
let again = document.querySelector("#pa-button")
again.addEventListener("click",()=>{
    location.href = "./game.html"
})
