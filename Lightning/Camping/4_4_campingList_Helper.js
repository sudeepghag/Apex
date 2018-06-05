({

    createItem : function(component, newItem) {
        
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

        
	}//end of createItem 
    
})
