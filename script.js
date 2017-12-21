//OPEN

function openNav2() {
    document.getElementById("myNav2").style.width = "93%";
    document.getElementById("myNav2").style.zIndex = "5";
    document.getElementById("myNav3").style.zIndex = "4";
    setTimeout("closeNav3()", 501);
    document.getElementById("myNav4").style.zIndex = "3";
    setTimeout("closeNav4()", 501);
    document.getElementById("myNav5").style.zIndex = "2";
    setTimeout("closeNav5()", 501);
    document.getElementById("myNav6").style.zIndex = "1";
    setTimeout("closeNav6()", 501);
}

function openNav3() {
    document.getElementById("myNav3").style.width = "93%";
    document.getElementById("myNav3").style.zIndex = "5";
    document.getElementById("myNav2").style.zIndex = "4";
    setTimeout("closeNav2()", 501);
    document.getElementById("myNav4").style.zIndex = "3";
    setTimeout("closeNav4()", 501);
    document.getElementById("myNav5").style.zIndex = "2";
    setTimeout("closeNav5()", 501);
    document.getElementById("myNav6").style.zIndex = "1";
    setTimeout("closeNav6()", 501);
}

function openNav4() {
    document.getElementById("myNav4").style.width = "93%";
    document.getElementById("myNav4").style.zIndex = "5";
    document.getElementById("myNav2").style.zIndex = "4";
    setTimeout("closeNav2()", 501);
    document.getElementById("myNav3").style.zIndex = "3";
    setTimeout("closeNav3()", 501);
    document.getElementById("myNav5").style.zIndex = "2";
    setTimeout("closeNav5()", 501);
    document.getElementById("myNav6").style.zIndex = "1";
    setTimeout("closeNav6()", 501);
}

function openNav5() {
    document.getElementById("myNav5").style.width = "93%";
    document.getElementById("myNav5").style.zIndex = "5";
    document.getElementById("myNav2").style.zIndex = "4";
    setTimeout("closeNav2()", 501);
    document.getElementById("myNav3").style.zIndex = "3";
    setTimeout("closeNav3()", 501);
    document.getElementById("myNav4").style.zIndex = "2";
    setTimeout("closeNav4()", 501);
    document.getElementById("myNav6").style.zIndex = "1";
    setTimeout("closeNav6()", 501);
}

function openNav6() {
    document.getElementById("myNav6").style.width = "93%";
    document.getElementById("myNav6").style.zIndex = "5";
    document.getElementById("myNav2").style.zIndex = "4";
    setTimeout("closeNav2()", 501);
    document.getElementById("myNav3").style.zIndex = "3";
    setTimeout("closeNav3()", 501);
    document.getElementById("myNav4").style.zIndex = "2";
    setTimeout("closeNav4()", 501);
    document.getElementById("myNav5").style.zIndex = "1";
    setTimeout("closeNav5()", 501);
}

//CLOSE

function closeNav2() {
    document.getElementById("myNav2").style.width = "0%";
}

function closeNav3() {
    document.getElementById("myNav3").style.width = "0%";
}

function closeNav4() {
    document.getElementById("myNav4").style.width = "0%";
}

function closeNav5() {
    document.getElementById("myNav5").style.width = "0%";
}

function closeNav6() {
    document.getElementById("myNav6").style.width = "0%";
}

//DELAYED CLOSE

