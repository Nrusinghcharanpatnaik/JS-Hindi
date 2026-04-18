// Immediately Invoked Function Expressions (IIFE) are functions that are executed immediately after they are defined. They are often used to create a new scope and avoid polluting the global namespace.

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Nrusingh')
