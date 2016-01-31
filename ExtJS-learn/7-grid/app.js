/**
 * http://usejsdoc.org/
 */

Ext.define('Myapp.model.Contract', {
	extend : 'Ext.data.Model',
	idProperty : 'id ',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'contractId',
		type : 'string'
	}, {
		name : 'documentType',
		type : 'string'
	} ]
});

Ext.define('Myapp.model.Customer', {
	extend : 'Ext.data.Model',
	requires : [ 'Myapp.model.Contract' ],
	idProperty : 'id ',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'name',
		type : 'string'
	}, {
		name : 'phone',
		type : 'string'
	}, {
		name : 'website',
		type : 'string'
	}, {
		name : 'status',
		type : 'string'
	}, {
		name : 'clientSince',
		type : 'date',
		dateFormat : 'Y-m-d H:i'
	}, {
		name : 'contractInfo',
		reference : 'Contract',
		unique : true
	} ]
});



Ext.define('Myapp.store.customers.Customers', {
	extend : 'Ext.data.Store',
	model : 'Myapp.model.Customer',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'server-side/customers.json',
		reader : {
			type : 'json',
			rootProperty : 'records'
		}
	}
});


Ext.onReady(function(){
	
    var myStore = Ext.create("Myapp.store.customers.Customers");
    
    var myGrid = Ext.create('Ext.grid.Panel',{
      height: 250,
      width:  800,
      title: 'My customers',
      columns: [{
        width: 70,
        dataIndex: 'id',
        text: 'Id'
      },{
        width: 160,
        dataIndex: 'name',
        text: 'Customer name'
      },{
        width: 110,
        dataIndex: 'phone',
        text: 'Phone'
      },{
        width: 160,
        dataIndex: 'website',
        text: 'Website'
      },{
        width: 80,
        dataIndex: 'status',
        text: 'Status'
      },{
        width: 160,
        dataIndex: 'clientSince',
        text: 'Client Since'
      }],
      store: myStore,
      renderTo: Ext.getBody() 
      });
});