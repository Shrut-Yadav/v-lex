({
    doInit : function(component, event, helper) {
        var vfOrigin = 'https://'+ component.get('v.baseDomain');
        window.addEventListener("message", function(event){
            
            if(event.origin !== vfOrigin){
                return;
            }
            
            
            console.log(' 💥 ' + event.data.message);
            
            component.set( 'v.finalmessage',event.data.message.address );
            console.log(component.get('v.finalmessage'));
        }, false);
    }
})