({
    clickCreateItem: function(component, event, helper) {

        var item = component.get("v.newItem");
 
        var validCampingItem = component.find('CampingItemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        
        // If we pass error checking, do some real work
        
        if(validCampingItem){
            
            var newItem = JSON.parse(JSON.stringify(item));            
            helper.createItem(component, newItem);

        }//end of if (validCampingItem)   

    }//end of clickCreateItem
     
    
})
