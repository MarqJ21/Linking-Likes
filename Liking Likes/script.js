var count1 = 9;
var count2 = 12;
var count3 = 9;
var L1 = document.querySelector("#like1")
var L2 = document.querySelector("#like2")
var L3 = document.querySelector("#like3")
function addLike1(){
    count1 ++;
    L1.innerHTML = count1 + " like(s)";
    
}

function addLike2(){
    count2 ++;
    L2.innerHTML = count2 + " like(s)";
}
function addLike3(){
    count3 ++;
    L3.innerHTML = count3 + " like(s)";
}