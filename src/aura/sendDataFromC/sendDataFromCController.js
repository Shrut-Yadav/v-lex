({
	handleSendData : function(component, event, helper) {
		
        //1. Get the data that you are intrested in broadcasting
        var message = component.get(' v.message ');
        
        //2. Get the base domain to which you want to send the data
        var baseDomain = 'https://' + component.get(' v.baseDomain ');
        
        //3. Get the iFrame to which you need to send the data
        var vfWindow = component.find('vframe').getElement().contentWindow;
        
        //4. postMessage
        vfWindow.postMessage(message, baseDomain);
	}
})