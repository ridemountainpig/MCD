var check1 = 0;
var check2 = 0;
var check3 = 0;
var check4 = 0;
var check5 = 0;

document.getElementById("topBarNavSpan1").addEventListener("click", bottomRed1());
function bottomRed1() {
    if(check2 == 1){
        document.getElementById("red2").style.visibility = "hidden";
        check2 = 0;
    }
    if(check3 == 1){
        document.getElementById("red3").style.visibility = "hidden";
        check3 = 0;
    }
    if(check4 == 1){
        document.getElementById("red4").style.visibility = "hidden";
        check4 = 0;
    }
    if(check5 == 1){
        document.getElementById("red5").style.visibility = "hidden";
        check5 = 0;
    }
    document.getElementById("red1").style.visibility = "visible";
    check1 = 1;
}

document.getElementById("topBarNavSpan2").addEventListener("click", bottomRed2());
function bottomRed2() {
    if(check1 == 1){
        document.getElementById("red1").style.visibility = "hidden";
        check1 = 0;
    }
    if(check3 == 1){
        document.getElementById("red3").style.visibility = "hidden";
        check3 = 0;
    }
    if(check4 == 1){
        document.getElementById("red4").style.visibility = "hidden";
        check4 = 0;
    }
    if(check5 == 1){
        document.getElementById("red5").style.visibility = "hidden";
        check5 = 0;
    }
    document.getElementById("red2").style.visibility = "visible";
    check2 = 1;
}

document.getElementById("topBarNavSpan3").addEventListener("click", bottomRed3());
function bottomRed3() {
    if(check2 == 1){
        document.getElementById("red2").style.visibility = "hidden";
        check2 = 0;
    }
    if(check1 == 1){
        document.getElementById("red1").style.visibility = "hidden";
        check1 = 0;
    }
    if(check4 == 1){
        document.getElementById("red4").style.visibility = "hidden";
        check4 = 0;
    }
    if(check5 == 1){
        document.getElementById("red5").style.visibility = "hidden";
        check5 = 0;
    }
    document.getElementById("red3").style.visibility = "visible";
    check3 = 1;
}

document.getElementById("topBarNavSpan4").addEventListener("click", bottomRed4());
function bottomRed4() {
    if(check2 == 1){
        document.getElementById("red2").style.visibility = "hidden";
        check2 = 0;
    }
    if(check3 == 1){
        document.getElementById("red3").style.visibility = "hidden";
        check3 = 0;
    }
    if(check1 == 1){
        document.getElementById("red1").style.visibility = "hidden";
        check1 = 0;
    }
    if(check5 == 1){
        document.getElementById("red5").style.visibility = "hidden";
        check5 = 0;
    }
    document.getElementById("red4").style.visibility = "visible";
    check4 = 1;
}

document.getElementById("topBarNavSpan5").addEventListener("click", bottomRed5());
function bottomRed5() {
    if(check2 == 1){
        document.getElementById("red2").style.visibility = "hidden";
        check2 = 0;
    }
    if(check3 == 1){
        document.getElementById("red3").style.visibility = "hidden";
        check3 = 0;
    }
    if(check4 == 1){
        document.getElementById("red4").style.visibility = "hidden";
        check4 = 0;
    }
    if(check1 == 1){
        document.getElementById("red1").style.visibility = "hidden";
        check1 = 0;
    }
    document.getElementById("red5").style.visibility = "visible";
    check5 = 1;
}

function mcdUncle() {
    document.getElementById("topBarPic").src = "picture1.png";
}

document.getElementById("topBarPic").addEventListener("mouseover", inside())
document.getElementById("topBarPic").addEventListener("mouseleave", outside())

function inside() {
    document.getElementById("topBarPic").src = "picture1.png";
}

function outside() {
    document.getElementById("topBarPic").src = "https://www.mcdonalds.com/etc/designs/mcd/tw/zh-tw/_jcr_content/logo/image.img.jpg/1628667064270.jpg";
}