
//Task01
/*
var firstImg=document.getElementById("img1");
var images=["1.jpg","2.jpg","3.jpg","4.jpg"];
var count=0;
function backwardFun(){
    count--;
    if(count<0){
        count=images.length-1;
        firstImg.src=images[count];

    } else{
        firstImg.src=images[count];

    }
}
function forwardFun(){
    count++;
    if(count>=images.length){
        count=0;
        firstImg.src=images[count];
    } else{
        firstImg.src=images[count];

    }
}

var var_interval;
function playFun() {
    var_interval= setInterval(function() {
        count++;
        if(count>=images.length){
            count=0;
            firstImg.src=images[count];
        } else{
            firstImg.src=images[count];
    
        }
    }, 1000);
    
}
function stopFun() {
    clearInterval(var_interval);
}
*/

// Task02

var count_interval;
var counter=1;
function startCounter() {
    var count_paragraph =document.getElementById("saved");
    count_interval= setInterval(function() {
        count_paragraph.innerHTML=counter++;
    }, 1000);
    
}
function StopCounter() {
    clearInterval(count_interval);
}


// Task03

function downloadFun() {
    var text= document.getElementById('txt');
    text.style.display = "block";
    setTimeout(function() {
        text.innerHTML = "<a href='https://www.LinkedIn.com'>Your linkedIn Website</a>";
    }, 2000);
}


// Task04
/*
 Google puts authorities to restrict move and resize its website so we use another page
function openFun() {
    googleWindow = window.open("http://www.google.com/","");
    googleWindow.focus();
}
*/
/*
var googleWindow;
console.log(screen)
console.log(navigator)
function openFun() {
    googleWindow = window.open("/test.html","" , "width=100 , hieght = 50");
    googleWindow.focus();
}
function closeFun() {
    googleWindow.close();
}
function moveToFun() {
    googleWindow.moveTo(200, 100);
    googleWindow.focus();
}
function moveByFun() {
    googleWindow.moveBy(50, 50);
    googleWindow.focus();
}
function resizeToFun() {
    googleWindow.resizeTo(200, 100);
    googleWindow.focus();
}
function resizeByFun() {
    googleWindow.resizeBy(50, 50);
    googleWindow.focus();
}
*/

// Task05
/*
var i =1
function funOfAdd(){
     var nameVar =document.getElementById("name");
     var valueOfName= nameVar.value;
     var ageVar = document.getElementById("age");
     var valueOfAge= ageVar.value;

     var table = document.getElementById("tableID");
   
     var row = document.createElement("tr")
    
     var c1 = document.createElement("td")
     var c2 = document.createElement("td")
     var c3 = document.createElement("td")
    
    
     c1.innerText = i++
     c2.innerText = valueOfName
     c3.innerText = valueOfAge
    
    
    
     row.appendChild(c1);
     row.appendChild(c2);
     row.appendChild(c3);
    
    
     table.appendChild(row)
}
*/

