({
    handleSave : function(component, event, helper) {
        component.find('record').saveRecord($A.getCallback(function(saveRecord){
           
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                mode: 'sticky',
                message: 'Record is updated',
                title: 'Success'
            });
            toastEvent.fire();
        }));
       
    }
})