//Task01 
/*
function success() {

    document.getElementById('img_success')
                    .style.display = "block";
    document.getElementById('img_error')
                    .style.display = "none";
    document.getElementsByClassName(btn1)
        .style.display = "none";              
}
function error() {
    document.getElementById('img_error')
                    .style.display = "block";
    document.getElementById('img_success')
                    .style.display = "none";
    document.getElementsByClassName(btn2)
        .style.display = "none";              
}
*/

//Task02
/*
var firstImg=document.getElementById("img1");
var images=["1.jpg","2.jpg","3.jpg","4.jpg"];
var count=0;
function forwardFun(){
    count++;
    if(count>=images.length){
        count=0;
        firstImg.src=images[count];
    } else{
        firstImg.src=images[count];

    }
}
function backwardFun(){
    count--;
    if(count<0){
        count=images.length-1;
        firstImg.src=images[count];

    } else{
        firstImg.src=images[count];

    }
}
*/
 
//Task03
/*

var divName= prompt("Enter the tag name");
tag=document.getElementsByTagName(divName)
alert(tag.length);
var classname= prompt("Enter the class");
c1=document.getElementsByClassName(classname)
alert(c1.length);

var theID= prompt("Enter the id");
var myID=document.getElementById(theID)
   if(myID){
    alert("true");
       }
   else{
    alert("false");
      }

var theName= prompt("Enter the name");
name1=document.getElementsByName(theName)
alert(name1.length);
*/


//Task04
/*
function changeHtml(){
var span= document.getElementById("span");
var output= span.innerHTML="<h3>You have changed your text</h3>"
}
function changeText(){
    var span= document.getElementById("span");
    var output2= span.innerText="<h3>You have changed your text</h3>"
}
function changeContent(){
    var paragraph= document.getElementById("paragraph1").textContent;
    document.getElementById("span").innerHTML = paragraph;
}


function changeStyle(){
    var value = document.getElementById("paragraph1")
    value.style.backgroundColor = "white";
    value.style.padding = "10px";
    value.style.color = "red";
}


function test() {
    var firstLink=document.getElementsByClassName("link1")
    var secondLink=document.getElementsByClassName("link2")
    firstLink[0].setAttribute("href", "https://www.LinkedIn.com");
    secondLink[0].setAttribute("href", "https://www.google.com.eg/");

}
*/


    
