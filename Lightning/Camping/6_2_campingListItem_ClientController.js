({
    packItem: function(component, event, helper) {
        var btnClicked = event.getSource();         // the button
        btnClicked.set("v.disabled", true); 
        component.set("v.item.Packed__c", "true");     
    },    
    
    getItems: function(cmp){
        var action = cmp.get("c.getCampingItems");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.items", response.getReturnValue());
            }
        });
	 $A.enqueueAction(action);
    },
 
    loadFirstItem: function(cmp){
        var action = cmp.get("c.getFirstCampingItem");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.item", response.getReturnValue());
            }
        });
	 $A.enqueueAction(action);
    },

    SaveItem: function(component, event, helper) {
        var btnClicked = event.getSource();         // the button
        var btnMessage = btnClicked.get("v.label"); // the button's label
        component.set("v.message", btnMessage);     // update our message
    }


    
})
