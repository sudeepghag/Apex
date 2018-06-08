# SOSL

## SOSL Syntax
 
``` 
   List<List<SObject>> searchList = [FIND 'map*' IN ALL FIELDS RETURNING Account (Id, Name), Contact, Opportunity, Lead];
  
   List<Account> accList = searchList[0];
   List<Contact> accList = searchList[1];
   List<Opportunity> accList = searchList[2];
   List<Lead> accList = searchList[3];
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
