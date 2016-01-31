/**
 * http://usejsdoc.org/
 */


Ext.onReady(function() {
	
	
	//-----------------------------------------------

	//	Ext.define('MyApp.view.CustomerForm01', {
	//		extend : 'Ext.form.Panel',
	//		alias : 'widget.customerform01',
	//		height : 280,
	//		width : 448,
	//		bodyPadding : 6,
	//		title : 'Customer ( .... )',
	//		items : [],
	//		dockedItems : []
	//	});
	//	
	
	//-----------------------------------------------
	//	
	//	Ext.define('MyApp.view.CustomerForm01', {
	//			extend : 'Ext.form.Panel',
	//			alias : 'widget.customerform01',
	//			height : 280,
	//			width : 448,
	//			bodyPadding : 6,
	//			title : 'Customer ( .... )',
	//			items: [{
	//				   xtype: 'numberfield',
	//				   anchor: '60%',
	//				     fieldLabel: 'Customer ID'
	//				   },{
	//				   xtype: 'textfield',
	//				   anchor: '-18',
	//				   fieldLabel: 'Name'
	//				   },{
	//				   xtype: 'textfield',
	//				   fieldLabel: 'Phone'
	//				   }],
	//			dockedItems : []
	//		});
		
	
	//-----------------------------------------------

		
		Ext.define('MyApp.view.CustomerForm01', {
		extend : 'Ext.form.Panel',
		alias : 'widget.customerform01',
		height : 380,
		width : 448,
		bodyPadding : 6,
		defaultType : 'textfield',
		defaults : {
			anchor : '-18',
			labelWidth : 90,
			labelAlign : 'right'
		},
		items : [ {
			xtype : 'numberfield',
			fieldLabel : 'Customer ID',
		}, {
			fieldLabel : 'Name',
		}, {
			fieldLabel : 'Phone',
		}, {
			fieldLabel : 'Web site',
		}, {
			xtype : 'datefield',
			fieldLabel : 'Client since',
		}, {
			xtype : 'combobox',
			fieldLabel : 'Status',
		} ],
		dockedItems: [{
		     xtype: 'toolbar',
		     dock: 'bottom',
		     items: [{
		       xtype: 'tbfill'
		     },{
		       xtype: 'button',
		       iconCls: 'save-16',
		       text: 'Save...'
		}] },{
		     xtype: 'toolbar',
		     dock: 'top',
		     items: [{
		       xtype: 'button',
		       iconCls: 'addicon-16',
		       text: 'New'
		     },{
		       xtype: 'button',
		       iconCls: 'editicon-16',
		       text: 'Edit'
		     },{
		       xtype: 'tbfill'
		     },{
		       xtype: 'button',
		       iconCls: 'deleteicon-16',
		       text: '<b>Delete</b>'
		     }]
		}]
	});
	
	//-----------------------------------------------
	
	
	var mypanel = Ext.create('MyApp.view.CustomerForm01', {
		title : 'My first customer form...',
		renderTo : Ext.getBody()
	});
	
	console.log('Ok');
	
	
});