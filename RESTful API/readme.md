# Using Batch Apex
Iterable / Iteratror

### [RestContext Class](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_methods_system_restcontext.htm)

https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_iterable.htm

## [REST Error Handling Design](https://salesforce.stackexchange.com/questions/161429/rest-error-handling-design)


```javascript
//... inside your Endpoint code
try{
   Id leadId = RestContext.request.params.get('leadId');
   Lead myLead = [SELECT Id FROM Lead WHERE Id = :leadId];
   //...convert lead
   return myLead;
}catch(System.StringException e){
   RestContext.response.statusCode = 400;
   SalesforceError[] errs = new SalesforceError[]{ 
     new SalesforceError('BAD_REQUEST', 'Param: leadId is not a valid Id')
   };
   RestContext.response.responseBody = Blob.valueOf(JSON.seralize(errs));
}catch(System.QueryException e){
   RestContext.response.statusCode = 404;
   SalesforceError[] errs = new SalesforceError[]{ 
     new SalesforceError('NOT_FOUND', 'Requested Lead not found')
   };
   RestContext.response.responseBody = Blob.valueOf(JSON.seralize(errs));
}catch(Exception e){ //something else happened
   RestContext.response.statusCode = 500;
   SalesforceError[] errs = new SalesforceError[]{ 
     new SalesforceError('BAD_REQUEST', e.getMessage())
   };
   RestContext.response.responseBody = Blob.valueOf(JSON.seralize(errs));
}

//std salesforce error response structure
public class SalesforceError {
   public String errorCode;
   public String message;
   public SalesforceError(String errorCode, string message){
      this.errorCode = errorCode;
      this.message = message;
   }
}
```
