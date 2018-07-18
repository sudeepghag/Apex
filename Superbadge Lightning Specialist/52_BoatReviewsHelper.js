({
    onInit : function(component){
        	var action = component.get("c.getAll");
        	var vboatId = component.get("v.boat.Id");
        	console.log("BoadReviewsHelper--onInit--vboatId--"+vboatId);
        	action.setParams({ boatId : vboatId});
            action.setCallback(this, function(response) {
                var list = response.getReturnValue();
                component.set("v.boatReviews", list);   
                console.log("BoadReviewsHelper--onInit--list--"+list);
            })
            $A.enqueueAction(action);	
        
	}
})