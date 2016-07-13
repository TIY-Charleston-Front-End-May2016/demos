'use strict'

// When you need a particular resource:
//      /library/book/{bookId}                  => route params
// When you want to tweak details:
//      /library/book?count=10&startswith=q     => query params
// When you have a lot of data to share (usually with POST):
//      /library/book                           => request body (maybe?) data: {}

/**
 * To serve local files, use `inert`. There are three steps to using it (see them
 * in action below):
 * 
 *  1. require('inert')
 *  2. 'register' module so hapi will let it handle some of your routes
 *  3. set up a route for getting static files. make it the last route.
 */

let http = require('http');
let hapi = require('hapi');
let boom = require('boom');
let inert = require('inert');

let Library = require('./library');
// where we're headed
let books = new Library();
let added = false;
// end imaginary code


const server = new hapi.Server();
server.connection({
    host: 'localhost',
    port: 7000,
});
server.register(inert, () => {});

// server.route({
//     method: 'GET',
//     path: '/library/nope',

//     handler: function (request, reply) {
//         reply(boom.badRequest("What are you THINKING?"));
//     },
// })

/*
    Goal:
    /library/go/boston?when=tomorrow&howlong=7
        route param: boston
        query params: tomorrow, 7
        request body: name, age
*/

// How to extract different information from your request (route params, 
// query params, request body).
server.route({
    method: 'POST',
    path: '/library/go/{where}',

    handler: function (request, reply) {
        console.log(`route params: ${request.params.where}`);
        console.log(`query params: ${request.query.when}, ${request.query.howlong}`);
        console.log(`request body: ${request.payload.name}, ${request.payload.age}`);
        
        reply();
    },
});

server.route({
    method: 'GET',
    path: '/library/books',

    handler: function (request, reply) {
        reply(books.getAll());
    },
});

server.route({
    method: 'POST',
    path: '/library/add',

    handler: function (request, reply) {
        if (added) {
            reply(boom.badRequest('Already added Huck'));
        } else {
            books.add({
                title: 'Huck Finn',
                author: 'Mark Twain',
            });

            added = true;

            reply();
        }
    },
});

server.route({
    method: 'POST',
    path: '/library/borrow/{bookId}',

    handler: function (request, reply) {
        books.borrow(parseInt(request.params.bookId));

        reply();
    },
})

/**
 * Static serving of files. Web requests are all GET requests, and the
 * path is basically saying "anything" here. Retrieve the specified files
 * from the public/ directory (where your gulpfile should be outputting
 * to) and return them.
 */
server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public/',
            redirectToSlash: true,
            index: true
        }
    }
});


server.start();

// Lots from http://blog.modulus.io/build-your-first-http-server-in-nodejs
// function requestHandler(request, response) {
//     if (request.url === '/library/books' && request.method === 'GET') {
//         console.log('they want books');

//         response.end(JSON.stringify({
//             name: 'Fred',
//             age: 47,
//         }));

//     } else {
//         console.log('nah, no books');

//         response.end(JSON.stringify({
//             name: 'Thom',
//             age: 48,
//         }));
//     }
// }

// // Set up the server
// let server = http.createServer(requestHandler);

// // Start it
// server.listen(8123, function () {
//     //Callback triggered when server is successfully listening. Hurray!
//     console.log("Server listening on: http://localhost:8123");
// });