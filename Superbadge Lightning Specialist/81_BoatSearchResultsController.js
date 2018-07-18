({
    doInit : function(component, event, helper) {
			helper.onSearch(component);
        },
    doSearch : function(component, event, helper) {   
        	var params = event.getParam('arguments');
            if(params){
                var vboatTypeId = params.boatTypeId;
                component.set("v.boatTypeId", vboatTypeId);
                console.log("doSearch: vboatTypeId --> " + vboatTypeId);
                helper.onSearch(component);
            }
        },
    onBoatSelect: function(component, event, helper) {
                var vBoatId = event.getParam("boatId");
                component.set("v.selectedBoatId", vBoatId);
                console.log("onBoatSelect: vBoatId --> " + vBoatId);
                helper.onSearch(component);
        }

})