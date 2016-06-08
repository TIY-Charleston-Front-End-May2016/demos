// var sayHello;
// function sayHi() {
//   console.log('SAY HI');
// }
//
//
//
// console.log("GLOBAL PARENT", this);
// sayHi();
// sayHello();
//
// var sayHello = function() {
//   console.log('sayHello');
// }
//
// function sayHi() {
//   console.log('SAY HI');
// }


//step2

// var glob = parentFunc();

// const name = "nathan";
// console.log("name", name);
// name = "phillip";
// console.log('name', name);
// function parentFunc() {
//
//     var glob = "jimmy"
//     // console.log("INSIDE FUNC", glob)
//
//     function bob() {
//       // console.log(glob);
//     }
//     return glob;
// }
// console.log(glob);
//
//
// // parentFunc()

// const score = 0;
//
// function game() {
//   score = 0;
//
//   function increase() {
//     score++
//     console.log(score)
//   }
//
//   function decrease() {
//     score--
//     console.log(score)
//   }
//
//   return {
//     increase: increase,
//     decrease: decrease
//   }
// }

// console.log(this)
//
// var thing = {
//   whatAmI: function() {
//     // console.log(this);
//     console.log(this.name)
//
//   },
//   arr: [1,2,3,4,5],
//   mappy: function() {
//     this.arr.map(function(element) {
//       console.log(this);
//     })
//   },
//   name: 'dom',
//   age: 21
// }

// arguments
// call,apply

var arr = [1,2,3,4,5]
function sum(arr) {
  var sum = 0;
  arr.forEach(function(element) {
    sum += element
  })
  return sum
}

// pageBlog.init();
