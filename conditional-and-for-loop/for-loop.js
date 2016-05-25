var gender = prompt("Are you male or female?");
gender = gender.toLowerCase();

if(gender === 'female') {
  // do female things
  console.log("YOU SAID YOU ARE FEMALE");
} else if (gender === 'male') {
  // do male things
  console.log("YOU SAID YOU ARE MALE");
  var shoesPlease = confirm('Are you interested in buying shoes?');
  if(shoesPlease) {
    // they like shoes
    var userShoes = prompt("Do you want 1). Nikes, 2). Cole Haans, 3). Chacos, 4). Sketchers 5). Crocs");
    switch(userShoes.toLowerCase()) {
      case '1' || 'nikes':
        console.log("GREAT CHOICE!!")
        break;
      case '2' || "cole haans":
        console.log("Interesting");
        break;
      case '3' || 'chacos':
        console.log("YOU hippie amazing human");
        break;
      default:
        console.log("looks like we are getting you new balances")
        break
    }
  } else {
    var keepCustomer = confirm('Are you sure you do not want any shoes?');
    while (true) {
       prompt(" I cannot allow you to leave. I have to feed my kittens");
    }
  }
} else {
  // We do not judge.
  console.log("WE DO NOT JUDGE");
}

// function sum(arr) {
//   debugger
//   var sumOfNum = 0;
//   for(var i = 0; i < arr.length; i++) {
//     sumOfNum = sumOfNum + arr[i];
//   }
//   return sumOfNum;
// }
//
// function sayHello() {
//   console.log("HI")
// }
// sayHello();
// sum([23432,90234, 2342]);
