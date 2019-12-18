function test() {   // function definition    
    console.log("function called") 
 } 
 test()     


 //function defined 
function greet():string { //the function returns a string 
    return "Hello World" 
 } 
 
 //Returning Functions
 function caller() { 
    var msg = greet() //function greet() invoked 
    console.log(msg)
 } 
 
 //invoke function 
 caller()

 function test_param(n1:number,s1:string) { 
    console.log(n1) 
    console.log(s1) 
 } 
 
 test_param(123,"this is a string")