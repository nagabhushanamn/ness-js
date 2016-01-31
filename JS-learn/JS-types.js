/**
 * http://usejsdoc.org/
 */

// simple types
//---------------------------

// string
//var name="Nag";
//var selection='a';

//console.log(typeof selection)

//// number
//var count=5;
//var cost=12.12;
//
//// boolean
//var found=true;
//found=false
//
//// null
//var obj=null;
//console.log(typeof obj);
//
//// undefined
//var v;
//console.log(typeof v);
//


//-------------------------

//var v=null;
//console.log(v===null);

//-------------------------

//var v="5";
//var vv=5;
//
//console.log(v===vv);

//-------------------------


// Reference Types --> objects

/*
 * 
 *  IN JS , we have 2 types objects
 *  
 *  1. Lang-Native objects
 *   
 *     e.g Date , Array , Object ...
 *  
 *  2. Host objects
 *  
 *     e.g browser
 *     
 *     Window , Document , XHR
 * 
 *     e.g Node JS
 *     
 *     Process
 * 
 */

//---------------------------------

/*
 * 
 *   IN JS , how to create JS obj?
 *   
 *   syntax
 *   
 *   new ConstructorFunction();
 *   
 *   e.g
 *   
 *   Object
 *   XMLHttpRequest
 * 
 */

//e.g

//var person=new Object();
//person.name="Nag";
//person.age=31;
//person.doWork=function(){
//	console.log('teach JS');
//};
//
//console.log(person.name);
//
//person.doWork();
//
//delete person.age;
//
//console.log(person.age);

//


//----------------------------------------------

/*
 *  some built-in types
 *  
 *  Object
 *  Array
 *  Function
 *  RegEx
 * 
 */

// Object

//var emp=new Object();
//emp.id=101;
//emp.name='Nag';
//emp.salary=1000.00;
//emp.doWork=function(){
//	console.log('emp work...');
//};

// literal style

//var newEmp={
//		id:101,
//		name:'nag',
//		salary:1000.00,
//		doWork:function(){
//			console.log('emp work...');
//		}
//};


//----------------------------------------------

// Array

//var arr=new Array();
//arr.push(10);
//arr[1]=20;
//
//// Literal style
//
//var newArr=[10,20];
//

//----------------------------------------------


// RegEx

//var re=new RegExp("\\d");
//console.log(re.test("4535"));
//
//// lieral style
//
//var newRe=/ \d /;
//

//----------------------------------------------

// Function

//var add=new Function("n1","n2","var result=n1+n2;return result;");
//console.log(add(12,13));

// Literal style

//function add(n1,n2){
//	var result=n1+n2;
//	return result;
//}
//
//console.log(add(12,13));
//

//----------------------------------------------



// How to access object properties ?


/*
 *  2-ways
 *  
 *  '.' notation
 *  
 *  '[]' notation
 * 
 */
//
//
//var person={
//		name:'Nag',
//		'full-name':'Nagabhushanam N'
//};
//
//
//console.log(person.name)
//console.log(person['name'])
//
//console.log(person['full-name']);
//
//var v='full-name';
//
//console.log(person[v]);

//--------------------------------------------------------




// Primitives as Objects

//var name='nag';
//console.log(name.toUpperCase());

/*
 *  var temp=new String(name);
 *  temp.toUpperCase();
 *  temp=null;
 * 
 */
//console.log(name);

//------
//
//var b=new Boolean(false);
////var b=false;
//
//if(b){
//	console.log('it will print..');
//}


/*
 * 
 *  In JS , falsy values are..
 *  
 *  0
 *  false
 *  null
 *  ""
 *  undefined
 *  
 *  
 * 
 */

//------------------------------------------------------





