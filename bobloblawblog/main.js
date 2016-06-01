var blogHtmlStr = "<ul>";
blogs.forEach(function(element,idx) {
  blogHtmlStr += `
    <li>
      <h3>Title: ${element.title}</h3>
      <p>${idx + 1}: ${element.content} </p>
      <h5>By: ${element.author} </h5>
    </li>
  `
});
blogHtmlStr += "</ul>"
$('.blogs').append(blogHtmlStr);

$("button").on('click', function(event) {
  event.preventDefault();
  var newBlogPost = {
    title: $('input[name="title"]').val(),
    author: $('input[name="author"]').val(),
    content: $('textarea').val()
  };
  var htmlStr = `
    <li>
      <h3>Title: ${newBlogPost.title}</h3>
      <p>${newBlogPost.content} </p>
      <h5>By: ${newBlogPost.author} </h5>
    </li>
  `
  blogs.push(newBlogPost);
  $('section ul').append(htmlStr);
  $('.input-field').val("");
})//end click event

$('li').on('click', function(event) {
  event.preventDefault();
  var thingWeClickText = $(this).text();
  var ourClassToShow = "." + thingWeClickText.toLowerCase();
  $(ourClassToShow).removeClass('hidden');
  $(ourClassToShow).siblings().addClass('hidden')
})

// $('li').first().on('click', function(event) {
//   console.log("THIS SHOULD BE CONTACT THING", this);
//   $('.contact').removeClass('hidden');
//   $('.blogs,.about').addClass('hidden');
// })
//
// $($('li')[1]).on('click', function(event) {
//   console.log("THIS SHOULD BE About THING", this);
//     $('.about').removeClass("hidden");
//     $('.blogs,.contact').addClass('hidden');
// })
//
// $($('li')[2]).on('click', function(event) {
//   console.log("THIS SHOULD BE About HOME", this);
//   $('.blogs').removeClass("hidden");
//   $('.about,.contact').addClass('hidden');
// })

// var otherPages = {
//   about: `
//   <div class="container jumbotron">
//     <h1>This is the about page</h1>
//     <p>
//       We are at the same level as the law.
//     </p>
//   </div>
//   `,
//   contact: `
//   <div class="container jumbotron">
//     <h1>Please do not contact me</h1>
//     <p>
//       I am above the law.
//     </p>
//   </div>
//   `
// }

//contact

// "<li><h3>Title: " + element.title + "</h3><p>" + idx + ":"
