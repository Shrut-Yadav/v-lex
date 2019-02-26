({
	handleClick : function(component, event, helper) {
		console.log(' 💥 ' + 'HEY!!!! Am here');
        
        var firstName = component.get(' v.firstName ');
        var lastName = component.get(' v.lastName ');
        
        var fullName = helper.concatenate(firstName, lastName);
        
        component.set( 'v.fullName', fullName);
        
	}
})