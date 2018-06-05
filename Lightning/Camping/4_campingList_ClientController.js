({
    
    // Load expenses from Salesforce
    doInit: function(component, event, helper) {
        // Create the action
        var action = component.get("c.getItems");
        
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
                    var state = response.getState();
                    if (state === "SUCCESS") {
                        component.set("v.items", response.getReturnValue());
                    }
                    else {
                        console.log("Failed with state: " + state);
                    }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
    handleAddItem: function(component, event, helper) {
        // Create the action
        var newItem = event.getParam("item");
        //helper.createItem(component, newItem);

        var action = component.get("c.saveItem");
        action.setParams({
            "newItem": newItem
        });
                        
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {                

                component.get("v.items").push(newItem);
                
            }//end of if (state
            else if(component.isValid() && state === "ERROR"){
                //This console logs are meant for your understanding
﻿                //avoid using them in your production code.
                console.log("Exception caught successfully");
                console.log("Error object", response);
                console.log("Error Message", response.getError()[0]);
                console.log("Error Message", response.getError()[0].message);
                console.log("Error Message", response.getState());
                console.log("Error object", JSON.stringify(response));
                component.set("v.errMessage", response.getError()[0].message);
            }
        });//end of action.setCallback
        
        $A.enqueueAction(action);

        
        
    } 
    
})
