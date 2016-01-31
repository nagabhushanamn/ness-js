/**
 * http://usejsdoc.org/
 */



/*
 * 1. class system 2. Loading classes on Demand 2. Working with data
 * 
 */

/*
 * class system:-
 * 
 * 
 * Ext.ClassManager 
 * Ext.Base
 * 
 * 
 * 
 * Ext.define : create a new class, extend a class, or whenever we need to apply
 * some override(s) in a class. 
 * 
 * Ext.create : This shorthand creates a new instance of a class, using either the fullname class, the alias class, or the
 * alternate name class
 * 
 * Ext.widget : This shorthand is used to create a widget
 * using the xtype (alias) property or a configuration object.
 * 
 * 
 * 
 * Naming Conventions:-
 * 
 * MyApp.utils-common.string-renderers (not good) 
 * MyApp.utils.Md5encyption(good)
 * MyApp.reportFormats.FM160 (good)
 * 
 * Names should be grouped into packages/namespaces
 * 
 * MyApp.EmployeeApp (good) MyApp.EmployeeApp.EmployeeClass ( not good )
 * 
 * The name for the top-level classes should be camel-cased
 * 
 * MyApp.grids.EmployeesGrid MyApp.data.clients.SalesReport
 * 
 * 
 * 
 * 
 */

// -----------------------------------------------------
// #teach-2
// ------------------------------------------------------

//
 Ext.define('Myapp.sample.Employee',{
	 name : 'unknown',
	constructor : function(name) {
		this.name = name;
	},
	work : function(task) {
		console.log(this.name + " working on " + task);
	}
 });
 
//
// var emp=Ext.create('Myapp.sample.Employee','Nag');
// emp.work('some-work');

// ------------------------------------------------------
// #teach-3
// ------------------------------------------------------

 Ext.define('Myapp.sample.Employee', {
	name : 'unknown',
	lastName : 'unkown',
	age : 0,
	constructor : function(config) {
		console.log('Empoyee::constructor');
		Ext.apply(this, config || {});
	},
	checkAge : function() {
		console.log('Age of ' + this.name + ' ' + this.lastName + ' is:'+ this.age);
	},
	work : function(task) {
		console.log(this.name + ' is working on: ' + task);
	}
});
 
//
//var emp = Ext.create('Myapp.sample.Employee', {
//	name : 'Nag',
//	lastName : 'N',
//	age : 31
//});
//emp.checkAge();
//emp.work('some-work');
 

// ------------------------------------------------------
 //#teach-4 ( Simple Inheritance )
//------------------------------------------------------

// Ext.define('Myapp.sample.Supervisor', {
//	extend : 'Myapp.sample.Employee',
//	constructor : function(config) {
//		console.log('Supervisor::constructor');
//		Ext.apply(this, config || {});
//	},
//	supervise : function(employee) {
//		console.log(this.name + " supervising work of " + employee.name);
//	}
//});
 
//console.log('---');
 
//var sup = Ext.create('Myapp.sample.Supervisor', {
//	name : 'Riiya'
//});
 
//sup.supervise(emp);


// ------------------------------------------------------
// #teach-5 ( Preprocessor and Postprocessor)
// ------------------------------------------------------


// Ext.Class


//var pre = Ext.Class.getDefaultPreprocessors(),
//   post = Ext.ClassManager.defaultPostprocessors;
 
//console.log(pre);
//console.log(post);


//--------------------------------------------------------

// 1. Mixins

// Mixins
Ext.define('Myapp.sample.tasks.AttendPhone', {
	answerPhone : function() {
		console.log(this.name + ' is answering the phone');
	}
});

Ext.define('Myapp.sample.tasks.AttendClient', {
	attendClient : function(clientName) {
		console.log(this.name + ' is attending client: ' + clientName);
	}
});
Ext.define('Myapp.sample.tasks.AttendMeeting', {
	attendMeeting : function(person) {
		console.log(this.name + ' is attending a meeting with ' + person);
	}
});
Ext.define('Myapp.sample.tasks.SuperviseEmployees', {
	superviseEmployee : function(supervisor, employee) {
		console.log(supervisor.name + ' is supervising : ' + employee.name+ ' ' + employee.lastName);
	}
});


//-----------------------------------------------------------------------------

//
//Ext.define('Myapp.sample.Secretary', {
//	extend : 'Myapp.sample.Employee',
//	mixins : {
//		answerPhone : 'Myapp.sample.tasks.AttendPhone'
//	},
//	constructor : function(config) {
//		Ext.apply(this, config || {});
//		console.log('Secretary class created – fullname:' + this.name + ' '+ this.lastName);
//	}
//});
//
//
//var sec = Ext.create('Myapp.sample.Secretary', {name:'Patricia', lastName:'Diaz', age:21 } );
//sec.work('Attending phone calls');
//sec.answerPhone();


