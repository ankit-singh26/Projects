let userScore=0;
let compScore=0;
let userWin=true;
let choices=document.querySelectorAll(".choice");
let rst=document.querySelector("#reset");
let you=document.querySelector("#you");
let comp=document.querySelector("#comp");
let result=document.querySelector(".result");

let resetGame=()=>{
    userScore=0;
    compScore=0;
    you.innerText=userScore;
    comp.innerText=userScore;
    result.innerText="";
}

const showWinner=(userChoice,compChoice,userWin)=>{
    if(userWin){
        console.log("The user Won");
        userScore++;
        you.innerText=userScore;
        result.innerText=`${userChoice} beats ${compChoice}`;
    }else{
        console.log("computer Won");
        compScore++;
        comp.innerText=compScore;
        result.innerText=`${compChoice} beats ${userChoice}`;
    }
};

const draw=()=>{
    console.log("The Game was Draw");
};

const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const playGame = (userChoice) =>{
    const compChoice=genCompChoice();
    console.log("user choice = ",userChoice);
    console.log("Computer choice = ",compChoice);
    if(userChoice===compChoice){
        draw();
    }else if(userChoice=="rock"){
        userWin=(compChoice==="paper")?false:true;
        showWinner(userChoice,compChoice,userWin);
    }else if(userChoice=="paper"){
        userWin=(compChoice==="scissors")?false:true;
        showWinner(userChoice,compChoice,userWin);
    }else{
        userWin=(compChoice==="rock")?false:true;
        showWinner(userChoice,compChoice,userWin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let choiceId=choice.getAttribute("id");
        playGame(choiceId);
    });
});

rst.addEventListener("click",resetGame);