function feetToMeter(feet){
    return 0.305*feet;
}

function metersToFeet(meters){
    return 3.279*meters;
}

let meters = +prompt('Input meters');
document.write( meters + ' meters = ' + metersToFeet(meters) + ' feet' + '<br>');
let feet = +prompt('Input feet');
document.write( feet + ' feet = ' + feetToMeter(feet) + ' meters');

