let clicks = 0 

document.getElementById("btn").onclick = function() {
  
    clicks = clicks + 1;
    document.getElementById("totalclicks").innerHTML = "clicks: " + clicks;

};

document.getElementById("doubleclick").onclick = function() {

    clicks = clicks * 2;
    document.getElementById("totalclicks").innerHTML = "clicks: " + clicks;

};

document.getElementById("tripleclick").onclick = function() {

    clicks = clicks * 3;
    document.getElementById("totalclicks").innerHTML = "clicks: " + clicks;

};

document.getElementById("reset").onclick = function() {

    clicks = 0
    document.getElementById("totalclicks").innerHTML = "clicks: " + clicks;

};