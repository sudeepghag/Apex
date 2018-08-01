# SOSL

## SOSL Syntax
 
``` 
   List<List<SObject>> searchList = [FIND 'map*' IN ALL FIELDS RETURNING Account (Id, Name), Contact, Opportunity, Lead];
  
   Account [] accounts = ((List<Account>)searchList[0]);
   Contact [] contacts = ((List<Contact>)searchList[1]);
   Opportunity [] opportunities = ((List<Opportunity>)searchList[2]);
   Lead [] leads = ((List<Lead>)searchList[3]);
```

## Dynamic SOSL

```
  List<List <sObject>> myQuery = search.query(***SOSL_search_string***);
  
  Example:
  String searchquery='FIND\'Edge*\'IN ALL FIELDS RETURNING Account(id,name),Contact, Lead'; 
  List<List<SObject>>searchList=search.query(searchquery);        
```


## escapeSingleQuotes:
```
String str = 'L\'Oreal'; //<-- get the escaped name

System.debug(str); // <--debug output: L'Oreal

String strEsc = String.escapeSingleQuotes(str); //<-- pass through escape method

System.debug(strEsc); //<-- output: L\'Oreal
```

### WITH SNIPPET
```
FIND {San Francisco} IN ALL FIELDS RETURNING KnowledgeArticleVersion(id, title WHERE 
PublishStatus = 'Online' AND Language = 'en_US') 
WITH SNIPPET (target_length=120)
```

### WITH HIGHLIGHT
```
FIND {Salesforce West} IN ALL FIELDS RETURNING Building__c(Name, BuildingDescription__c) WITH HIGHLIGHT
```
