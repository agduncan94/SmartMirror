var getTheTime = function() {
    var time = moment().format("h:mm:ss a")
    speak(time);
}

var getTheDate = function() {
    var date = moment().format('dddd MMMM Do YYYY')
    speak(date);
}

var setTimer = function(time, unit) {
    var milliseconds = "";
    if (unit == "minute" || unit == "minutes") {
        milliseconds = time * 60000;
    } else if (unit == "second" || unit == "seconds") {
        milliseconds = time * 1000;
    } else if (unit == "hour" || unit == "hours") {
        milliseconds = time * 3600000;
    } 
    setTimeout(timerEnd, milliseconds);
    speak("Timer has been set for " + time + " " + unit);
}


var setNote = function(time, unit, note) {
    var milliseconds = "";
    if (unit == "minute" || unit == "minutes") {
        milliseconds = time * 60000;
    } else if (unit == "second" || unit == "seconds") {
        milliseconds = time * 1000;
    } else if (unit == "hour" || unit == "hours") {
        milliseconds = time * 3600000;
    } 
    setTimeout(function() {printReminder(note)}, milliseconds);
    speak("You will be reminded in " + time  + " " + unit + " to " + note);
}

var timerEnd = function() {
    speak("Countdown has completed!");
}

var printReminder = function (note) {
    speak(note + " ");
}