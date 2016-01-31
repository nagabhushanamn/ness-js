/**
 * http://usejsdoc.org/
 */

/*
 * 
 * All about the Data package
 * 
 * 
 * classes 
 * -----------
 * 
 * Schema Model
 * 
 * Session Store
 * 
 * 
 * Fields Association Validation
 * 
 * Filter Grouper Sorter
 * 
 * 
 * 
 */

//--------------------------------------------------------------------------------------------------------

// AJAX - JSON

//---------------------------------------------------------------------------------------------------------

//Ext.onReady(function(){
//	
//	Ext.Ajax.request({
//		url : "server-side/myfirstdata.json",
//		success : function(response, options) {
//			console.log('success function executed, here we can do some stuff !');
//			 var data = Ext.decode(response.responseText);
//		     Ext.Msg.alert("Message", data.msg);
//		},
//		failure : function(response, options) {
//			Ext.Msg.alert("Message", 'server-side failure with status code '+ response.status);
//		},
//		callback : function(options, success, response) {
//			console.log('Callback executed, we can do some stuff !');
//		}
//
//	});
//	console.log("Next lines of code...")
//	
//});




//--------------------------------------------------------------------------------------------------------

// AJAX - XML

//---------------------------------------------------------------------------------------------------------


//Ext.onReady(function(){
//	Ext.Ajax.request({
//		url : "server-side/data.xml",
//		success : function(response, options) {
//			var xml = response.responseXML;
//			var node = xml.getElementsByTagName('msg')[0];
//			Ext.Msg.alert("Message", node.firstChild.data);
//		},
//		failure : function(response, options) {
//			Ext.Msg.alert("Message", 'server-side failure with status code'+ response.status);
//		}
//	});
//	
//});


//--------------------------------------------------------------------------------------------------------

//AJAX - Passing Parameter AJAX

//---------------------------------------------------------------------------------------------------------

//Ext.onReady(function() {
//
//	Ext.Ajax.request({
//		url : "serverside/myfirstparams.htm",
//		method : 'POST',
//		params : {
//			x : 200,
//			y : 300
//		},
//		success : function(response, options) {
//			var data = Ext.decode(response.responseText);
//			Ext.Msg.alert("Message", data.msg);
//		},
//		failure : function(response, options) {
//			Ext.Msg.alert("Message", 'server-side failure with status code'
//					+ response.status);
//			Ext.Msg.alert("Message", 'server-side failure:' + response.status);
//		}
//	});
//
//});


//--------------------------------------------------------------------------------------------------------

//AJAX -Setting timeout to Ajax request calls  

//timeout

//---------------------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------------------

// Models :-

//Models represent objects or entities inside our application, for example, Clients, Users, Invoices, and so on

//---------------------------------------------------------------------------------------------------------
//
//
//Ext.define('Myapp.model.Client', {
//	extend : 'Ext.data.Model', // step 1
//	idProperty : 'clientId ', // step 2
//	fields : [// step 3
//	{
//		name : 'clientId',
//		type : 'int'
//	}, {
//		name : 'name',
//		type : 'string'
//	}, {
//		name : 'phone',
//		type : 'string'
//	}, {
//		name : 'website',
//		type : 'string'
//	}, {
//		name : 'status',
//		type : 'string'
//	}, {
//		name : 'clientSince',
//		type : 'date',
//		dateFormat : 'Y-m-d H:i',
//      mapping:'since'
//	} ]
//});
//
//
//var myclient = Ext.create('Myapp.model.Client', {
//	clientId : 10001,
//	name : 'Acme corp',
//	phone : '+52-01-55-4444-3210',
//	website : 'www.acmecorp.com',
//	status : 'Active',
//	since : '2010-01-01 14:35'
//});
//
//console.log(myclient);
//console.log("My client's name is = " + myclient.data.name);
//console.log("My client's website is = " + myclient.data.name);
//
//
// SET AND GET methods demo


//--------------------------------------------------------------------------------

//Validators

//--------------------------------------------------------------------------------

