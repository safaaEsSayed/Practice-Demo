//Task01
/*var name= prompt("Enter Your Name");
for(var i=1;i<=6;i++){
    document.writeln("<h" + i + ">name " + "ITI " + "</h" + i + ">");
   
};*/


//Task02
/*var num = parseInt(prompt("Enter Num"));
var sum =0;
while (!(num==0 || sum >100 )) {
    sum +=num;
    num = parseInt(prompt("Enter Num"));
}
document.writeln(sum);*/


//Task03
var count=0;
var name1= prompt("Enter Your Name");
for(var i=0;i<name1.length;i++)
{
    if (name1.charAt(i) == "e") 
    {
        count ++ ;
    }
    
}
document.writeln(count);


//Task04
/*var num = parseInt(prompt("Enter Num"));
if(num%3==0 && num%5==0)
{
    document.writeln("fizz buzz");
}
else if(num%3==0){
    document.writeln("fizz");
}
else if(num%5==0){
    document.writeln("buzz");
}
else{
    document.writeln("none");
}*/