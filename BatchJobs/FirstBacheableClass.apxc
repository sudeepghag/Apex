``` java
global class FirstBacheableClass implements Database.Batchable<sObject>, Schedulable{

 global String query;
    
    global Database.QueryLocator start(Database.BatchableContext bc){ 
        query = 'Select Id, Subject, ContactId from Case where Status = \'New\''; 
        return Database.getQueryLocator(query); 
    }
    
    global void execute(Database.batchableContext bc, List<SObject> scope){
       
            List<SObject> purReValidationUsers = new List<SObject>();
            
            for(sObject s : scope){ 
            
                    Case objCase = (Case) s;
    
                    Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
    
                    mail.setTargetObjectId(objCase.ContactId);
                    mail.setWhatId(objCase.id);
                    mail.setTemplateId('00Xf2000005fbIM');   //Support:Case Updates
                    mail.setOrgWideEmailAddressId('0D2f20000008Tob');    //Support Team
                    mail.setSaveAsActivity(true);				
    
                    Integer used = Limits.getEmailInvocations();
                    Integer emailLimit = Limits.getLimitEmailInvocations();
                    if(used >= emailLimit){
                        //print email text instead of email it.
                    
                    }
                    else{
                        //send email
                        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
                    }
                
                    
           }//for             
    }//execute
    
    global void finish(Database.BatchableContext bc){
    }
    
    global void execute(SchedulableContext sc){
        FirstBacheableClass instFirstBacheableClass = new FirstBacheableClass();
        database.executeBatch(instFirstBacheableClass,200);        
    }
    
}
```
