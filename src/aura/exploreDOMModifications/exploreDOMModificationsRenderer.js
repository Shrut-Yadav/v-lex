({
    render : function(cmp, helper) {
        var ret = this.superRender();
        // do custom rendering here
        
        console.log(ret);
        //ret[1].style.border = '2px solid green';
        ret[1].onclick = function(){alert('Hello');};
        //ret[1].onclick = function(){cmp.set( 'v.greeting', 'Updated with render')};
        //console.log(ret[1].baseURI);
        return ret;
    },
     
})