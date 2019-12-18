function test() {
    console.log("function called");
}
test();
//function defined 
function greet() {
    return "Hello World";
}
//Returning Functions
function caller() {
    var msg = greet(); //function greet() invoked 
    console.log(msg);
}
//invoke function 
caller();
function test_param(n1, s1) {
    console.log(n1);
    console.log(s1);
}
test_param(123, "this is a string");
