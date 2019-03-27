https://forcedotcom.github.io/salesforcedx-vscode/articles/getting-started/first-project

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