//--------------------------------------------------------------------------------

//
//Ext.define('Myapp.sample.Accountant', {
//	extend : 'Myapp.sample.Employee',
//	mixins : {
//		attendClient : 'Myapp.sample.tasks.AttendClient',
//		attendMeeting : 'Myapp.sample.tasks.AttendMeeting'
//	},
//	constructor : function(config) {
//		Ext.apply(this, config || {});
//		console.log('Accountant class created – fullname:' + this.name + ' '+ this.lastName);
//	}
//});
////

//var peter =  Ext.create('Myapp.sample.Accountant', {name:'Peter',lastName:'Jones', age:44 } );
//peter.work('Checking financial books');
//peter.attendClient('ACME Corp.');
//peter.attendMeeting('Patricia');

//-----------------------------------------------------------------------------------

//Ext.define('Myapp.sample.Manager', {
//	extend : 'Myapp.sample.Employee',
//	mixins : {
//		attendClient : 'Myapp.sample.tasks.AttendClient',
//		attendMeeting : 'Myapp.sample.tasks.AttendMeeting',
//		supervisePersons : 'Myapp.sample.tasks.SuperviseEmployees'
//	},
//	constructor : function(config) {
//		Ext.apply(this, config || {});//this.name= config.name;
//		console.log('Manager class created – fullname:' + this.name + ' '+ this.lastName);
//	},
//	supervise : function(employee) {
//		console.log(this.name + ' starts supervision ');
//		this.mixins.supervisePersons.superviseEmployee(this, employee);
//		console.log(this.name + ' finished supervision ');
//	}
//});


//
//var robert =  Ext.create('Myapp.sample.Manager', {name:'Robert',lastName:'Smith', age:34 } );
//robert.attendClient('Iron Tubes of America');
//robert.attendMeeting('Patricia & Peter');
//robert.supervise(peter);

//-----------------------------------------------------------------------------------
//Using the mixinConfig property
//-----------------------------------------------------------------------------------

//Ext.define('Myapp.sample.tasks.AttendCellPhone', {
//	extend : 'Ext.Mixin',
//	mixinConfig : {
//		before : {
//			answerCellPhone : 'cellPhoneRinging'
//		},
//		after : {
//			answerCellPhone : 'finishCall'
//		}
//	},
//	cellPhoneRinging : function() {
//		console.log('cell phone is ringing you may attend call');
//	},
//	finishCall : function() {
//		console.log('cell phone call is over');
//	}
//});
//

//Ext.define('Myapp.sample.Secretary', {
//	extend : 'Myapp.sample.Employee',
//	mixins : {
//		answerPhone : 'Myapp.sample.tasks.AttendPhone',
//		util : 'Myapp.sample.tasks.AttendCellPhone'
//	},
//	constructor : function(config) {
//		Ext.apply(this, config || {});//this.name= config.name;
//		console.log('Secretary class created – fullname:' + this.name + ' '+ this.lastName);
//	},
//	answerCellPhone : function() {
//		console.log(this.name + ' is answering the cellphone');
//	}
//});
//
//
//var sec=Ext.create('Myapp.sample.Secretary',{name:'Indu',lastName:'N',age:27});
//sec.answerCellPhone();


//----------------------------------------------------------------------------------
// Configurations
//----------------------------------------------------------------------------------



//Ext.define('Myapp.sample.Employee', {
//	name : 'Unknown',
//	lastName : 'Unknown',
//	age : 0,
//	constructor : function(config) {
//		Ext.apply(this, config || {});//this.name= config.name;
//		console.log('class A created – fullname:' + this.name + ' '+ this.lastName);
//	},
//	work : function(task) {
//		console.log(this.name + ' is working on: ' + task);
//	},
//	setName : function(newName) {
//		this.name = newName;
//	},
//	getName : function() {
//		return this.name;
//	}
//});
//

//var emp=Ext.create('Myapp.sample.Employee',{name:'Nag',age:31,lastName:'N'});
////console.log(emp.name);
//console.log(emp.getName());

//-----------------------

//Ext.define('Myapp.sample.Employee', {
//	config : {
//		name : 'Unknown',
//		lastName : 'Unknown',
//		age : 0,
//		isOld : false
//	},
//	constructor : function(config) {
//		this.initConfig(config);
//	},
//	work : function(task) {
//		console.log(this.name + ' is working on: ' + task);
//	},
//	applyAge : function(newAge) {
//		this.setIsOld((newAge >= 90));
//		return newAge;
//	}
//});
////
//

//var emp=Ext.create('Myapp.sample.Employee',{name:'Nag',age:31,lastName:'N'});
////console.log(emp.name);
//console.log(emp.getName());
//emp.setAge(100);
//console.log(emp.getAge());



