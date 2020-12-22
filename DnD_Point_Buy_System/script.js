// TO DO: build plus and mius functions with:
    // DONE: get the p value for that container and not the others
    // DONE: increment or decrement the current value and take one from remaining score
    // DONE: have a check for numbers that go to 10 and 11 and take two from remaining score
    // DONE: have a check to prevent numbers going outside the range of 5-11
// DONE: Have a check to disable the functions should pointsRemaining be 0 and 

var pointsRemaining = 20;

function plusStat(statType){
    let statNumber = parseInt(document.getElementById(statType).innerHTML);
    if (pointsRemaining === 0){
        document.getElementById('notify').innerHTML = "Sorry, you are out of points to spend.";
        document.getElementById('notify').style.color = 'black';
    } else if (statNumber < 11) {
        if (statNumber === 9 || statNumber === 10) {
            statNumber++;
            pointsRemaining = pointsRemaining - 2;
            document.getElementById('points-remaining').innerHTML = pointsRemaining;
            document.getElementById(statType).innerHTML = statNumber;
            document.getElementById('notify').innerHTML = "-";
            document.getElementById('notify').style.color = 'white';
        } else {
            statNumber++;
            pointsRemaining--;
            document.getElementById('points-remaining').innerHTML = pointsRemaining;
            document.getElementById(statType).innerHTML = statNumber;
            document.getElementById('notify').innerHTML = "-";
            document.getElementById('notify').style.color = 'white';
        }
    } else {
        document.getElementById('notify').innerHTML = "Sorry, you can't go past 11.";
        document.getElementById('notify').style.color = 'black';
    }
}

function minusStat(statType){
    let statNumber = parseInt(document.getElementById(statType).innerHTML);
    if (pointsRemaining === 20){
        document.getElementById('notify').innerHTML = "You are limited to a maximum of 20 points.";
        document.getElementById('notify').style.color = 'black';
    } else if (statNumber > 5) {
        if (statNumber == 11 || statNumber == 10) {
            statNumber--;
            pointsRemaining = pointsRemaining + 2;
            document.getElementById('points-remaining').innerHTML = pointsRemaining;
            document.getElementById(statType).innerHTML = statNumber;
            document.getElementById('notify').innerHTML = "-";
            document.getElementById('notify').style.color = 'white';
        } else {
            statNumber--;
            pointsRemaining++;
            document.getElementById('points-remaining').innerHTML = pointsRemaining;
            document.getElementById(statType).innerHTML = statNumber;
            document.getElementById('notify').innerHTML = "-";
            document.getElementById('notify').style.color = 'white';
        }
    } else {
        document.getElementById('notify').innerHTML = "Sorry, you can't go below 5.";
        document.getElementById('notify').style.color = 'black';
    }
}

