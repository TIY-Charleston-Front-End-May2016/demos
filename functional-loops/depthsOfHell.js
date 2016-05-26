// function sum() {
//   console.log("WHAT HAVE YOU GIVEN ME??: ", arguments);
//   console.log("argslength", arguments.length);
//   var sumOfNums = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     if(typeof arguments[i] === 'number') {
//       sumOfNums = sumOfNums + arguments[i];
//     }
//   }
//   console.log(sumOfNums);
//   return sumOfNums;
// }
//
// sum(1,2,3,4,{},300,66,'f u',201,6,7);


var students = ['damon','phillip','winston','amanda','caleb','geoff','gabe','logan','riggan','david']
var letters = ['a','b','c','d','e','f'];

// for(var i = 0; i < letters.length; i++) {
//   console.log(letters[i]);
// }

var longNames = students.forEach(function(element,idx,arr) {
  if(element.length > 4) {
    return element
  }
});

students.forEach(function(element,idx,arr) {
  console.log(`${idx} ). ${element} loves javascript`);
});

[1,2,3,4,5].map(function(element,idx,arr) {
  return element * 10 + "TO BIG"
});

[1,2,3,4,5].map(function(element,idx,arr) {
  return element * 10
}).map(function(element,idx,arr) {
  return element + "TO BIG";
});


var namesEndingA = students.filter(function(element,idx,arr) {
  return element[element.length - 1] === "a"
})

var greaterThan5 = students.filter(function(element,idx,arr) {
  return element.length > 5
});
