const _ = require('lodash');

function assertEqual (actual, expected, message) {
    if (!_.isEqual(actual, expected)) {
        const error = new Error(message);
        Error.captureStackTrace(error, assertEqual);
        throw error;
    }
}

console.log(`\n[ ${Date().toString()} - Pelmorex Coding Interview ]\n`);

/*
 *  Interview questions will be sent to you at the start of the screen share conference call.
 */

// [PASTE INTERVIEW QUESTIONS HERE]

console.log('\n--- [END OF OUTPUT] ---\n');
