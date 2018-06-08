({

    fetchContacts : function(component) {    
        var action = component.get("c.getContacts");
        
        action.setParams({
            pAccountId: component.get("v.recordId")
        });
        
        action.setCallback(this, function(data) {
            //console.log("data.getReturnValue --> " + data.getReturnValue());
            component.set("v.Contacts", data.getReturnValue());
            component.set("v.count", data.getReturnValue().length);
        });
        
        $A.enqueueAction(action);	
    }

})
