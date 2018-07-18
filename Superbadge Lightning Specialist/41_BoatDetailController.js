({
	onFullDetails : function(component, event, helper) {

        var sObjectEvent = $A.get("e.force:navigateToSObject");
        sObjectEvent.setParams({
            "recordId": component.get("v.boat.Id")
        })
        sObjectEvent.fire();
	},
    doInit: function(component, event, helper) {
        if($A.get("e.force:navigateToSObject")){
            component.set("v.CanNavigate","true");
        }else{
            component.set("v.CanNavigate","false");
        }
    }
})