//Ext.define('Myapp.model.Client', {
//	extend : 'Ext.data.Model',
//	idProperty : 'clientId ',
//	fields : [ {
//		name : 'clientId',
//		type : 'int'
//	}, {
//		name : 'name',
//		type : 'string'
//	}, {
//		name : 'phone',
//		type : 'string'
//	}, {
//		name : 'website',
//		type : 'string'
//	}, {
//		name : 'status',
//		type : 'string'
//	}, {
//		name : 'clientSince',
//		type : 'date',
//		dateFormat : 'Y-m-d H:i'
//	} ],
//	validators : {
//		name : [ {
//			type : 'presence'
//		} ],
//		website : [ {
//			type : 'presence',
//			allowEmpty : true
//		}, {
//			type : 'length',
//			min : 5,
//			max : 250
//		} ]
//	}
//});
//
//
////Step 1
//var myclient = Ext.create('Myapp.model.Client', {
//	clientId : '10001',
//	name : 'Acme corp',
//	phone : '+52-01-55-4444-3210',
//	status : 'Active',
//	clientSince : '2010-01-01 14:35'
//});
//if (myclient.isValid()) { //Step 2 
//	console.log("myclient model is correct");
//}
//



//--------------------------------------------------------------------------------

//Customfield types

//--------------------------------------------------------------------------------

//
//
//Ext.define('Myapp.fields.Status',{
//       extend: 'Ext.data.field.String', 
//       alias: 'data.field.status',
//       validators: {
//           type: 'inclusion',
//           list: [ 'Active', 'Inactive'],
//           message: 'Is not a valid status value, please select the proper options[Active, Inactive]'
//       }
//});

//Ext.define('Myapp.model.Client', {
//	extend : 'Ext.data.Model',
//	idProperty : 'clientId ',
//	fields : [ {
//		name : 'clientId',
//		type : 'int'
//	}, {
//		name : 'name',
//		type : 'string'
//	}, {
//		name : 'phone',
//		type : 'string'
//	}, {
//		name : 'website',
//		type : 'string'
//	}, {
//		name : 'status',
//		type : 'status'
//	}, {name: 'clientSince' , type: 'date', dateFormat:'Y-m-d H:i'}
//	],
//	validators : {}
//});
//

//var myclient = Ext.create('Myapp.model.Client', {
//	clientId : '10001',
//	name : 'Acme corp',
//	phone : '+52-01-55-4444-3210',
//	website : 'www.acmecorp.com',
//	status : 'Active',
//	clientSince : '2010-01-01 14:35'
//});
//if (myclient.isValid()) {
//	console.log("myclient model is correct");
//}




//--------------------------------------------------------------------------------

// RelationShip

//--------------------------------------------------------------------------------

//Ext.define('Myapp.model.Employee', {
//	extend : 'Ext.data.Model',
//	idProperty : 'id ',
//	fields : [ {
//		name : 'id',
//		type : 'int'
//	}, {
//		name : 'clientid',
//		type : 'int'
//	}, ]
//});
//
//
// Ext.define('Myapp.model.Client', {
//	extend : 'Ext.data.Model', // step 1
//	requires : [ 'Myapp.model.Employee' ],
//	idProperty : 'id ',
//	fields : [],
//	hasMany : {
//		model : 'Myapp.model.Employee',
//		name : 'employees',
//		associationKey : 'employees'
//	}
//});
//
//
//var myclient = Ext.create('Myapp.model.Client', {
//	id : 10001,
//	name : 'Acme corp',
//	phone : '+52-01-55-4444-3210',
//	website : 'www.acmecorp.com',
//	status : 'Active',
//	clientSince : '2010-01-01 14:35'
//});
//// Step 2
//myclient.employees().add({
//	id : 101,
//	clientId : 10001,
//	name : 'Juan Perez',
//	phone : '+52-05-2222-333',
//	email : 'juan@test.com',
//	gender : 'male'
//}, {
//	id : 102,
//	clientId : 10001,
//	name : 'Sonia Sanchez',
//	phone : '+52-05-1111-444',
//	email : 'sonia@test.com',
//	gender : 'female'
//});
//
//// Step 3
//myclient.employees().each(function(record) {
//	console.log(record.get('name') + ' - ' + record.get('email'));
//});


//---------------------------------------------------------------------------------

//Working with the store


//----------------------------------------------------------------------------------

//
//Ext.define('Myapp.model.Contract', {
//	extend : 'Ext.data.Model',
//	idProperty : 'id ',
//	fields : [ {
//		name : 'id',
//		type : 'int'
//	}, {
//		name : 'contractId',
//		type : 'string'
//	}, {
//		name : 'documentType',
//		type : 'string'
//	} ]
//});
//
//Ext.define('Myapp.model.Customer', {
//	extend : 'Ext.data.Model',
//	requires : [ 'Myapp.model.Contract' ],
//	idProperty : 'id ',
//	fields : [ {
//		name : 'id',
//		type : 'int'
//	}, {
//		name : 'name',
//		type : 'string'
//	}, {
//		name : 'phone',
//		type : 'string'
//	}, {
//		name : 'website',
//		type : 'string'
//	}, {
//		name : 'status',
//		type : 'string'
//	}, {
//		name : 'clientSince',
//		type : 'date',
//		dateFormat : 'Y-m-d H:i'
//	}, {
//		name : 'contractInfo',
//		reference : 'Contract',
//		unique : true
//	} ]
//});
//


