// const beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//     function actuallyPrintingNames() {
//         for (let index = 0; index < names.length; index++) {
//             const name = names[index];

//             console.log(name + ' was found at index ' + index);
//         }
//     }
//     actuallyPrintingNames();
// }

// var magicalUnicorns; // the declaration gets hoisted to the top of the scope by itself
// console.log(magicalUnicorns); // we log it as undefined
// magicalUnicorns = "awesome"; // the assignment stays exactly where it was

// console.log(magicalUnicorns);
// let magicalUnicorns = "awesome!";
var foo = "bar";
function magic() {
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);


var foo;                  // 'foo' is a declaration, it's global and gets hoisted
function magic() {         // 'magic()' also gets hoisted to the top
    var foo;              // here 'foo' is declared within 'magic()' and gets hoisted to the top of its scope
    foo = "hello world";  // we assign a value to our function scoped 'foo'
    console.log(foo);     // we log it as 'hello world'
}
foo = "bar";              // here, we assign a value to the global 'foo'
magic();                  // magic is called, the first console.log runs
console.log(foo);         // finally we log the global foo

magicalUnicorns();
var magicalUnicorns = function () {
    console.log("Will it blend?");
}
console.log("Don't breathe this!");