({
	handleSuccess : function(component, event, helper) {
        var toast = $A.get('e.force:showToast');
        toast.setParams({
            'title': 'Success!',
            'message': 'Record is saved Successfully'
        });
        
        toast.fire();
	},
    
    handleSave : function(component, event, helper) {
        console.log(' 💥 ');
    }
})