({
    doInit : function(component, event, helper) {
        var action = component.get("c.fetchRatingValues");
        var rating = component.get(' v.account.Rating');
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(' 💥 ' + response.getReturnValue());
                
                var allRatingValues = response.getReturnValue();
                
                //TODO: Process the response to generate a dynamic picklist
                
                var ratingId;
                var ratingOptions = [];
                
                for(var i=0; i< allRatingValues.length; i++){
                    
                    if(i == 0){
                        
                        if(rating != undefined){
                            ratingOptions.push({
                                id: 0, 
                                label: '--None--'
                            });
                            
                        }else{
                            ratingOptions.push({
                                id: 0, 
                                label: '--None--',
                                selected: true
                            });
                            ratingId = 0;
                            
                        }
                        
                    }
                    
                    if(allRatingValues[i] == rating){
                        ratingOptions.push({
                            id: i+1, 
                            label: allRatingValues[i],
                            selected: true 
                        });
                        ratingId = i+1;
                    }else{
                        ratingOptions.push({
                            id: i+1, 
                            label: allRatingValues[i]
                        });
                        
                    }
                    
                    
                    
                }
                
                
                console.log(' 💥 ' + JSON.stringify(ratingOptions));
                
                var serverResponse = {
                    selectedRatingId: ratingId,
                    rating: ratingOptions
                };
                
                
                component.set( "v.options", serverResponse.rating);
                component.set( "v.selectedValue", serverResponse.selectedRatingId);
            }
            else if (state === "INCOMPLETE") {
                
            }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " + 
                                        errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
        });
        
        
        $A.enqueueAction(action);
        
    }
})