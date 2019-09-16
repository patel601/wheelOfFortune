
var name1;
var word;

var values=[175,750,"Bankrupt",350,250,600,400,150,200,250,400,450,150,200,100,200,300,400,500,100,200,300];
var words=["priyanka", "odell", "tired", "cactus", "hungry"];
var clues=["name", "football player", "mood", "plant", "mood"];
var board; //word made up of underlines and letters guessed
var choices= [];
var myGuess;
var totGuessed=0;
var myMoney1=0;
var myMoney2=0;
var myMoney3=0;
var rnum;
var money=false;
var play1= true;
var play2=false;
var play3=false;
var spin=true;
var thing=false;


//function that starts the game
function makeName(){
    name1= document.getElementById("txtName1").value;
    name2= document.getElementById("txtName2").value;
    name3= document.getElementById("txtName3").value;
    if (name1==" "|| name2=="" || name3==" " ){
        Alert("Type In A Name. Don't Be Lazy")
    }
    else{
        alert(name1 + " , Welcome To The Game You Fool ");
        alert(name2 + " , Welcome To The Game You Fool ");
        alert(name3 + " , Welcome To The Game You Fool ");
        initWord();
        thing=true;
    }

}


function initWord(){
    var n=Math.floor(Math.random()*words.length);
    word= words[n];
    clues=clues[n];
    makeWord();
    document.getElementById("showWord").innerHTML="Game Board:" +board;
    document.getElementById('clue').innerHTML="Your clue is:" + clues;
}

function makeWord(){
    var found=false;
    board="";
    for(var i=0; i<word.length;i++){
        found=false;
        spin=true;
        for(var j=0;j<choices.length; j++){
            if (choices[j]==word[i]){
                board=board+choices[j];
                found=true;
                spin=true;

            }

        }
        var d=0;
        if (found==false){
            board=board+ "_ ";
            spin=true;
            if(play1==true && d==0){
                play2=true;
                play1=false;
                play3=false;
                d++;
            }
            else if(play2==true && d==0){
                play3=true;
                play1=false;
                play2=false;
                d++;

            }
            else if(play3==true && d==0){
                play1=true;
                play2=false;
                play3=false;
                d++

            }

        }
    }
    document.getElementById("showWord").innerHTML= "Game Board: " + board;
}

function addMoney(){
    for(var i=0; i<word.length;i++){
        if(myGuess==word[i]){
            totGuessed= totGuessed+1;
            spin=true;
            if(play1==true){
                myMoney1= myMoney1+rnum;
                document.getElementById("mon1").innerHTML= "Player 1 Money=  "+ myMoney1;
            }
            else if(play2==true){
                myMoney2= myMoney2+rnum;
                document.getElementById("mon2").innerHTML= "Player 2 Money=  "+ myMoney2;
            }
            else if(play3==true){
                myMoney3= myMoney3+rnum;
                document.getElementById("mon3").innerHTML= "Player 3 Money=  "+ myMoney3;
            }
        }

        if(totGuessed=== word.length){
            if (play1==true){
                document.getElementById("win").innerHTML= "You Win Player 1!"
            }
            if (play2==true){
                document.getElementById("win").innerHTML= "You Win Player 2!"
            }
            if (play3==true){
                document.getElementById("win").innerHTML= "You Win Player 3!"
            }
            spin=true;
        }
    }
}

function genDollar()
{
    if (thing==true) {
        if (spin == true) {
            irnum = Math.floor(Math.random() * values.length);
            rnum = values[irnum];
            document.getElementById("dAmount").innerHTML = "You have spun:" + rnum;
            money = true;
            spin = false;
        }

    }


}

function guess(){
    if(money==false){
        alert("Please click SPIN Button First ");
    }
    else{
        myGuess= prompt("What letter would you like to guess?");
        choices.push(myGuess);
        makeWord();
        addMoney();
        money=false;
    }

}
