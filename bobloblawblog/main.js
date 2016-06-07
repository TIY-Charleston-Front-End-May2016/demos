$(document).ready(function() {
  blogPage.init();
})

var blogPage = {
  url: 'http://tiny-tiny.herokuapp.com/collections/bobloblaws',
  blogs: [],
  init: function() {
    blogPage.styling();
    blogPage.events();
  },
  styling: function() {
    blogPage.getBlogs();
  },
  events: function() {
    //Submit Edit
    $('body').on('click', '#change-btn', function(event) {
      event.preventDefault();
      var $edit = $('#edit-fields')
      var objToUpdate = {
        id: $edit.data('id'),
        title: $edit.find("input[name='title']").val(),
        author: $edit.find('input[name="author"]').val(),
        content: $edit.find('textarea').text(),
      }
      console.log("TEST", objToUpdate)
      blogPage.updateBlog(objToUpdate)
      $edit.remove();


    })

    // Show Edit Fields
    $('.blogs').on('click','.edit',function(event) {
      event.preventDefault();
      var that = this;
      $.ajax({
        method: 'GET',
        url: blogPage.url + "/" + $(that).parent().data('id'),
        success: function(data) {
          var htmlToAppend = blogPage.htmlGenerator(blogTemplates.edit,data)
          $(that).parent().append(htmlToAppend)
        },
        error: function(err) {
          console.error("NO LIKEY", err);
        }
      })

    })

    //Add New Post
    $("form button").on('click', function(event) {
      event.preventDefault();
      var newBlogPost = {
        title: $('input[name="title"]').val(),
        author: $('input[name="author"]').val(),
        content: $('textarea').val()
      };
      blogPage.createBlog(newBlogPost);
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
      var blogId = $(this).parent().data('id');
      blogPage.deleteBlog(blogId);
    })
  },

  createBlog: function(blog) {
    $.ajax({
      url: blogPage.url,
      method: "POST",
      data: blog,
      success: function(data) {
        console.log("WE CREATED SOMETHING", data);
        var htmlStr = blogPage.htmlGenerator(blogTemplates.blogTmpl,data)
        blogPage.blogs.push(data);
        $('.blogs ul').append(htmlStr);

      },
      error: function(err) {
        console.error("OH CRAP", err);
      }
    })
  },

  updateBlog: function(blog) {

    $.ajax({
      method: 'PUT',
      url: blogPage.url + "/" + blog.id,
      data: blog,
      success: function(data) {
        console.log("UPDATED SUCCESSFULLY!!!", data);
        blogPage.getBlogs();
      },
      error: function(err) {
        console.error("I HAVE NO IDEA WHATS GOIGN ON", err);
      }
    })
  },

  getBlogs: function() {
    $.ajax({
      url: blogPage.url,
      method: "GET",
      success: function(data) {
        console.log("WE GOT SOMETHING", data);
        $('.blogs ul').html("");
        data.forEach(function(element,idx) {
          var blogHtmlStr = blogPage.htmlGenerator(blogTemplates.blogTmpl,element);
          $('.blogs ul').append(blogHtmlStr)
          blogPage.blogs.push(element);
        });
      },
      error: function(err) {
        console.error("OH CRAP", err);
      }
    })
  },
  deleteBlog: function(blogId) {
    // find blog to delete from our blog data;
    var deleteUrl = blogPage.url + "/" + blogId;
    $.ajax({
      url: deleteUrl,
      method: "DELETE",
      success: function(data) {
        console.log("WE DELETED SOMETHING", data);
        blogPage.getBlogs();
      },
      error: function(err) {
        console.error("OH CRAP", err);
      }
    })
  },

  templification: function(template) {
    return _.template(template);
  },

  htmlGenerator: function(template,data) {
    var tmpl = blogPage.templification(template);
    return tmpl(data);
  }

};
