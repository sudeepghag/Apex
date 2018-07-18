({
	doInit : function(component, event, helper) {
        	
        	var createRecordEvent = $A.get("event.force:createRecord");
            if(!createRecordEvent){
                component.set("v.bCreateRecordSupported", "false");
                component.set("v.NewButtonShowHide", "slds-hidden");                
            }
        	var action = component.get("c.getBoatTypeValuesIntoList");
            action.setCallback(this, function(response) {
                var list = response.getReturnValue();
                component.set("v.BoatTypeValues", list);
                
            })
            $A.enqueueAction(action);		
	},
    NewButtonClicked:function(component, event, helper) {
        var vBoatType = component.get("v.selectedBoatTypeValue");
        alert('vBoatType:'+vBoatType);          
        var createRecordEvent = $A.get("event.force:createRecord");
        if(createRecordEvent){
            if(vBoatType!= 'Null'){
                 createRecordEvent.setParams({
                    "entityApiName": "Boat__c",
                    "defaultFieldValues": {
                        "BoatType__c" : vBoatType
                    }
                });
            }else{                
                 createRecordEvent.setParams({
                    "entityApiName": "Boat__c"
                });   
            }
            createRecordEvent.fire();
        }
        else{
            alert('createRecord event not supported');
        }
    },
    onFormSubmit:function(component, event, helper) {
        var vBoatType = component.get("v.selectedBoatTypeValue");
        vBoatType = (vBoatType=="All Types"?'':vBoatType);
        var formData = {};
        formData.boatTypeId = vBoatType;
        console.log("searchButtonClicked : vBoatType --> " + vBoatType);
        var cmpEvent = component.getEvent("formsubmit");
		cmpEvent.setParams({
            "formData" : formData
        });
        cmpEvent.fire();
    }
    
})