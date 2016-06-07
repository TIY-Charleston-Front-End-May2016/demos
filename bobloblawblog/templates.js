var blogTemplates = {
    blogTmpl: `
      <li data-id='<%= _id %>'>
        <h3>Title: <%= title %></h3>
        <p><%= content %> </p>
        <h5>By: <%= author %> </h5>
        <br>
          <button class="delete">Delete</button>
          <button class="edit">Edit</button>
      </li>

    `,
    about: `
        <h1>This is the about page</h1>
        <p>
          We are at the same level as the law.
        </p>
    `,
    contact:`
            <h1>Please do not contact me</h1>
            <p>
              I am above the law.
            </p>
    `,
    edit: `
      <div id="edit-fields" data-id='<%= _id %>'>
        <input type="text" name="title" value="<%= title %>" />
        <textarea><%= content %></textarea>
        <input name="author" type="text" value="<%= author %>" />
        <input type="submit" value="EDIT ME" id="change-btn" />
      </div>
    `
  }
