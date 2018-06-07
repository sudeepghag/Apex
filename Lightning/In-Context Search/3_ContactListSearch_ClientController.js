({
	doInit : function(component, event, helper) {
       component.set("v.Columns", [
            {label:"First Name", fieldName:"FirstName", type:"text"},
            {label:"Last Name", fieldName:"LastName", type:"text"},
            {label:"Phone", fieldName:"Phone", type:"phone"},
            {label:"Email", fieldName:"Email", type:"email"}
        ]);
        
        helper.fetchContacts(component);

	},
    searchKeyChange: function(component, event, helper) {
     	var searchKey = component.get("v.searchKey"); //event.target.value;
        var accountId = component.get("v.recordId");
            
        alert('Client-Controller-searchKeyChange / searchKey: ' + searchKey + ' / accountId: '+ accountId);
        
        var action = component.get("c.filterByKey");
        action.setParams({
          "searchKey": searchKey,
          "pAccountId" : accountId
        }); 
        action.setCallback(this, function(a) {
            component.set("v.Contacts", a.getReturnValue());
        });
        
        $A.enqueueAction(action);  		
        
 },
    clearSearch:function(component, event, helper) {
        component.set("v.searchKey","");
        helper.fetchContacts(component);
    }
    
})
