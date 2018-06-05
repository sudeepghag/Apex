({
	createItem : function(component, newItem) {

        var createItemEvent = component.getEvent("addItem");
        createItemEvent.setParams({ "item": newItem });
        createItemEvent.fire();                        
        
        component.set("v.newItem", {'sobjectType':'Camping_Item__c', 
                                    'Name':'',
                                    'Packed__c':false,
                                    'Price__c':0,
                                    'Quantity__c':0
                                   });
       
	}//end of createItem    
    
})
