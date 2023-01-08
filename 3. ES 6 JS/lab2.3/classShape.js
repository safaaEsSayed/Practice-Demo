class Shape{
    constructor(){
  
      this.parameter = 0;
       this.area = 0;
    };
         calcArea(){
           
         }
         calcParameter(){
           
         }
         toString(){
          this.calcParameter();
          this.calcArea();
          console.log(`Area: ${this.area} , Parameter: ${this.parameter}`);
         }
  }
  
  export class Square extends Shape {
    constructor( _length = "length") {
      super();
           this.length = _length;
         }
      calcArea(){
          this.area= Math.pow(this.length,2) ;
       }
       calcParameter(){
           this.parameter= this.length*4 ;
       }
  }

  export class Rectangle extends Shape {
    constructor(_shapeHight = "shapeHight", _shapeWidth = "shapeWidth") {
      super();
      this.shapeHight = _shapeHight;
      this.shapeWidth = _shapeWidth;
    }
    calcArea(){
      this.area= this.shapeHight*this.shapeWidth ;
     }
    calcParameter(){
     this.parameter= (this.shapeHight+this.shapeWidth)*2 ;
     }
  }
  
  export class Circle extends Shape {
    constructor(_radius = "radius") {
      super();
      this.radius = _radius
    }
    calcArea(){
      this.area= Math.PI * (this.radius + this.radius) ;
    }
    calcParameter(){
      this.parameter= 2 * Math.PI * this.radius ;
    }
  }
  