/* Task01
function firstTask(a,b) {

    if(arguments.length<2 || arguments.length>2 )
    throw ("You must enter only two parameters");
}
firstTask(10,11,11);
*/

/* Task02
document.addEventListener("contextmenu",function (e) {
    e.preventDefault();
    
},false)
function secondTask(a,b) {
    var n=arguments.length;
    if(arguments.length == 0){
        throw("You must enter numbers")
       }else
       {
        for(var i=0; i<n ; i++){
            if(isNaN(arguments[i]))
               throw("You must enter only numbers")
              }
            }

        return(a+b)
    
    
}
console.log(secondTask("a",2));
*/

 /*Task03
function thirdTask() {
    var firstReversedArray=[];
    firstReversedArray.length=arguments.length
    for (var index = 0; index < arguments.length; index++) {
        firstReversedArray[index]= arguments[arguments.length-index-1];   
    }
    return firstReversedArray
}

function revFunArr() {
    var array=[];
    for (var i = 0; i < arguments.length; i++) {
        array[i]=arguments[i]
    }
    return array.reverse();
}
*/