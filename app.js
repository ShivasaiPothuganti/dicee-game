var dice = document.querySelectorAll("img");
function roll_player1(player_1)
{
    if(player_1==1)
    {
        dice[0].setAttribute("src","images/dice1.png");
    }
    else if(player_1==2)
    {
        dice[0].setAttribute("src","images/dice2.png");
    }
    else if(player_1==3)
    {
        dice[0].setAttribute("src","images/dice3.png");
    }
    else if(player_1==4)
    {
        dice[0].setAttribute("src","images/dice4.png");
    }
    else if(player_1==5)
    {
        dice[0].setAttribute("src","images/dice5.png");
    }
    else if(player_1==6)
    {
        dice[0].setAttribute("src","images/dice6.png");
    }
}
function roll_player2(player_2)
{
    
    if(player_2==1)
    {
        dice[1].setAttribute("src","images/dice1.png");
    }
    else if(player_2==2)
    {
        dice[1].setAttribute("src","images/dice2.png");
    }
    else if(player_2==3)
    {
        dice[1].setAttribute("src","images/dice3.png");
    }
    else if(player_2==4)
    {
        dice[1].setAttribute("src","images/dice4.png");
    }
    else if(player_2==5)
    {
        dice[1].setAttribute("src","images/dice5.png");
    }
    else if(player_2==6)
    {
        dice[1].setAttribute("src","images/dice6.png");
    }
}


document.querySelector("h1").textContent = "Refresh me";
var player_1 =Math.floor(Math.random()*6)+1;
var player_2 =Math.floor(Math.random()*6)+1;;
if(player_1<player_2)
{
    document.querySelector("h1").textContent = "Player 2 wins";
    roll_player1(player_1);
    roll_player2(player_2);
}
else if(player_2<player_1)
{
    document.querySelector("h1").textContent = "player 1 wins";
    roll_player1(player_1);
    roll_player2(player_2);
}
else{
    document.querySelector("h1").textContent = "Tie";
    roll_player1(player_1);
    roll_player2(player_2);
}