({
    shortenMe : function(component, event, helper) {
        var login = "kkteja";
        var api_key = "R_d757691e564e549f881ddd6528ea5b65";
        var long_url = "";
        
        var action = component.get('c.URLShortenMethod');
        
        action.setParams({
            "long_url": component.get("v.url")    
        });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                console.log(result);                
                result = JSON.parse(result);               
                component.set('v.url', result.data.url);
            }else if (state === "INCOMPLETE") {
            }else if (state === "ERROR") {
                
            }
        });
        $A.enqueueAction(action);
    }
})