// Function of rolling dice
function rollDice(number_of_faces){

    return Math.floor(Math.random() * number_of_faces) + 1;

}

// Function of 'onclick' button event
function processRollingDice(number_of_faces){

    let lRollingDiceResult = rollDice(number_of_faces);
    
    document.getElementById("btnRollD" + number_of_faces).innerText = lRollingDiceResult;
}

// Testing rolling dice of D6
for (let index = 0; index < 100; index++) {

    let lresult = rollDice(6);
    
    if ( 0 > lresult || lresult > 6) { error }
    
}

// testing rolling dice of D10
for (let index = 0; index < 100; index++) {

    lresult = rollDice(10);
    
    if ( 0 > lresult || lresult > 10) { error }
    
}