var person = {
  name: "Nathan",
  age: 28,
  hello: function() {
    console.log(this);
    console.log("Hello, is it me you're looking for, ", this.name);
  }
};

function Person(name,age,gender) {
  this.name = name;
  this.age = age;
  this.hello = function(somebody,momma,frank) {
    console.log(`${this.name} says hello to ${somebody}.  You have a lovely face, ${somebody}  WHERE IS MY MOMMA, ${momma}.  AND WHO THE FUCK IS ${frank}`);
  }


  //private variable
  // var gender = gender;
  // if(gender === "male") {
  //   // body.navbar.style.backgroundColor = "pink"
  // }
  // if(gender === "female") {
  //   // body.navbar.style.backgroundColor = "lightblue"
  // }
}


//
// var arr = ['naynay','jimjim','lasdfkal','loulou']
// var nathan = new Person('nathan',28,'male')
// var henry = new Person('henry',2)


function Hero(opts) {
  this.allegiance = 'good'
  this.name = opts && opts.name ? opts.name : 'Batman';
  this.health = opts && opts.health ? opts.health : 100;
  this.attack = function(enemy) {
    console.log(`OWWWW. ${this.name} beat ${enemy.name} with ${this.weapon.name}`)
    enemy.health -= this.weapon.damage;
    if(enemy.health <= 0) {
      console.error(`${enemy.name} has died`);
      enemy = null;
    } else {
      console.log("HEALTH IS AT: ", enemy.health)

    }
  }
  this.weapon = opts && opts.weapon ? opts.weapon : 'batarang';
}

function Villain(opts) {
  this.allegiance = 'bad';
  this.name = opts && opts.name ? opts.name : 'Joker';
  this.health = opts && opts.health ? opts.health : 100;
  this.attack = function(hero) {
    console.log(`WHY SO SERIOUS?. ${this.name} beat ${hero.name} with ${this.weapon.name}`)
    hero.health -= this.weapon.damage;
    if(hero.health <= 0) {
      console.error(`${hero.name} has died`);
      enemy = null;
    } else {
      console.log("HEALTH IS AT: ", hero.health)
    }
  }
  this.weapon = opts && opts.weapon ? opts.weapon : 'Laughing Gas'
}

function Weapon(opts) {
  this.name = opts ? opts.name : 'Wolfsbane';
  this.damage = opts ? opts.damage : Math.floor(Math.random() * 20);
}

var laserEyes = new Weapon({name: "LaserEyes", damage: 45});
var wolfsbane = new Weapon();
var bomb = new Weapon({name: "Joker Bomb", damage: 10});

var joker = new Villain({weapon: bomb});
var batman = new Hero({weapon: wolfsbane});
var superman = new Hero({name: "Superman", health: 98, weapon: laserEyes});
