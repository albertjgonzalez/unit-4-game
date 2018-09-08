var pacMan = {
    healthPower:120,
    attackPower: 8,
    counterAttack: 15,
}
var lucario = {
    healthPower:100,
    attackPower: 10,
    counterAttack: 5,
}
var wario = {
    healthPower:150,
    attackPower: 5,
    counterAttack: 20,
}
var corrin = {
    healthPower:180,
    attackPower: 3,
    counterAttack: 25,
}

$( ".character" ).click(function() {
    if ($('#characterChoice').text().length == 0){
        $('#characterChoice').append(this)    
    }
    
   
  });
