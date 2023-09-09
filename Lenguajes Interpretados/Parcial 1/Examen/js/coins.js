const player = document.getElementById('player');
const scoreDisplay = document.getElementById('score');
const highscoreDisplay = document.getElementById('highscore');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');

let score = 0;
let highscore = localStorage.getItem('highscore') || 0;
let gameTimer;
let gameDuration = 500; 

function updateScore() 
{
    scoreDisplay.textContent = score;
    highscoreDisplay.textContent = highscore;
}

function randomPosition() 
{
    return Math.random() * (400 - 100);
}

function movePlayer(event) 
{
    if (event.key === 'ArrowLeft') 
    {
        let left = parseFloat(player.style.left) || 0;
        left -= 10;
        left = Math.max(left, 0);
        player.style.left = `${left}px`;
    } 
    else if (event.key === 'ArrowRight') 
    {
        let left = parseFloat(player.style.left) || 0;
        left += 10;
        left = Math.min(left, 360);
        player.style.left = `${left}px`;
    }
}

function startGame() 
{
    score = 0;
    updateScore();
    resetButton.disabled = true;
    startButton.disabled = true;
    player.style.display = 'block';

    gameTimer = setInterval(() => {
        const coin = document.createElement('div');
        coin.className = 'coin';
        coin.style.left = `${randomPosition()}px`;
        document.getElementById('game-container').appendChild(coin);

        const coins = document.getElementsByClassName('coin');

        for (let i = 0; i < coins.length; i++) 
        {
            const coin = coins[i];
            let top = parseFloat(coin.style.top) || 0;
            if (top < 400) 
            {
                top += 2; 
                coin.style.top = `${top}px`;
        
                if (top > 380 && Math.abs(parseFloat(coin.style.left) - parseFloat(player.style.left)) < 20) 
                {
                    coin.remove();
                    score++;
                    updateScore();
                }
            } 
            else 
            {
                coin.remove();
            }
        }

        gameDuration--;
        if (gameDuration <= 0) 
        {
            clearInterval(gameTimer);
            player.style.display = 'none';
            resetButton.disabled = false;
            startButton.disabled = false;
            if (score > highscore) 
            {
                highscore = score;
                localStorage.setItem('highscore', highscore);
            }
            updateScore();
        }
    }, 1000 / 60);
}

function resetGame() 
{
    gameDuration = 500;
    clearInterval(gameTimer);
    player.style.display = 'none';
    resetButton.disabled = true;
    startButton.disabled = false;
    document.querySelectorAll('.coin').forEach((coin) => coin.remove());
    updateScore();
}

document.addEventListener('keydown', movePlayer);
startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);
updateScore();