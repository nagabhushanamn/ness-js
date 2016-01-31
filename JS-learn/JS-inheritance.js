/**
 * http://usejsdoc.org/
 */

function Person(name, age) {
	this.name = name;
	this.age = age;
	// this.sayName=function(){
	// console.log('im '+this.name);
	// };
}
//
Person.prototype.sayName = function() {
	console.log('im ' + this.name);
};

var p1 = new Person('Nag', 31);


var p11=Object.create(p1);
//console.log(p11.name);
p11.name='New Naga';
console.log(p1.name);
console.log(p11.name);


//-----------------------------------






