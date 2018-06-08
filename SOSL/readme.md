# SOSL

## SOSL Syntax

## Dynamic SOSL

  List<List <sObject>> myQuery = search.query(***SOSL_search_string***);
  
  Example:
  String searchquery='FIND\'Edge*\'IN ALL FIELDS RETURNING Account(id,name),Contact, Lead'; 
  List<List<SObject>>searchList=search.query(searchquery);        



escapeSingleQuotes:
```
String str = 'L\'Oreal'; //<-- get the escaped name

System.debug(str); // <--debug output: L'Oreal

String strEsc = String.escapeSingleQuotes(str); //<-- pass through escape method

System.debug(strEsc); //<-- output: L\'Oreal
```
