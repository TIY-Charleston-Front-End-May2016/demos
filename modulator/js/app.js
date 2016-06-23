// Import from node_modules/ directory
// var $ = require('jquery'); 
// 'import' the module from words.js
var words = require('./words');
// 'import' the module from nums.js
var nums = require('./nums');

window.addEventListener('load', function () {
    console.log('go time');

    /**
     * Set up an event handler on the capitalize button. When clicked,
     * use the capitalize() function from the words module.
     */
    var capitalize = document.getElementById('capitalize');
    capitalize.addEventListener('click', function () {
        var input = document.getElementById('in').value;
        var output = document.getElementById('out');

        // use capitalize() function from words module
        output.value = words.capitalize(input);
    });

    /**
     * Same thing for the 'add 2' button.
     */
    var add2 = document.getElementById('add-2');
    add2.addEventListener('click', function () {
        var input = document.getElementById('in').value;
        var output = document.getElementById('out');

        // use add2() function from nums module
        output.value = nums.add2(parseInt(input));
    });
});