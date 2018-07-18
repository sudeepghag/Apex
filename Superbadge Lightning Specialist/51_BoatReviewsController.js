({
	doInit : function(component, event, helper) {
		helper.onInit(component);
	},
    onUserInfoClick : function(component, event, helper) {
		var userId = event.currentTarget.getAttribute("data-userid");
        console.log("BoadReviewsController--onUserInfoClick--userId--" + userId);
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
          "recordId": userId
        });
        navEvt.fire();
	},
    refresh : function(component, event, helper) { 
        console.log("BoadReviewsController--refresh--");
        helper.onInit(component);
    }
})