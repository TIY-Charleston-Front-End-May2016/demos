// code goes here :)

var avg = items.reduce(function(accumulator,element,idx,arr) {
  if (idx === arr.length - 1) {
    return (accumulator + element.price) / arr.length;
  } else {
    return accumulator + element.price;
  }
},0)

// [1,2,3,4].reduce(function(accumulator,element,idx,arr) {
  // return accumulator + element;
// },0)

// var allPrices = items.map(function(element,idx,arr) {
//   return element.price;
// });
//
// var sum = 0;
// allPrices.forEach(function(element,idx,arr) {
//   sum = sum + element;
// })
//
// var avg = (sum / items.length).toFixed(2);
//
document.getElementById("answer1").innerHTML = `<h1> $${avg} </h1>`;

var priceBetween = items.reduce(function(accumulator,element,idx,arr) {
  if(element.price >= 14 && element.price <= 18) {
    accumulator.push(element.price)
  }
  return accumulator;
},[])
// var priceBetween = items.filter(function(element,idx,arr) {
//    return element.price >= 14 && element.price <= 18;
// })
// .map(getTitle)

document.getElementById("answer2").innerHTML = priceBetween.join("\n");


var gbp = items.filter(function(element,idx,arr) {
  return element.currency_code === "GBP";
})
.map(getTitle)

document.getElementById("answer3").innerHTML = gbp.join("\n");


var woodOnly = items.filter(function(element,idx,arr) {
  return element.materials.includes("wood");
})
.map(getTitle)

document.getElementById("answer4").innerHTML = woodOnly.join("\n");


var eightOrMore = items.filter(function(element,idx,arr) {
  return element.materials.length >= 8;
})
.map(function(element) {
  return {
    title: element.title,
    count: element.quantity,
    materials: element.materials
  }
})

var myHtml = eightOrMore.map(function(element) {
  var stringOfMaterials = "<ul>"
  element.materials.forEach(function(material) {
    stringOfMaterials += `<li> ${material} </li>`;
  });
  stringOfMaterials += "</ul>";
  return `<h1>${element.title}</h1>
          <h3>Quantiy: ${element.count}</h3>
          ${stringOfMaterials}
  `
})

document.getElementById("answer5").innerHTML = myHtml.join(" ");

var itemsBySeller = items.filter(function(element) {
  return element.who_made === "i_did";
}).length;

document.getElementById("answer6").innerHTML = itemsBySeller;


// return a title
function getTitle(obj) {
  return obj.title;
}
