

```javascript

Account acc = New Account(Name = 'British Sugar plc.');

Schema.DescribeSObjectResult d = Schema.SObjectType.Account; 
Map<String,Schema.RecordTypeInfo> rtMapByName = d.getRecordTypeInfosByName();
Schema.RecordTypeInfo rtByName =  rtMapByName.get('Retail');

acc.RecordTypeId = rtByName.getRecordTypeId();
insert acc;

--OR--

RecordType rt = [SELECT Id,Name FROM RecordType WHERE SobjectType='Account' LIMIT 1];

Account acc = New Account(Name = 'British Sugar plc.');

Schema.DescribeSObjectResult d = Schema.SObjectType.Account; 
Map<Id,Schema.RecordTypeInfo> rtMapById = d.getRecordTypeInfosById();
Schema.RecordTypeInfo rtById =  rtMapById.get(rt.id);

acc.RecordTypeId = rtMapById.getRecordTypeId();
insert acc;

```

