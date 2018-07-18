({
    onBoatSelected: function(component, event, helper) {
                var vBoat = event.getParam("boat");
        		console.log("BoatDetailsController--onBoatSelected--vBoat--" + vBoat.Name + " -- .Id -- " + vBoat.Id);
        		component.set("v.id", vBoat.Id);
                component.find("service").reloadRecord();        		
        		console.log("BoatDetailsController--onBoatSelected--boat.Name--" + component.get("v.boat.Name") + " -- .Id -- " + component.get("v.boat.Id"));
       
        }, 
    onRecordUpdated: function(component, event, helper) { 
        var cmp = component.find("idBoatReviews")
        if(cmp){
            cmp.refresh();
            console.log("BoatDetailsController--onRecordUpdated--component.find(idBoatReviews).refresh");
        }
    },
    onBoatReviewAdded: function(component, event, helper) {      
        console.log("BoatDetailsController--onBoatReviewAdded--component.find('boatreviewtab')" + component.find('boatreviewtab'));
        component.set("v.selectedTabId","boatreviewtab");
		var cmp = component.find("idBoatReviews")
        if(cmp){
            cmp.refresh();
            console.log("BoatDetailsController--onBoatReviewAdded--component.find(idBoatReviews).refresh");
        }
    }
    
})