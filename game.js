var beginningScenarios = ["1", "2", "3"];

var weaponList = ["stick", "fire poker", "tv remote"];

var questActive = confirm("do you want to start");

function getNumber (range){
    return Math.round(Math.random()* range);
}

function quest (beginningScenarios, weaponList){
    var getScenarios = beginningScenarios [ getNumber(beginningScenarios.length - 1)];
    
    var weapon = weaponList [ getNumber(weaponList.length - 1)];

    alert (getScenarios + " and " + weapon);
}

while (questActive){
    var getScenarios = beginningScenarios [ getNumber(beginningScenarios.length - 1)];
    
    var weapon = weaponList [ getNumber(weaponList.length - 1)];

    alert (getScenarios + " and " + weapon);

    var yes = confirm("do you want to play again?")

    if (yes){
        questActive = true;
    } else {
        questActive = false;
    }
}







