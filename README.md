# Apex

## Field Level Access

Map <String, Schema.SObjectField> fieldMap= Account.sObjectType.getDescribe().fields.getMap();

for(Schema.SObjectField sfield : fieldMap.Values()){

  schema.describefieldresult dfield = sfield.getDescribe();
  
  system.debug('Name: ' + dfield.getName() + ' / isAccessible: ' + dfield.isAccessible() + ' / isUpdateable: '+ dfield.isUpdateable());
	
}

## Field Picklist Values
List<Schema.PicklistEntry> PRODUCT_FAMILY = Product2.Family.getDescribe().getPicklistValues();

## Field Label
labelProductFamily = Product2.Family.getDescribe().getLabel();

labelProductInventory = Product2.Initial_Inventory__c.getDescribe().getLabel();

## Field Label - in VisualForce
<apex:column headerValue="{!$ObjectType.Product2.Fields.Name.Label}" >

## Compound Field - Read & Set individual fields
	Double theLatitude = myObject__c.aLocation__latitude__s;
	myObject__c.aLocation__longitude__s = theLongitude;

	https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/compound_fields_limitations.htm
