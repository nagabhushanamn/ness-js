/**
 * http://usejsdoc.org/
 */

//"use strict"

/*
 * 
 * 2 ways , to create/define function in JS
 * 
 * a. function declaration b. function expression
 * 
 */

// a. function declaration
// console.log(add(12,12));
// function add(n1,n2){
// return n1+n2;
// }
// console.log(add(12,12));
// -----------------------------------------------------
// b. function expression
// console.log(add(12,12));
//
// var add=function sum(n1,n2){return n1+n2};
//
// console.log(add(12,12));
// ----------------------------------------------------
// function as values
// function sayHello(){
// console.log('hello');
// }
//
// var sayHi=sayHello;
// sayHi();
// ----------------------------------------------------
// function to arguments
//
// function f(greet) {
// //console.log('f()');
// if(greet){
// greet();
// }else{
// console.log("Hi");
// }
// }
// f();
// f(function(){console.log('Hello..');});
//
//
// var arr=[1,3,5,6,9,3,5,7,10];
// arr.sort();
// arr.sort(function(n1,n2){return n1-n2;});
// console.log(arr);
//
// ----------------------------------------------------
// function as return values
// function tng(){
// console.log('tng...');
// function learn(){
// console.log('learn...');
// }
// return learn;
// }
//
//
// var learnFunc=tng();
// learnFunc();
// ----------------------------------------------------
//
// function reflect(a,b,c){
// return arguments[0]+" "+arguments[1]+" "+arguments[3];
// }
//
// console.log(reflect(12,13,14));
// ----------------------------------------------------
// function f(){
// if(arguments.length===0){
// console.log('No arg f()');
// }
// }
// var f=new Function('');
// function f(a){
// console.log('one arg f()');
// }
// var f=new Function('');
// f(12);
// ----------------------------------------------------
// variables scope
/*
 * global scope function scope
 * 
 * 
 */

// var v=100;
//
// function f() {
// var v;
// console.log(v);
// v = 200;
// }
//
// f();
// ----------------------------------------------------

//
// function f(){
//	
// {
// var v=100;
// }
//	
// console.log(v);
//	
// }
//
// f();
// -------------------------------------------------------------

//function f() {
//	i = 100;
//}
//
//f();
//console.log(i);

// ------------------------------------------------------------

// "this" keyword

// why we need 'this' keyword ?

//var person={
//		name:'Nag',
//		sayName:function(){
//			console.log('im '+this.name);
//		}
//};
//
//var newPerson=person;
//person=null;
//
//newPerson.sayName();


// ------------------------------------------------------------

//global.name='GLOBAL';
//
//function sayNameForAll(){
//	console.log('im ' + this.name);
//}
////
////var p1 = {name : 'Nag',sayName : function() {console.log('im ' + this.name);}};
////var p2 = {name : 'Riya',sayName : function() {console.log('im ' + this.name);}};
//
//
//var p1={name:'Nag',sayName:sayNameForAll};
//var p2={name:'Riya',sayName:sayNameForAll};
//
//
//sayNameForAll();  // im ?      // function-invocation ; this --> 'global'
//p1.sayName();     // im Nag    // method  -invocation ; this --> invoker-obj
//p2.sayName();     // im Riya
//


// ------------------------------------------------------------

//
//var greetUtil={
//		sayName:function(message,endMessage){
//			console.log(message+' im '+this.name+" "+endMessage);
//		}
//};
//
//
//
//var p1={name:'Nag'};
//var p2={name:'Riya'};
//
//
//// Eager
////greetUtil.sayName.call(p1,"Hello","Bye");    // call or bind invocation  : this  --> to which obj's  func binded
//
//// Lazy
//var newF=greetUtil.sayName.bind(p1,"Hello","Bye");
//
//// click event
//newF();

//-----------------------------------------------------

//function Person(name,age){
//	this.name=name;
//	this.age=age;
//	this.sayName=function(){
//		console.log('im '+this.name);
//	};
//}
//
//var p1=new Person('Nag',31);  // constructor invocation : 'this' --> new object
//var p2=new Person('Riya',0.9);
//
//
//p1.sayName();
//p2.sayName();

//Person('Abc',30);

//-------------------------------------------------------



//in JS , func can be invoked in 4 ways

/*
 * a. function invocation     'this' --> global
 * b. method invocation       'this' --> invoker
 * c. call/bind invocation    'this' --> binded obj
 * d. constructor invocation  'this' --> new object 
 * 
 * 
 */

//-------------------------------------------------------

// Ques
//
//var trainer={
//		name:'Nag',
//		doTeach:function(){
//			
//			console.log(this.name +" teaching JS");
//			var me=this;
//			function learn(){
//				console.log("learning from "+me.name);
//			}
//			
//			//learn.call(this);  not good
//			learn();
//			
//		}
//};
//
//trainer.doTeach();

//-------------------------------------------------------------


// Function Closure

//function tng() {
//	console.log('tng.....');
//	var notes = 'JS Notes...';
//
//	function learn() {
//		console.log('learn with ' + notes);
//	}
//	return learn;
//}
//
//var learnF = tng();
//
//learnF();
//
//

//----------------------------------------------


// Module  - counter

function init(){
	
	var count=0;  // private
	
	// public
	return{
		getCount:function(){
			return count;
		},
		doCount:function(){
			count+=1;
		}
	};
}

var counterMod=init();

//---------------------------------------------

counterMod.doCount();
counterMod.doCount();

console.log(counterMod.getCount());








