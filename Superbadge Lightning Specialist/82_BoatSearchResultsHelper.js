({
	onSearch : function(component) {
        	var action = component.get("c.getBoats");
        	var vboatTypeId = component.get("v.boatTypeId");
        	var vselectedBoatId = component.get("v.selectedBoatId");
        
        console.log("onSearch: vboatTypeId --> " + vboatTypeId + " / vselectedBoatId: "+ vselectedBoatId);
        	action.setParams({ boatTypeId : vboatTypeId});
            action.setCallback(this, function(response) {
                var list = response.getReturnValue();
                component.set("v.boats", list);    

            })
            $A.enqueueAction(action);		
	}
})