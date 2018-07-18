({
    onFormSubmit: function(component, event, helper) {
        	var eaformData = event.getParam("formData");
        	console.log("onFormSubmit: boatTypeId --> " + eaformData.boatTypeId);
			var childCmp = component.find("idBoatSearchResults");
			//var auraMethodResult = 
        	if(childCmp){
            	childCmp.search(eaformData.boatTypeId);
            }
        }
 
})