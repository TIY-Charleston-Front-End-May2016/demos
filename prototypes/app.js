function Animal() {
  this.cells = true;
  this.eyes = "Maybe";
}

Animal.prototype.eat = function(food) {
  console.log("NOMNOMNOM. This animal ate: ", food);
}

function Dog(opts) {
  this.name = opts && opts.name ? opts.name : 'Snoopy';
  this.breed = opts && opts.breed ? opts.breed : 'beagle';
  this.age = opts && opts.age ? opts.age : 'puppy';
  this.gender = opts && opts.gender ? opts.gender : 'androgenous';


  // this.sleep = function() {
  //   sleepPID = setInterval(function() {
  //     console.log(`${that.name} is sleeping. ZZZzzz`);
  //   },5000)
  // }
  //
  // this.wake = function() {
  //   clearInterval(sleepPID);
  // }
}

Dog.prototype = new Animal();



Animal.prototype.sleep = function() {
  this.sleepPID = setInterval(() => {
    console.log(`${this.name} is sleeping. ZZZzzz`);
  },5000)
}

Animal.prototype.wake = function() {
  clearInterval(this.sleepPID);
}

Dog.prototype.bark = function() {
  console.log("WOOFWOOF");
}



function Puppy(opts) {
  Dog.call(this,opts);
  this.cuteness = opts.cute;
  this.awwwww = true;

}

Puppy.prototype = new Dog();

Puppy.prototype.yip = function() {
  console.log('yip');
}

var puppy = new Puppy({cute: 100000})






// function thing(henry)

// var name = "nathan"
// name === "nathan" ? console.log('I AM NATHAN') : console.log("I AM NOT");

var woody = {
  name: 'woody',
  breed: 'goldencorgie',
  age: 5.4,
  gender: 'male'
}

var mia = {
  name: 'mia',
  breed: 'germandshepard-ish',
  age: 2.5,
  gender: 'female'
}

var woody = new Dog(woody);
var mia = new Dog(mia);
var dog1 = new Dog();
var dog2 = new Dog();



//
// function Shape(x,y) {
//   this.x = x;
//   this.y = y;
// }
//
// Shape.prototype.position = function() {
//   console.log(`I AM LOCATED AT X: ${this.x}. Y: ${this.y}`);
// }
//
// var sh = new Shape(100,400);
//
// function Circle(x,y,radius) {
//   Shape.call(this,x,y);
//   this.radius = radius
// }
//
//
// Circle.prototype = new Shape;
// Circle.prototype.area = function() {
//   return Math.pow(this.radius,2) * Math.PI;
// }
// var circle = new Circle(10,20,5);
