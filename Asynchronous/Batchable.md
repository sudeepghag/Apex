Code for delete Accounts, Contacts and Opportunities records using single batch class.

``` javascript
Global class BatchMassDeleteRecs Implements Database.batchable<sobject>{
     global final string query;
     global BatchMassDeleteRecs(string q){
         
          query=q;
     }
   
     global Database.QueryLocator start(Database.BatchableContext BC){

      return Database.getQueryLocator(query);
     }
     global  void execute(Database.BatchableContext BC,List<SObject> scope){
         delete scope;
    
    }
    global void finish(Database.BatchableContext BC){
    }

 }
 
string str='select id,name,(select id,name from contacts), (select id, name from opportunities) from Account limit 1';
BatchMassDeleteRecs bdt=new BatchMassDeleteRecs(str);
Database.executeBatch(bdt);
system.debug(bdt);

 ```
 
