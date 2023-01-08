function Rectangle(_height , _width)
{
    this.height= _height;
    this.width = _width ;

    Rectangle.prototype.counter ++;
}


Rectangle.prototype.calcArea = function()
{
    console.log("area", this.height *  this.width);
};

Rectangle.prototype.calcPerimeter = function()
{
    console.log("perimeter",(this.height +  this.width) * 2);
};

Rectangle.prototype.toString = function()
{
    console.log(this.height);
    console.log(this.width);
    this.calcArea();
    this.calcPerimeter();
};

Rectangle.prototype.display = function()
{
   console.log("counter", Rectangle.prototype.counter) ;
};

Rectangle.prototype.counter = 0;

console.log(Rectangle.prototype);

var area = new Rectangle(7 , 3);
area.toString();

var perimeter = new Rectangle(5 , 8);
perimeter.display();