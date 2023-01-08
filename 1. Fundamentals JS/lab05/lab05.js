var formVar = document.getElementById("formId")
var button = document.getElementById("submitBtn")

document.addEventListener("contextmenu",function(e){
    e.preventDefault();
},false);

formVar.addEventListener("button",function(e)
{
    e.preventDefault();
})
function submitFormFun() {
    var name = document.getElementById("name").value
    var warning1= document.getElementById("nameWarning")

    var mail = document.getElementById("email").value
    var atPosition=mail.indexOf("@");  
    var dotPosition=mail.lastIndexOf(".")
    var warning2 = document.getElementById("mailWarning")

    var password= document.getElementById("pwd").value
    var warning3 = document.getElementById("passordWarning")

    var warning4= document.getElementById("genderWarning")

    var checkOfSports= document.getElementsByName("sport")
    var warning5 = document.getElementById("sportWarning")
    var count=0;

    var checkOfCountry= document.getElementById("countries")
    var warning6 = document.getElementById("countryWarning")    

   if(name==null || name==""){
        warning1.style.display = "block";
   }
        else{
            warning1.style.display = "none";
        }
        
   
   if(atPosition<1 || dotPosition<atPosition+2 || dotPosition+2>=mail.length ){
           warning2.style.display = "block";
        }else{
            warning2.style.display = "none";
         }
   
   if(password.length<8){
          warning3.style.display = "block";
     }else{
         warning3.style.display = "none";
         }

   if(document.getElementById('male').checked == false &&  document.getElementById('female').checked == false) {   
        warning4.style.display = "block";  
     }
     else{
        warning4.style.display = "none";
         }

    for (let index = 0; index < checkOfSports.length; index++) {
         if(checkOfSports[index].checked == true){
               count+=1
              }
        }
    if(count < 2 ){
        warning5.style.display = "block"; 
        }
        else{
            warning5.style.display = "none"; 
         }
    if(checkOfCountry.value == ""){
        warning6.style.display = "block"; 
     }
     else{
        warning6.style.display = "none";
    } 
    
}


function setFormFun() {
     document.getElementById("formId").reset();
}


// Task02
var input = prompt("Enter your key: ")
var indexx=0;
alert(input.charCodeAt(indexx))
/*var input = document.getElementById("inputTxt")
var result= input.value
var indexx=0;*/
function key(event) {
    var x = document.getElementById("warningKey");
    if (event.shiftKey) {
      x.innerHTML = "You pressed shift key";
      }else if (event.ctrlKey) {
        x.innerHTML = "You pressed ctrl key";
      } else if (event.altKey) {
        x.innerHTML = "You pressed alt key";
      } 
      /*else{
        x.innerHTML= result.charCodeAt(indexx);
      }*/

    }


