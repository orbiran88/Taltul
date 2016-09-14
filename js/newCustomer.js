function Try() {

//var elemB = document.getElementById("exampleInputEmail1").value;
    "use strict";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://google.com", false); // false for synchronous request
    xmlHttp.send(null);
    window.alert("sometext");
}