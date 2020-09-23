console.log("mitjsvirker")


function validateForm() {
    var a = document.getElementById("a").value;
    alert(a)
    if (a == "a") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
    var b = document.getElementById("b").value;
    alert(a)
    if (b == "b") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
    var d = document.getElementById("d").value;
    alert(a)
    if (d == "d") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
    var e = document.getElementById("e").value;
    alert(a)
    if (e == "e") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
    var f = document.getElementById("f").value;
    alert(a)
    if (f == "f") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
    var g = document.getElementById("g").value;
    alert(a)
    if (g == "g") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
    var i = document.getElementById("i").value;
    alert(a)
    if (i == "i") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
    var k = document.getElementById("k").value;
    alert(a)
    if (k == "") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
    var l = document.getElementById("l").value;
    alert(a)
    if (l == "l") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
    var m = document.getElementById("m").value;
    alert(a)
    if (m == "m") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
    var n = document.getElementById("n").value;
    alert(a)
    if (n == "n") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
    var o = document.getElementById("o").value;
    alert(a)
    if (o == "o") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
    var r = document.getElementById("r").value;
    alert(a)
    if (r == "r") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
    var s = document.getElementById("s").value;
    alert(a)
    if (s == "s") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
    var t = document.getElementById("t").value;
    alert(a)
    if (t == "t") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
    var v = document.getElementById("v").value;
    alert(a)
    if (v == "v") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
    var y = document.getElementById("y").value;
    alert(a)
    if (y == "y") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
    var ae = document.getElementById("ae").value;
    alert(a)
    if (ae == "æ") {
        alert("nice")
    }
    else {
        alert("gohome")
    }
}

/*
opgave 2
*/

var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                document.getElementById("myProgress ") = width + "%";
            }
        }
    }
}