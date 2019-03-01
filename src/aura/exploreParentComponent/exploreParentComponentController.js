({
	receiveData : function(component, event, helper) {

        var msg = event.getParam('message');
        
        component.set( 'v.finalMessage', msg);
        
        console.log(' 💥 ' + msg);
	}
})