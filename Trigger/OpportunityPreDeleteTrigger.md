####Javascript

trigger OpportunityTrigger on Opportunity (before delete) {
          
          Map<Id, Opportunity> OpptyMap = new Map<Id, Opportunity>();

          for (Quote__c q : [SELECT opportunity__c FROM quote__c WHERE opportunity__c IN :Trigger.oldMap.keySet()]){	
            OpptyMap.add(q.opportunity__c, trigger.oldMap.get(q.opportunity__c));	
          }//end of for

          for (Opportunity o : OpptyMap.Values()){
              o.addError('Cannot delete opportunity with a quote');
          }//end of for
  
}//end of trigger OpportunityTrigger

