/**
 * http://usejsdoc.org/
 */


/*
 *  component life-cycle
 *  ----------------------
 * 
 *   Initialization
 *   Rendering
 *   Destruction
 *   
 *   
 *   
 *   Ext.AbstractComponent/Ext.Component
 * 
 * 
 * 
 */ 

// -----------------------------------------------------------------------------------

//
//var panel = Ext.create("Ext.panel.Panel",{
//     title: "My First panel",
//     width: 400,
//     height: 250,
//     //renderTo: Ext.getBody()
//});
//panel.render(Ext.getBody());

//------------------------------------------------------------------------------------


//var panel = Ext.create("Ext.panel.Panel",{
//     title: "My First panel",
//     width: 400,
//     height: 250,
//     //html: "<h1>Hello!</h1><p>This is an <strong>example</strong> of content</p>"
//     //contentEl: "content"
//     data: {name:"Veronica", lastName:"Sanchez"},
//     tpl: ["<h1>Content</h1><p>Hello {name} {lastName}!</p>"],
//     disabled:true
//});
//panel.render(Ext.getBody());

//panel.destroy();


//-------------------------------------------------------------------------------------------

// component Life-cycle


// Ext.define('Myapp.sample.CustomComponent', {
//	extend : 'Ext.Component',
//	initComponent : function() {
//		var me = this;
//		me.width = 200;
//		me.height = 100;
//		me.html = {
//			tag : 'div',
//			html : 'X',
//			style : { // this can be replaced by a CSS rule
//				'float' : 'right',
//				'padding' : '10px',
//				'background-color' : '#e00',
//				'color' : '#fff',
//				'font-weight' : 'bold',
//				'cursor' : 'pointer'
//			}
//		};
//		me.myOwnProperty = [ 1, 2, 3, 4 ];
//		me.callParent();
//		console.log('Step 1. initComponent');
//	},
//	beforeRender : function() {
//		console.log('Step 2. beforeRender');
//		this.callParent(arguments);
//	},
//	onRender : function() {
//		console.log('Step 3. onRender');
//		this.callParent(arguments);
//		this.el.setStyle('background-color', '#ccc');
//	},
//	afterRender : function() {
//		console.log('4. afterRender');
//		this.el.down('div').on('click', this.myCallback, this);
//		this.callParent(arguments);
//	},
//	beforeDestroy : function() {
//		console.log('5. beforeDestroy');
//		this.callParent(arguments);
//	},
//	onDestroy : function() {
//		console.log('6. onDestroy');
//		delete this.myOwnProperty;
//		this.el.down('div').un('click', this.myCallback);
//		this.callParent(arguments);
//	},
//	myCallback : function() {
//		var me = this;
//		Ext.Msg.confirm('Confirmation','Are you sure you want to close this panel?', function(btn) {
//					if (btn === 'yes') {
//						me.destroy();
//					}
//				});
//	}
//});
//
//Ext.onReady(function(){
//     Ext.create('Myapp.sample.CustomComponent',{
//         renderTo : Ext.getBody()
//     });
//});



//-------------------------------------------------------------------------------------------------

/*
 *  Containers
 * 
 */
//-------------------------------------------------------------------------------------------------


//Ext.container.Container


//Ext.define("MyApp.sample.MyContainer", {
//	extend : "Ext.container.Container", //Step 1
//	border : true,
//	padding : 10,
//	initComponent : function() {
//		var me = this;
//		Ext.each(me.items, function(item) { //Step 2
//			item.style = {
//				backgroundColor : "#f4f4f4",
//				border : "1px solid #333",
//			};
//			item.padding = 20;
//			item.height = 100;
//			item.margin=10;
//		});
//		me.callParent();
//	},
//	onRender : function() {
//		var me = this;
//		//me.callParent(arguments);
//		if (me.border) { //Step 3
//			me.el.setStyle("border", "1px solid #333");
//		}
//	}
//});

//Ext.onReady(function() {
//	Ext.create("MyApp.sample.MyContainer", {
//		renderTo : Ext.getBody(),
//		items : [ {
//			xtype : "component",
//			html : "Child Component one"
//		}, {
//			xtype : "component",
//			html : "Child Component two"
//		} ]
//	});
//});

//Ext.onReady(function() {
//	Ext.create("MyApp.sample.MyContainer", {
//		renderTo : Ext.getBody(),
//		defaults : {
//			xtype : "component",
//			width : 100
//		},
//		items : [ {
//			html : "Child Component one"
//		}, {
//			html : "Child Component two"
//		} ]
//	});
//});



//----------------------------------------------------------------------------------------

//The viewport

//----------------------------------------------------------------------------------------

