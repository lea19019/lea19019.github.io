var t = document.getElementById('high').innerText;
var s = document.getElementById('speed').innerText;

if (t <= 50 && s >= 3) {
    var f = (35.74 + (.6215 * t) - (35.75 * Math.pow(s,.16)) + (.4275 * t * Math.pow(s,.16))).toFixed(2);
    document.getElementById('chill').innerHTML= f + " °F";
  } else {
    document.getElementById('chill').innerHTML= "N/A";
  }


