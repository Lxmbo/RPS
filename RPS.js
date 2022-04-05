        
         //calls our main function to start the game
    
        /*function game(){
                               
            for(i=0;i<5;i++){ //loops playRound 5 times
            
               if(i===4){
                console.log('player score = '+playerScore)
                console.log(`computer score = ${computerScore}`)
                    if (playerScore>computerScore){ //compares scores to predict winner and loser
                        alert('YOU WIN!')
                    }else if(playerScore==computerScore){S
                        alert('TIE GAME!')
                    }else{
                        alert("YOU'VE LOST")
                    }
                }
            */
            
            let playerScore =0;
            let computerScore =0;


            const rock = document.querySelector('#rock');
            const paper = document.querySelector('#paper');
            const scissors = document.querySelector('#scissors');
            rock.addEventListener('click',()=>{playRound('rock')})
            paper.addEventListener('click',()=>{playRound('paper')})
            scissors.addEventListener('click',()=>{playRound('scissors')})
            console.log(playerScore)
            console.log(computerScore)

            
            const container = document.querySelector('body');
            const scoreContainer = document.createElement('div');
            scoreContainer.classList.add('scoreContainer');
            
            container.appendChild(scoreContainer)
            scoreContainer.textContent =`Player Score:  ${playerScore} || Computer Score: ${computerScore}`


            function playRound(playerInput){        
                if (playerScore===5 || computerScore === 5){
                    if (playerScore === 5){
                        alert('Player Wins!!!')
                        return
                    }else{
                        alert('Computer Wins!!!')
                        return
                    }
                }else
                
                console.log(playerInput)
                let playerSelection =0;
                if (playerInput == ""||null){ //no entry 
                    alert('Please Reload and Enter Rock Paper or Scissors')
                }else if(playerInput.toLowerCase() == "rock"){ //changes the input to an integer to compare later
                    playerSelection += 1;
                }else if(playerInput.toLowerCase() == "paper"){
                    playerSelection += 2;
                }else if(playerInput.toLowerCase() == "scissors"){
                    playerSelection += 3;
                }else alert("I feel as though you did not follow directions.")

                let computerSelection = Math.floor(Math.random()*3)+1; //computer chooses between 1-3
            
                if(computerSelection === 1){    // alerts computers choice
                    alert('The Computer Has Chosen Rock')
                }else if( computerSelection === 2){
                    alert('The Computer Has Chosen Paper')
                }else if(computerSelection === 3){
                    alert('The Computer Has Chosen Scissors')
                }
            
                
                
                if (playerSelection === computerSelection){     // compares player and computer to see who winsw
                    alert('ROUND TIE!!');
                }else if(playerSelection === 1 && computerSelection === 3){
                    alert('YOUR CHOICE HOLDS TRUE AND YOU HAVE WON THIS ROUND!!')
                    playerScore++;
                }else if (playerSelection < computerSelection || playerSelection === 3 && computerSelection === 1){
                    alert('YOU LOSE!');
                    computerScore++;
                }else{
                    alert('YOUR CHOICE HOLDS TRUE AND YOU HAVE WON THIS ROUND!!')
                    playerScore++;
                }
                
                scoreContainer.textContent = `Player Score: ${playerScore} || Computer Score: ${computerScore}`;
                if (playerScore === 5 || computerScore === 5){
                    if(playerScore>computerScore){
                        alert('PLAYER WINS')
                        return
                    }else{
                        alert('COMPUTER WINS!!')
                        return
                    }
                
                
            }else{}
            }   