//
//
//Ext.onReady(function() {
//	Ext.create('Ext.container.Viewport', {
//		padding : '5px',
//		layout : 'auto',
//		style : {
//			'background-color' : '#fc9',
//			'color' : '#000'
//		},
//		html : 'This is application area'
//	});
//});


//----------------------------------------------------------------------------------------

//The Panel

//----------------------------------------------------------------------------------------
//
//
//Ext.onReady(function() {
//	var MyPanel = Ext.create("Ext.panel.Panel", {
//		renderTo : Ext.getBody(),
//		title : 'My first panel...',
//		width : 300,
//		height : 220,
//		html : '<b>Here</b> goes some <i>content</i>..!'
//	});
//});


//----------------------------------------------------------------------------------------

//The Window

//----------------------------------------------------------------------------------------


//Ext.onReady(function() {
//	var win = Ext.create("Ext.window.Window", {
//		title : 'My first window',
//		width : 300,
//		height : 200,
//		maximizable : true,
//		html : 'this is my first window'
//	});
//	win.show();
//});



//----------------------------------------------------------------------------------------

//The layout system - Border Layout

//----------------------------------------------------------------------------------------
//
// Ext.onReady(function() {
//	 
//	Ext.create('Ext.panel.Panel', {
//		width : 500,
//		height : 300,
//		title : 'Border Layout',
//		layout : 'border',
//		items : [ {
//			xtype : 'panel',
//			title : 'South Region is resizable',
//			region : 'south', // region
//			height : 100,
//			split : true
//		// enable resizing
//		}, {
//			xtype : 'panel',
//			title : 'West Region',
//			region : 'west', // region
//			width : 200,
//			collapsible : true, // make panel/region collapsible layout: 'fit',
//			split : true
//		// enable resizing
//		}, {
//			title : 'Center Region',
//			region : 'center',
//			layout : 'fit',
//			margin : '5 5 0 0',
//			html : '<b>Main content</b> goes here'
//		} ],
//		renderTo : Ext.getBody()
//	});
//	
//});




//----------------------------------------------------------------------------------------

//The layout system - Fit Layout

//----------------------------------------------------------------------------------------



//
//
//Ext.onReady(function() {
//	var win = Ext.create("Ext.window.Window", {
//		title : "My first window",
//		width : 300,
//		height : 200,
//		maximizable : true,
//		layout : "fit",
//		defaults : {
//			xtype : "panel",
//			height : 60,
//			border : false
//		},
//		items : [ {
//			title : "Menu",
//			html : "The main menu"
//		}, {
//			title : "Content",
//			html : "The main content!"
//		} ]
//	});
//	win.show();
//});



//----------------------------------------------------------------------------------------

//The layout system - Card Layout

//----------------------------------------------------------------------------------------



//Ext.onReady(function() {
//	
//	var win = Ext.create("Ext.window.Window", {
//		title : "My first window",
//		width : 300,
//		height : 200,
//		maximizable : true,
//		layout : "card",//Step 1
//		defaults : {
//			xtype : "panel",
//			height : 60,
//			border : false
//		},
//		items : [ {
//			title : "Menu",
//			html : "The main menu"
//		}, {
//			title : "Content",
//			html : "The main content!"
//		} ]
//	});
//	win.show();
//	
//	setTimeout(function() {
//		win.getLayout().setActiveItem(1); //Step 2
//	}, 3000);
//	
//});


//----------------------------------------------------------------------------------------

//The layout system - Accordian Layout

//----------------------------------------------------------------------------------------


//Ext.onReady(function() {
//	var win = Ext.create("Ext.window.Window", {
//		title : "My first window",
//		width : 300,
//		height : 200,
//		maximizable : true,
//		layout : "accordion",
//		defaults : {
//			xtype : "panel"
//		},
//		items : [ {
//			title : "Menu",
//			html : "The main menu"
//		}, {
//			title : "Content",
//			html : "The main content!"
//		}, {
//			title : "3rd Panel",
//			html : "Content here...!"
//		} ]
//	});
//	win.show();
//});



//----------------------------------------------------------------------------------------

//The layout system - Anchor Layout

//----------------------------------------------------------------------------------------



//Ext.onReady(function(){
//    var win = Ext.create("Ext.window.Window",{
//      title: "My first window",
//      width: 300,
//      height: 300,
//      maximizable : true,
//      layout: "anchor",
//      defaults: {xtype: "panel", height: 60, border: false},
//      items: [
//      {
//        title: "Menu",  html: "panel at 100% - 10 px",
//           anchor:'-10'
//      },{
//        title: "Content", html: "panel at 70% of anchor",
//          anchor:'70%'
//      },{
//      title: "3rd Panel", html: "panel at 50% width and 40% height of anchor", anchor:'50% 40%', bodyStyle:'background-color: #fc3;'
//}
//] });
//    win.show();
//  });



//----------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------




