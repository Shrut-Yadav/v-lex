({
    doInit : function(component, event, helper) {
        var vfOrigin = 'https://'+ component.get('v.baseDomain');
        window.addEventListener("message", function(event){
            
            if(event.origin !== vfOrigin){
                return;
            }
            
            component.set( 'v.finalmessage',event.data );
            console.log(component.get('v.finalmessage'));
        }, false);
    }
})