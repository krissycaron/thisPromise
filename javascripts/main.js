// console.log("hi");
// what is .this ??
//console.log ALL the time with .this
//.this is ALWAYS and object console.log(.this);
//.this is the object that calls the place wher you are at

// anytime you use jquery you HAVE to use document.ready to make sure jquery is is loaded before the code runs
// $(document).ready(function()){
	// all the things go in here

// } wrap ENTIRE FILE WITH THIS FUNCTION!!!

$(document).ready(function(){
	//selected the button id and then on click you run that function. 
	$("#my-button").click(function(e){
		// console.log("event", e);
		console.log()
		// console.log("this", $(this)); //event.target as a jquery object
		// console.log("this", this); //event.target
	});
});

	// this.a = 37;
	// console.log(window.a); //37
		// if you console log "this" outside the function it will 
		//interact with the window 
		//.this is why you do not want a lot of global variables 
//Example 1

// var fubar = "42" //global variable 

// function baz(){
// 	console.log("baz")
// 	bar();
// }

// function bar(){
// 	console.log("bar");
// 	foo();
// }

// function foo(){
// 	console.log("foo");
// 	var fubar="13"
// 	console.log("this", this);//prints "window" since its not in a function.
// 	console.log("fubar", this.fubar);//42 prints the window global variable 
// }

// baz(); //baz is on window (execution context) this will retain the top level object

//Example 2

// var a = 3;

// function foo(){
// 	console.log("fubar", this);//obj
// 	console.log("a", this.a);//obj print the variable holding "a" 
// }

// var obj = {
// 	//two key value pairs
// 	a: 2,
// 	// key is value, foo is a function but not called
// 	monkey: foo
// }
// //thiswill go tto the variable "obj" and then it call the key of "monkey" and that will call foo function. 
// obj.monkey();
// foo(); // just console logging foo will print "window" because the foo function is sitting on the window level.

//it starts at monkey and goes up the chain finds window becasue no objects are defined, 

//window --> oject --> monkey "tree of .this"

// Example 3

// function foo(){
// 	console.log("this", this); //obj2 -- closest object to foo thats why it prints
// 	console.log("a", this.a); //32
// }

// var obj2 = {
// 	a: 32,
// 	foo:foo
// }

// var obj1 = {
// 	a:2,
// 	obj2:obj2
// }

// obj1.obj2.foo()//start with foo --> obj2 (first console is 32)


//Example 4

// function foo (){
// 	console.log("this", this);//window
// 	console.log("a", this.a);//global warming
// }

// var obj = {
// 	a: 32,
// 	foo:foo
// }
// var bar = obj.foo;
// var a = "global Warming";

//   // obj.foo(); obj, 2
// bar();

//Example 5 

 function foo (){
	console.log("this", this);//window 
	console.log("a", this.a);//a:global
}
//callback function passing a function and then calling a function
function doFoo(fn){
	return fn();
}

var obj = {
	a: 32,
	foo:foo
}

var a = "global";
//calling a function and passing that function obj and the foo.
//()
doFoo(obj.foo);

// doFoo(obj.foo); is the same as 
// doFoo(function(){
// 	 function foo (){
// 	console.log("this", this);//window 
// 	console.log("a", this.a);//a:global
// }





