//Ext.define('MyApp.store.Customers', {
//	extend : 'Ext.data.Store', // Step 1
//	model : 'Myapp.model.Customer' // Step 2
//});



//var store = Ext.create("MyApp.store.Customers");
////counting the elements in the store
//console.log(store.count());


//Step 1 (define /create new model instance)
//var mynewcustomer = Ext.create('Myapp.model.Customer', {
//	id : 10001,
//	name : 'Acme corp',
//	phone : '+52-01-55-4444-3210',
//	website : 'www.acmecorp.com',
//	status : 'Active',
//	clientSince : '2010-01-01 14:35',
//	contractInfo : {
//		id : 444,
//		contractId : 'ct-001-444',
//		documentType : 'PDF'
//	}
//});
//store.add(mynewcustomer); //Step 2 
//console.log("Records in store:" + store.getCount());




// -----------------------------------------------------------------------------------------

//store.each(function(record, index){
//    console.log(index, record.get("name"));
//});
//var modelTest = store.getAt(0); 
//console.log(modelTest.get("name"));
//


//var first = store.first();
//var last = store.last();
//console.log(first.get("name"), last.get("name"));


//
//var list = store.getRange(0,3);
//Ext.each(list,function(record,index){
//  console.log(index,record.get("name"));
//});


//
//var record = store.getById(10001);
//console.log(modelTest.get("name"));


//store.remove(record); store.each(function(record,index){
//    console.log(index,record.get("name"));
//  });

//store.removeAll();
//console.log("Records:",store.count());


//-----------------------------------------------------------------------------------------

//Retrieving remote data

//------------------------------------------------------------------------------------------


//
//Ext.define('Myapp.store.customers.Customers', {
//	extend : 'Ext.data.Store',
//	model : 'Myapp.model.Customer',
////	proxy : {
////		type : 'ajax',
////		url : 'server-side/customers.json',
////		reader : {
////			type : 'json',
////			rootProperty : 'records'
////		}
////	}
//	proxy:{
//	       type:'ajax',
//	       url: 'server-side/customers.xml',
//	       reader: {
//	         type: 'xml',
//	         rootProperty: 'data',
//	         record:'customer',
//	         totalProperty: 'total',
//	         successProperty: 'success'
//	} }
//});

////Step 1
//var store = Ext.create("Myapp.store.customers.Customers");
//// Step 2
//store.load(function(records, operation, success) {
//	console.log('loaded records');// Step 3
//	Ext.each(records, function(record, index, records) {
//		console.log(record.get("name") + '  - '+ record.data.contractInfo.contractId);
//	});
//});
//

//----------------------------------------------------------------------------------------------

//
//
//Ext.define('Myapp.store.customers.CustomersSending', {
//	extend : 'Ext.data.Store',
//	model : 'Myapp.model.Customer',
//	autoLoad : false,
//	autoSync : true,
//	proxy : {
//		type : 'ajax',
//		url : 'server-side/customers.json',
//		api : {
//			read : 'server-side/customers.json',
//			create : 'serverside/process.php?action=new',
//			update : 'serverside/process.php?action=update',
//			destroy : 'serverside/process.php?action=destroy'
//		},
//		reader : {
//			type : 'json',
//			rootProperty : 'records'
//		},
//		writer : {
//			type : 'json',
//			encode : true,
//			rootProperty : 'paramProcess',
//			allowSingle : false,
//			writeAllFields : true,
//			root : 'records'
//		},
//		actionMethods : {
//			create : 'POST',
//			read : 'GET',
//			update : 'POST',
//			destroy : 'POST'
//		}
//	}
//});
//
//var store = Ext.create("Myapp.store.customers.CustomersSending");
//
//store.load(function(records, operation, success) {
//console.log('loaded records-'+records.length);// Step 3
//});
////
////step 3 Add a record
//var mynewCustomer = Ext.create('Myapp.model.Customer',{
//           clientId  : '10003',
//           name: 'American Notebooks Corp',
//           phone: '+52-01-55-3333-2200',
//           website   : 'www.notebooksdemo.com',
//           status    : 'Active',
//           clientSince: '2015-06-01 10:35',
//           contractInfo:{
//             "id":99990,
//             "contractId":"ct-00301-99990",
//             "documentType":"DOC"
//} });
//store.add(mynewCustomer);
//
//--------------------------------------------------------------------



