   let n=parseInt(Math.random()*100+1)
const guessSlot=document.querySelector('.guesses');
const guessRem=document.querySelector('.lastResult');
const loh=document.querySelector('.lowOrHi');
const submit=document.querySelector('#subt');
const startOver=document.querySelector('.resultParas');
const userGuess=document.querySelector('#guessField');
const p=document.createElement('p');

let num=[];
let guessN=1;
let playGame=true;

//condn and function
if(playGame){//available to play game 
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userGuess.value);
    validateGuess(guess);
  })
}

function validateGuess(guess){//checks if user-input is valid
  if(!isNaN(guess)&&guess>0&&guess<=100){
    num.push(guess)
    if(guessN===11){
      displayGuess(guess);
      displayMessage(`you lost! Number was ${n}`);
      endGame()
    }else{
      displayGuess(guess);
      checkGuess(guess)

    }
  }else{
       alert('enter valid number between 1-100')
  }
}
function checkGuess(guess){
  if(n===guess){
    displayMessage(`dayyyymmmm!!!.....u got it right !!`)
    endGame()
  }else if(n<guess){
    displayMessage(`oohhhh high-fii!!`)
  }else{
    displayMessage(`too low-keyyyy`)
  }
}
function displayGuess(guess){ ///cleaning up
  userGuess.value=''
  guessSlot.innerHTML+=`${guess} `
  guessN++;
  guessRem.innerHTML=`${12-guessN}`
}
function displayMessage(message){ ///dispalying outcome
  loh.innerHTML=message
}
function endGame(){ ///disabling userinput after trials
  userGuess.value=''
  userGuess.setAttribute('disabled','')
  p.classList.add('button') ////creating new button
  p.innerHTML=`<h2 id='newGame'>Start a new</h2>`;
  startOver.appendChild(p)
  playGame=false
  newGame()
}
function newGame(){ //reseting for the new game
  const newgame=document.querySelector('#newGame');
  newgame.addEventListener('click',function(e){
    //if(e.target=)
    n=parseInt(Math.random()*100+1)
     num=[];
    guessN=1;
    guessSlot.innerHTML=''
    guessRem.innerHTML=`${10-guessN}`
    userGuess.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true;
  })
}