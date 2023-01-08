//Task01 OOP Shapes
/*
import * as Shapes from "/classShape.js";

let square = new Shapes.Square(9);
let rectangle = new Shapes.Rectangle(12, 25);
let circle = new Shapes.Circle(16);

 square.toString();
 rectangle.toString();
 circle.toString();
*/

//Task02 Generator
/*
  var student = {
       fname: "Safaa",
       lname: "Elblay",
       pass: 25092000,
       mail: "safaaelblasy013@gmail.com",
     };

 function* stdData() {
   for (const key in student) {
      yield `[${key},${student[key]}]`; 
   }
 }
 student[Symbol.iterator] = stdData;
 for (const iterator of student) {
     console.log(iterator);    
 }
 */

//Task03 Proxy
/*
let student = {};
let handler = {
    set: function (target, key, value){
        if(key=="name" && String(value).length >= 13)
        {
            target[key] = value;
            return true;
        }
        else if(key=="address" && typeof(value) == "string")
        {
            target[key] = value;
            return true;
        }
        else if(key == "age" && value >= 22 && value <=60)
        {
            target[key] = value;
            return true;
        }
        else{
            throw(`Invalid property`);
        }
        
    }
};

 let std = new Proxy(student, handler);
 std.name = "Safaa Elsayed";
 std.address = "Benha";
 std.age = 22;
 console.log(std);
 */

 