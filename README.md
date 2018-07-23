# Apex

## Field Level Access

Map <String, Schema.SObjectField> fieldMap= Account.sObjectType.getDescribe().fields.getMap();

for(Schema.SObjectField sfield : fieldMap.Values()){

  schema.describefieldresult dfield = sfield.getDescribe();
  system.debug('Name: ' + dfield.getName() + ' / isAccessible: ' + dfield.isAccessible() + ' / isUpdateable: '+ dfield.isUpdateable());
	
}

## Field Label
labelProductFamily = Product2.Family.getDescribe().getLabel();
labelProductInventory = Product2.Initial_Inventory__c.getDescribe().getLabel();

