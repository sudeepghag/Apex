({
    navToRecord : function (component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": component.get("v.propertyId")
        });
        navEvt.fire();
    },
    editRecord : function(component, event, helper) {
        var recId = component.get("v.propertyId");
        component.set("v.remoteRecordId", recId);
        component.set("v.showDialog", "true");
	}

    
})
