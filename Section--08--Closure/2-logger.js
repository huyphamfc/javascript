'use strict'


function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}]: ${message}`);
    }
    return logger;
}

const err = createLogger('Error');
err('SyntaxError'); // [Error]: SyntaxError
err('Not found 404'); // [Error]: Not found 404

const log = createLogger('Log');
log('Hello, World!'); // [Log]: Hello, World!
log('JavaScript'); // [Log]: JavaScript