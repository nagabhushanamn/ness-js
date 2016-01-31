/**
 * http://usejsdoc.org/
 */

// teach #1
//---------------------------------------------------------------------------

// Ext.onReady(function(){
// console.log('DOM ready...');
// });

// or

Ext.application({
	name : "MyFirstApplication",
	launch : function() {
		// Ext.MessageBox.alert('Hello', 'Welcome to EXT-JS world');
		// Ext.Msg.alert('Hello', 'Welcome to EXT-JS world');
		Ext.Msg.confirm("Confirm", "Do you like Ext JS 5?",function(btn){
			if (btn === "yes") {
		           Ext.Msg.alert("Great!","This is great!");
		         } else {
		            Ext.Msg.alert("Really?","That's too bad.");
		         }
		});
	}
});


//------------------------------------------------------------------------------