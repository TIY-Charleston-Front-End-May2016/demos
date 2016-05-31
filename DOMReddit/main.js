var ul = document.createElement('ul')
document.body.appendChild(ul);

var stuff = data.data.children.map(function(element) {
  return {
    title: element.data.title,
    ups: element.data.ups,
    url: element.data.url
  }
}).forEach(function(element) {
  var li = document.createElement('li');
  var a = document.createElement('a');
  a.textContent = element.title;
  a.setAttribute('href',element.url)
  a.textContent += element.ups;
  li.appendChild(a);
  ul.appendChild(li);
})


// Change CSS of First Item
document.querySelector('li').style.fontSize = "4em"
document.querySelector('li').style.fontFamily = "helvetica";

// Change CSS of 6th Item
var li = document.querySelectorAll('li')[5];
li.style.backgroundColor = "orange"

//Get all elements that are list items and turn them to an array so you can loop over them.
var list = document.querySelectorAll('li');
list = Array.from(list);
