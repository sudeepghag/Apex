
### AggregateResult
```javascript
List<AggregateResult> results = [SELECT Industry, count(Id) total FROM Account GROUP BY Industry]; 

for (AggregateResult ar : results) { 
    System.debug('Industry: ' + ar.get('Industry')); 
    System.debug('Total Accounts: ' + ar.get('total')); 
}
```

### Bulk Queries
> Another strategy to efficiently query large data sets is to use bulk queries. A bulk query can retrieve up to 15 GB of data, divided into fifteen 1 GB files.

> Bulk API query supports both query and `queryAll` operations. The queryAll operation returns records that have been deleted because of a merge or delete. The `queryAll` operation also returns information about archived Task and Event records.

> When adding a batch to a bulk query job, the Content-Type in the header for the request must be either `text/csv`, `application/xml`, or `application/json`, depending on the content type specified when the job was created. The actual SOQL statement supplied for the batch is in plain text format.
