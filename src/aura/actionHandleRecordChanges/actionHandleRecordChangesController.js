({
	recordUpdatedHandler : function(component, event, helper) {
        var evtParams = event.getParams();
      
        if(evtParams.changeType === "CHANGED"){
            var changedFields = evtParams.changedFields;
            
            console.log(JSON.stringify(changedFields.Phone.oldValue));
            
            var resultsToast = $A.get("e.force:showToast");
            resultsToast.setParams({
                "title": "Updated",
                "message": "The record is updated"
            });
            resultsToast.fire();
            
            var homeEvent = $A.get("e.force:navigateToObjectHome");
            homeEvent.setParams({
                "scope": "Account"
            });
            homeEvent.fire();
            
        }else if(evtParams.changeType === "LOADED"){
            
        }else if(evtParams.changeType === "REMOVED"){
            
        }else if(evtParams.changeType === "ERROR"){
            
        }else{
            
        }
		
	}
})