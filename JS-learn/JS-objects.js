/**
 * http://usejsdoc.org/
 */

// var person={name:'Nag'};

// if(person.name){
// console.log('name property exist...');
// }
// if('name' in person){
// console.log('name property exist...');
// }
// --------------------------------------------------
//var person = {
//	name : 'Nag',
//	age : 31
//};
//for ( var prop in person) {
//	if (person.hasOwnProperty(prop)) {
//		console.log(prop + " " + person[prop]);
//	}
//}

//--------------------------------------------------

/*
 *  In JS, obj can have 2 types of properties
 *  
 *  a. data property
 *  b. accessor property
 */


//var person = {
//	_name : 'Nag',
//	set name(newName){
//		console.log('setiing new-name');
//		this._name=newName;
//	},
//	get name(){
//		console.log('getting name..');
//		return this._name;
//	}
//};
//
//person.name="New Nag";  // write  --> set
//
//console.log(person.name);

//--------------------------------------------------

"use strict";

var person={
		name:'Nag',
		age:31
};

//Object.defineProperty(person, 'name', {configurable:false,writable:false});


//Object.defineProperty(person, 'name', {configurable:true});
//delete person.name;
//person.name='No Name';

//Object.preventExtensions(person);
//Object.seal(person);
//Object.freeze(person);

//person.newProp="value";











