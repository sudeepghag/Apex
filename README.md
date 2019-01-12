# Apex

### Field Level Access
```
Map <String, Schema.SObjectField> fieldMap= Account.sObjectType.getDescribe().fields.getMap();

for(Schema.SObjectField sfield : fieldMap.Values()){

  schema.describefieldresult dfield = sfield.getDescribe();
  
  system.debug('Name: ' + dfield.getName() + ' / isAccessible: ' + dfield.isAccessible() + ' / isUpdateable: '+ dfield.isUpdateable());
	
}
```

### Field Picklist Values
> List<Schema.PicklistEntry> PRODUCT_FAMILY = Product2.Family.getDescribe().getPicklistValues();

### Get Record Types
```
	Schema.DescribeSObjectResult R = Account.SObjectType.getDescribe();
	List<Schema.RecordTypeInfo> RT = R.getRecordTypeInfos();
```

### Field Label
> labelProductFamily = Product2.Family.getDescribe().getLabel();

> labelProductInventory = Product2.Initial_Inventory__c.getDescribe().getLabel();

### Field Label - in VisualForce
><apex:column headerValue="{!$ObjectType.Product2.Fields.Name.Label}" >

### Compound Field - Read & Set individual fields
	Double theLatitude = myObject__c.aLocation__latitude__s;
	myObject__c.aLocation__longitude__s = theLongitude;

	https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/compound_fields_limitations.htm

### Setting DML Options
[Link](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_database_dmloptions.htm)


### Triggers and Order of Execution
[Link](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm)

### Mode of Execution
[Link](https://www.biswajeetsamal.com/blog/system-mode-and-user-mode-in-salesforce/)
```
Mode of execution:

Trigger – System
Validation Rule – System
Auto Response Rule – System
Assignment Rule – System
Workflow Rule – System
Escalation Rule – System
All Types of calculation behind formula, Rollup Summary – System
Process Builder – System
Visual Workflow or flow – User
if flow is called from Process Builder – System
if flow is called from Workflow – System
if flow is called from Apex – (depends on with or without sharing of apex class)
if flow is called from Custom Button – System
if flow is embed in Visualforce – Depends on VFP context
if flow is called from REST API – System
Approval Process – System
Publisher Action – System
InvocableMethod
if this is called from flow – User
if this is called from Process Builder (does it depends on with or without sharing is specified on that Class) – System
if this is called from REST API – (depends on with or without sharing of the class)
Custom Button – System
Test method with System.runAs() – User
Test method without System.runAs() – System
Visualforce Page (StandardController) – User
Visualforce Page (StandardController with extension) – System
Visualforce Page (Custom Controller)
depends on with or without sharing of the controller
Visualforce Component – depends on Visualforce page where it is used
Macros – System
Annonymous Apex – User
Chatter in Apex – User
Email Service – User
All types of Jobs – System
Apex Webservices (SOAP API and REST API) – System (Consequently, the current user’s credentials are not used, and any user who has access to these methods can use their full power, regardless of permissions, field-level security, or sharing rules.)
```
