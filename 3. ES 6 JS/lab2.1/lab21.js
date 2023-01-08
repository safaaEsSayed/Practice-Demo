//Task01
let var1 ="Safaa";
let var2= "Ba2a";
[var1, var2] = [var2, var1];

console.log("Nick Name:", var1);
console.log("Name:", var2)


//Task02

function result(...rest) {
    var max = Math.max(...rest);
    var min=Math.max(...rest);
    return max, min
    
  }

var arr=[25,12,2,16,20,9];
console.log(result(...arr));
   




//Task03

var fruits = ["apple", "strawberry", "banana", "orange","mango"]

//a   
      console.log(fruits.every(item => typeof item === "string"))

//b
       let elements=fruits.some((item) => item.startsWith('a'))
       console.log(elements)

//c
       let element=fruits.map((item) => item.startsWith('s') || item.startsWith('b') )
       console.log(element)
//d
      var newArr=["ahmed", "mohamed", "esraa", "safaa","koko"]
      newArr.map((item) => {
           return `I like ${item}`;
        })

//e
       fruits.forEach(element => {
        console.log("I like "+ element)
       });
      
       newArr.forEach(element => {
         console.log("I like "+ element)
       });

/*Retest
function check(fruits) {
  for(var i=0; i<fruits.length; i++){
    if(typeof fruits[i] != "string") {
       return false;
     }
  }
 
  return true;
 }
 console.log(fruits.every(check(fruits)))
 */