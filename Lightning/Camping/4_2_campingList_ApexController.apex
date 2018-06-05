public with sharing class CampingListController {

    @AuraEnabled
    public static List<Camping_Item__c> getItems(){
        return [SELECT Id, Name, Quantity__c, Price__c, Packed__c FROM Camping_Item__c];
    }
    
    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c newItem){
        
        Integer vNum = 0;
        
        if (vNum == 0){
            throw new AuraHandledException('Apex Error while saving record !');
        }
        else{
             upsert newItem;
        	 return newItem;  
        }
        
      
    } 
}
