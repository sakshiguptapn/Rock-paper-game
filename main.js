let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");


const msg = document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");

const compScorePara =document.querySelector("#comp-score");

const genComputerChoice = () =>{

    const options = ["roke","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    // rock , paper ,scissors
    return options[randIdx];
};
const drawGame =() =>{
    console.log("game was draw");
    msg.innerText = "game was draw. play again";
    msg.style.backgroundColor ="#081b31";

};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
};


const playGame =(userChoice) =>{
    console.log("user choice =",userChoice);
    //generate coputer choice  -> moduler

    const compChoice = genComputerChoice();
    console.log("comp choice=",compChoice);


    if(userChoice === compChoice){
        //draw Game
      drawGame();

    }
    else{
        let userWin = true;
        if(userChoice ==="roke"){
            //scissors , paper
            userWin = compChoice === "Paper"?false: true;
        }
        else if(userChoice ==="paper"){
          userWin = compChoice ==="scissors"?false: true;
        }
        else{
            // roke ,paper
            userWin = compChoice ==="roke"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}; 



choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice= choice.getAttribute("id");
         console.log("choice was clicked",userChoice);
         playGame(userChoice);
    });

});