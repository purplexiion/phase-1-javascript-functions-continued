// code your solution here

function saturdayFun (activity = `roller-skate`){
return `This Saturday, I want to ${activity}!`;
}
 function mondayWork (_activity =`go to the office`){
    return `This Monday, I will ${_activity}.`;
}
function wrapAdjective (dFault = `*`) {
        return function (Adjective = "special"){
        return`You are ${dFault}${Adjective}${dFault}!`; 
            };
}
wrapAdjective()();