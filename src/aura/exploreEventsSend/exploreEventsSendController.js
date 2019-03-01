({
	handleSend : function(component, event, helper) {
		var appEvent = $A.get("e.c:aEvent");
        appEvent.setParams({
            'message': 'HEY!!! This is Teja'
        });
        appEvent.fire();
       
        
	}
})