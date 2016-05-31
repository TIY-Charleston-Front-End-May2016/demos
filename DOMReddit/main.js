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






// document.getElementById('body').appendChild(navBar);
