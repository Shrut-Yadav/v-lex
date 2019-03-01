({
	sendDataToParent : function(component, event, helper) {
		
        //Appllication Event 
        //$A.get("e.c:nameOfTheEvent");
        
        var cmpEvent = component.getEvent('cmpEvent');
        
        var greeting = component.get(' v.greeting ');
        
        cmpEvent.setParams({
            'message': greeting
        });
        
        cmpEvent.fire();
        
	}
})