//------------------------------------------------------------------------------------
//Statics methods and properties
//------------------------------------------------------------------------------------
//
//
//Ext.define('Myapp.sample.Employee', {
//	statics : {
//		instanceCount : 0,
//		payrollId : 1000,
//		nextId : function() {
//			return (this.payrollId + this.instanceCount);
//		}
//	},
//	config : {
//		name : 'Unknown',
//		lastName : 'Unknown',
//		age : 0,
//		isOld : false,
//		payrollNumber : 0
//	},
//	constructor : function(config) {
//		this.initConfig(config);
//		this.setPayrollNumber(this.statics().nextId());
//		this.self.instanceCount++;
//	},
//	work : function(task) {
//		console.log(this.getName() + ' is working on: ' + task);
//	},
//	applyAge : function(newAge) {
//		this.setIsOld((newAge >= 90));
//		return newAge;
//	},
//	getTotalEmployees : function() {
//		return this.statics().instanceCount;
//	}
//});
//
//var patricia = Ext.create('Myapp.sample.Employee', {
//	name : 'Patricia',
//	lastName : 'Diaz',
//	age : 21,
//	isOld : false
//});
//
//console.log("patricia payrollId = " + patricia.getPayrollNumber());
//console.log("total employees = " + patricia.getTotalEmployees());


//------------------------------------------------------------------------------------
//The Singleton class
//------------------------------------------------------------------------------------

//Ext.define('Myapp.CompanyConstants', {
//	singleton : true,
//	companyName : 'Extjs code developers Corp.',
//	workingDays : 'Monday to Friday',
//	website : 'www.extjscodedevelopers.com',
//	welcomeEmployee : function(employee) {
//		"Hello " + employee.getName() + ", you are now working for "+ this.companyName;
//	}
//});
//
//console.log( Myapp.CompanyConstants.companyName);



//------------------------------------------------------------------------------------
//Aliases
//------------------------------------------------------------------------------------


//Ext.define('Myapp.sample.EmployeePanel', {
//	extend : 'Ext.panel.Panel',
//	alias : 'widget.employeePanel',
//	alternateClassName : 'mycustomemployeepanel',
//	title : 'Employee Panel',
//	html : 'Employee content here..!'
//});


//Ext.onReady(function() {
	

	
	// Ext.create('widget.employeePanel', {
	// title : 'Employee Panel: Nag',
	// height : 250,
	// width : 450,
	// renderTo : Ext.getBody()
	// });

	// Ext.widget('employeePanel', {
	// title : 'Employee Panel: Nag',
	// height : 250,
	// width : 450,
	// renderTo : Ext.getBody()
	// });

	// Ext.ClassManager.instantiateByAlias("widget.employeePanel",{ renderTo:
	// Ext.getBody()
	// });
	// OR
	// Ext.createByAlias("widget.employeePanel", {
	// renderTo : Ext.getBody()
	// });

	// var win = Ext.create("Ext.window.Window", {
	// title : "Window",
	// width : 350,
	// height : 250,
	// items : [ {
	// xtype : "employeePanel"
	// } ]
	// });
	// win.show();

	
//});


// -----------------------------------------------------------------------------------



//Loading classes on demand


//
//Ext.Loader.setConfig({
//	enabled : true,
//	paths : {
//		MyApp : 'appcode'
//	}
//});
//
//Ext.require([ 'MyApp.Constants', 'MyApp.samples.demoClass' ]);
//

//-----------------------------------------------------------------------------------



//Working with the DOM


Ext.onReady(function() {
	

	
	// var mymainDiv = Ext.get('main');
	// var mysecondDiv = Ext.dom.Element.get('second');
	//	
	// mymainDiv.setStyle({
	// width: "100px",
	// height: "100px",
	// border: "2px solid #444",
	// margin: "80px auto",
	// backgroundColor: "#ccc"
	// });
	//	
	//
	// mymainDiv.fadeOut().fadeIn({duration : 3000});

	// var myElements = Ext.dom.Query.select('#main .menu ul li');
	// myElements = Ext.get(myElements);
	// myElements.setStyle({
	// display : "inline",
	// backgroundColor : "#003366",
	// margin : "3px",
	// color : "#FFCC00",
	// padding : "3px 20px",
	// borderRadius : "10px",
	// boxShadow : "inset 0 1px 15px #6699CC"
	// });
	// var h1 = Ext.select("#main div[class=content] h1");
	// h1.setStyle("color", "#003399");
	
	

	//	Ext.DomHelper.append(Ext.getBody(), {
	//		tag : "div",
	//		style : {
	//			width : "100px",
	//			height : "100px",
	//			border : "2px solid #333",
	//			margin : "20px auto"
	//		}
	//	});
	


	//	var h1 = Ext.DomHelper.createDom({
	//		tag : "h1",
	//		html : "This is the title!"
	//	});
	//	Ext.getBody().appendChild(h1);
	
	
	//	Ext.fly(h1).remove();	
	
	
});




