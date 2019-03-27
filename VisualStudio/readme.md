https://forcedotcom.github.io/salesforcedx-vscode/articles/getting-started/first-project


## Salesforce CLI Command Reference:
https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_source.htm

### Get Single Object
sfdx force:source:retrieve -m CustomObject:Account

### To retrieve all Apex classes:
$ sfdx force:source:retrieve -m ApexClass

### To retrieve a specific Apex class:
$ sfdx force:source:retrieve -m ApexClass:MyApexClass

### To retrieve all custom objects and Apex classes:
$ sfdx force:source:retrieve -m CustomObject,ApexClass

### To retrieve all Apex classes and two specific profiles (one of which has a space in its name):
$ sfdx force:source:retrieve -m "ApexClass, Profile:My Profile, Profile: AnotherProfile"
