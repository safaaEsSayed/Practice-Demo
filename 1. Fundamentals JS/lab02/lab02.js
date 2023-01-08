//Task01
/*var arr=[] ;
var sum=0;
var multi=1;

for(var i=0 ; i<3 ; i++){
    arr[i]=parseInt(prompt("Enter elements"));
    sum += arr[i];
    multi *= arr[i];

}
var div= arr[0] / arr[1] / arr[2];
document.writeln("Sum of 3 values " + arr[0] + "+" + arr[1] + "+" + arr[2] + " = " + sum + "<br>");
document.writeln("Multiplication of 3 values " + arr[0] + "*" + arr[1] + "*" + arr[2] + " = " + multi + "<br>");
document.writeln("Division of 3 values " + arr[0] + "/" + arr[1] + "/" + arr[2] + " = " + div + "<br>"); 
*/


//Task02
/*var arr=[];
for(var i=0 ; i<5 ; i++){
    arr[i]=parseInt(prompt("Enter elements"));
}
document.writeln("You have entered the values of " + arr + "<br>")
var asc=arr.sort(function(a, b){return a - b});
document.writeln("your values after sorting ascending " + asc + "<br>");
var desc=arr.sort(function(a, b){return b - a});
document.writeln("your values after sorting ascending " + desc + "<br>");
*/


//Task03
/*var cirRadius= parseInt(prompt("Enter the value of a circle’s radius"));
var area =  Math.pow(cirRadius,2) * Math.PI;
alert("Area of circle is " + area) ; 
var value= parseInt(prompt("Enter the value to calculate its square root"));
alert("Square root is " + Math.sqrt(value));
var angle= parseInt(prompt("Enter angle"));
alert(Math.cos(angle*Math.PI/180));*/

//Task04
/*var input = prompt("enter txt");
var txt =[];
var letter =prompt("enter letter");
for(var i=0; i<input.length ;i++)
{
    if (input[i] == letter)
    txt.push(i);
}
for(var i = 0;i<txt.length;i++)
document.writeln(txt[i]);*/


//Task05
// select index for random not txt
/*var arr = ["Ali", "Ahmed", "Sandra", "Fatma", "Ali", "Eslam"];
for(var i=0;i<2;i++){
  var randomIndex = Math.floor(Math.random()*6);
  document.writeln(arr[randomIndex])
}*/
