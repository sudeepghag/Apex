({
	onSave : function(component, event, helper) {

        component.find("service").saveRecord($A.getCallback(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                    console.log("AddBoatReviewController--onSave--Save completed successfully.");
                    
                	var resultsToast = $A.get("e.force:showToast");
                	if(resultsToast){
                        resultsToast.setParams({
                            "title": "Success",
                            "message": "Review Submitted. Thanks."
                        });
                        resultsToast.fire();
                    }
                	else{
                    	alert("Review Submitted. Thanks.");
                	}
                	helper.onInit(component, event);              
                    var cmpEvent = component.getEvent("boatreviewadded");
                    cmpEvent.fire();

            }
            else if (saveResult.state === "INCOMPLETE") {
                console.log("AddBoatReviewController--onSave--User is offline, device doesn't support drafts.");
            } 
            else if (saveResult.state === "ERROR") {
                console.log('AddBoatReviewController--onSave--Problem saving record, error: ' + JSON.stringify(saveResult.error));
				
                component.set("v.recordError", saveResult.error);
                
                        var resultsToast = $A.get("e.force:showToast");
                        resultsToast.setParams({
                            "title": "Error",
                            "message": "Problem saving record." + JSON.stringify(saveResult.error)
                        });
                        resultsToast.fire();
                
            } //end if
        }));  
                                                            
    },
    doInit : function(component, event, helper) {
       helper.onInit(component, event);
    },
    onRecordUpdated : function(component, event, helper) {
        
        console.log('AddBoatReviewController--onRecordUpdated--');
        var resultsToast = $A.get("e.force:showToast");
            if(resultsToast){
                resultsToast.setParams({
                    "title": "Success",
                    "message": "Review Updated."
                });
                resultsToast.fire();
            }
            else{
                alert("Review Updated.");
            }
        
    }
})