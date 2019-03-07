``` java
global class FutureMethodExample
{
    @future(callout=true)
    public static void getStockQuotes(String acctName)
    {   
         // Perform a callout to an external service
    }

}
```
https://salesforce.stackexchange.com/questions/5602/http-callout-from-triggers

Callouts cannot be made from triggers as that would hold up the database transaction until the callout completed, which can be up to 120 seconds from a limits perspective. This could obviously cause significant contention with other transactions and impact performance.

The only way that you can execute a callout from a trigger is to schedule it to run asynchronously, for example by executing a method with the @future method as you have found. The key word here is asynchronously - you can't wait for a response from the callout as that would require the transaction to stall until it completes, which is the reason that synchronous callouts aren't allowed.

The way that I've handled this kind of thing in the past is to have a field on the object that captures the response. I pass the id(s) of the record(s) that I am processing to the @future method. Then when the callout completes, the @future method can retrieve the record(s) from the database and update the field(s).

If you are trying to return a response to the user (as part of a visualforce page maybe) you can still utilise this mechanism, you just have to poll the controller to check the object to see if a response has been received - I've used an actionpoller for this and provided the user with a 'checking' spinner to keep them (hopefully) interested.
