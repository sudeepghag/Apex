({
    packItem: function(component, event, helper) {
        var btnClicked = event.getSource();         // the button
        btnClicked.set("v.disabled", true); 
        component.set("v.item.Packed__c", "false");    

        var updatedItem = component.get("v.item");  
        var updateItemEvent = component.getEvent("updateItem");
        updateItemEvent.setParams({ "item": updatedItem });
        updateItemEvent.fire();   
    
    }
})
