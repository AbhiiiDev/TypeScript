"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5));
//ARROW FUNCTIONS   
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log(isPaid);
};
loginUser("Abhishek", "av@gmail.com");
// BETTER WAY TO WRITE FUNCTIONS:
function betterFunction() {
    return "Yo";
}
betterFunction();
var isPaid = function (name) {
    console.log(name);
    return false;
};
isPaid("abhi");
