
/**
 * This is what will be 'imported' when I require this module
 */
module.exports = {
    capitalize: function (word) {
        return word.toUpperCase();
    },

    lowercase: function (word) {
        return word.toLowerCase();
    },
};

///// ES 6 way //////
// export function capitalize(word) {
//     return word.toUpperCase();
// }

// ////// elsewhere.js //////
// import { capitalize } from 'words';
// capitalize('pizza');