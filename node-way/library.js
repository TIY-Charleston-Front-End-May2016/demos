'use strict'
let fs = require('fs');

module.exports = Library;

function Library() {
    this.nextId = 4;

    this.books = [];
    this.load();

    return this;
}

Library.prototype.load = function () {
    let that = this;

    // where to read from, what 'encoding' (format) its in, what to do once we've read it
    fs.readFile('data/books.json', 'utf8', function (err, contents) {
        // Once we get the data back
        console.log('Loaded book list.');
        that.books = JSON.parse(contents);
    });
};

Library.prototype.save = function () {
    // where to put it, what to put there
    fs.writeFile('data/books.json', JSON.stringify(this.books));
}

Library.prototype.add = function (book) {
    book.borrowed = false;
    book.id = this.nextId++;

    this.books.push(book);
};

Library.prototype.borrow = function (id) {
    for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].id === id) {
            this.books[i].borrowed = true;
        }
    }

    // Record the borrowing
    this.save();
};

Library.prototype.getAll = function () {
    return this.books;
};