$(document).ready(function() {
  blogPage.init();
})

var blogPage = {
  init: function() {
    blogPage.styling();
    blogPage.events();
  },
  styling: function() {
    $('.blogs ul').html("");
    blogs.forEach(function(element,idx) {
      var blogHtmlStr = blogPage.htmlGenerator(blogTemplates.blogTmpl,element);
      $('.blogs ul').append(blogHtmlStr)
    });
  },
  events: function() {
    //Add New Post
    $("form button").on('click', function(event) {
      event.preventDefault();
      var newBlogPost = {
        title: $('input[name="title"]').val(),
        author: $('input[name="author"]').val(),
        content: $('textarea').val()
      };
      var htmlStr = blogPage.htmlGenerator(blogTemplates.blogTmpl,newBlogPost)
      blogs.push(newBlogPost);
      $('.blogs ul').append(htmlStr);
      $('.input-field').val("");
    })//end click event

    //Change pages
    $('header nav li').on('click', function(event) {
      event.preventDefault();
      var thingWeClickText = $(this).text();
      var ourClassToShow = "." + thingWeClickText.toLowerCase();

      if(thingWeClickText.toLowerCase() === 'home') {
        $(ourClassToShow).removeClass('hidden')
        $(ourClassToShow).siblings().addClass('hidden')
      } else {
        var htmlStr = blogPage.htmlGenerator(blogTemplates[thingWeClickText.toLowerCase()])
        $(ourClassToShow).removeClass('hidden').append(htmlStr);
        $(ourClassToShow).siblings().addClass('hidden')
      }
    })

    $('.blogs').on('click','.delete', function(event) {
      event.preventDefault();
      var obj = {
        title: $(this).siblings('h3').text().trim().replace("Title: ",""),
        content: $(this).siblings('p').text().trim()
      }
      window.glob = obj;
      blogPage.deleteBlog(obj);
      blogPage.styling();
    })
  },

  deleteBlog: function(blogOnPage) {
    // find blog to delete from our blog data;
    var positionOfBlog = blogs.findIndex(function(element) {
      return element.content === blogOnPage.content && element.title === blogOnPage.title;
    })
    blogs.splice(positionOfBlog,1);

  },

  templification: function(template) {
    return _.template(template);
  },

  htmlGenerator: function(template,data) {
    var tmpl = blogPage.templification(template);
    return tmpl(data);
  }

};
