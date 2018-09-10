var characters = {
    pacMan :{healthPower:120, attackPower: 8, counterAttack: 15},
    lucario :{healthPower:100, attackPower: 10, counterAttack: 5},
    wario :{ healthPower:150, attackPower: 5, counterAttack: 20},
    corrin :{ healthPower:180, attackPower: 3, counterAttack: 25}
    };

var myCharacter;
var opponent;
var characterName;
var opponentName;
var characterCard;
var opponentCard;
var score = 0;

function matchCharacter(character){
    for (var key in characters) {
        if (key == character){
            return characters[key];
        }
      
      }
    };

function checkScore(score){
    if(score == 3){
        $('#resetButton').css('visibility', 'visible');
        $('#instructions').text('You Are The Very Best!');
    }
};

function updateStats(){
   
    document.getElementById('pacMan').getElementsByClassName('healthPower')[0].innerHTML=('HP: '+characters.pacMan.healthPower);
    document.getElementById('pacMan').getElementsByClassName('attackPower')[0].innerHTML=('Attack: '+characters.pacMan.attackPower);
    document.getElementById('lucario').getElementsByClassName('healthPower')[0].innerHTML=('HP: '+characters.lucario.healthPower);
    document.getElementById('lucario').getElementsByClassName('attackPower')[0].innerHTML=('Attack: '+characters.lucario.attackPower);
    document.getElementById('wario').getElementsByClassName('healthPower')[0].innerHTML=('HP: '+characters.wario.healthPower);
    document.getElementById('wario').getElementsByClassName('attackPower')[0].innerHTML=('Attack: '+characters.wario.attackPower);
    document.getElementById('corrin').getElementsByClassName('healthPower')[0].innerHTML=('HP: '+characters.corrin.healthPower);
    document.getElementById('corrin').getElementsByClassName('attackPower')[0].innerHTML=('Attack: '+characters.corrin.attackPower); 
}

updateStats();

$( ".character" ).click(function() {
    if ($('#characterChoice').text().length == 0){
        characterCard = this;
        $('#characterChoice').append(characterCard) 
        characterName = this.id;
        character = matchCharacter(characterName);
        $('#instructions').text('Choose Your Opponent!');
        $(this).removeClass('character');
    } 
    else if ($('#opponent').text().length == 0 && this !== characterCard){
        opponentCard = this;
        $('#opponent').append(opponentCard) 
        opponentName = this.id;
        opponent = matchCharacter(opponentName);
        $('#instructions').text('Attack!');
        $('#attackButton').css('visibility', 'visible');
        $(opponentCard).removeClass('character');
    }
  });

$( "#attackButton" ).click(function(){
    opponent.healthPower -= character.attackPower;
        character.healthPower-=opponent.counterAttack;
        character.attackPower+=character.attackPower; 
    if(character.healthPower <= 0){
        $('#instructions').text('You Lose!');
        opponent = undefined;
        character = undefined;
        $('#attackButton').css('visibility', 'hidden');
        $('#instructions').text('You Lose!');
        $('#resetButton').css('visibility', 'visible');
    }
    else if(opponent.healthPower <= 0){
        $('#defeated').append(opponentCard)
        opponent = undefined;
        $('#attackButton').css('visibility', 'hidden');
        $('#instructions').text('Choose Your Next Opponent!');
        score++
        checkScore(score);
        $(opponentCard).addClass('character');
    }
    
    updateStats();
});



$( "#resetButton" ).click(function(){
    opponent = undefined;
    character = undefined;
    location.reload();
   
});
