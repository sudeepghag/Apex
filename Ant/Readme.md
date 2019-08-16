# Ant Installation

## Using the Ant Migration Tool

https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_deploying_ant.htm

1. install the Java JDK 

   http://www.oracle.com/technetwork/java/javase/downloads/index.html
   
   JAVA_HOME   :  C:\Program Files\Java\jdk1.8.0_172
   PATH        :  C:\Program Files\Java\jdk1.8.0_172\bin
   CLASSPATH   :  C:\Program Files\Java\jdk1.8.0_172\lib
   
2. install Apache Ant, Version 1.6 or later
   Visit http://ant.apache.org/

3. Set up the environment variables:

   ANT_HOME    :  C:\Sudeep\Software\apache-ant-1.10.3
  
   Ant Installation Guide at http://ant.apache.org/manual/install.html

4. Verify that the JDK and Ant are installed correctly
   
   ant –version
   
   Apache Ant version 1.7.0 compiled on December 13 2006

5. Download the .zip file of the Winter '19 Ant Migration Tool.

   https://gs0.salesforce.com/dwnld/SfdcAnt/salesforce_ant_44.0.zip

6. Unzip
    ant-salesforce.jar
    sample folder
    build.properties 
    build.xml

7. copy ant-salesforce.jar to the Ant lib directory

8. Edit the \Sample\build.properties file:

   Enter your Salesforce production organization username and password for the sf.user and sf.password fields, respectively.
   
   If you are deploying to a sandbox organization, change the sf.serverurl field to https://test.salesforce.com
   
9. Open a command window in the \sample directory
   
   ant deployCode   
   
   ant retrieveCode
   

## Ant Migration Tool Guide

https://developer.salesforce.com/docs/atlas.en-us.216.0.daas.meta/daas/meta_development.htm


Metadata Types:
https://developer.salesforce.com/docs/atlas.en-us.216.0.api_meta.meta/api_meta/meta_types_list.htm
https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/manifest_samples.htm


*	Metadata Type		--	Allows Wildcard (*)?
*	AccountSettings		--	Not Applicable
*	ActionLinkGroupTemplate		--	Yes
*	ActionOverride		--	No
*	ActivitiesSettings		--	Not Applicable
*	AddressSettings		--	Not Applicable
*	AnalyticSnapshot		--	No
*	ApexClass		--	Yes
*	ApexComponent		--	Yes
*	ApexPage		--	Yes
*	ApexTrigger		--	Yes
*	AppMenu		--	Yes
*	ApprovalProcess		--	Yes
*	ArticleType		--	Yes
*	AssignmentRules		--	Yes
*	Audience		--	Yes
*	AuthProvider		--	Yes
*	AuraDefinitionBundle		--	Yes
*	AutoResponseRules		--	Yes
*	BaseSharingRule		--	Yes
*	Bot		--	Yes
*	BotVersion		--	No
*	BrandingSet		--	Yes
*	BusinessHoursSettings		--	Not Applicable
*	BusinessProcess		--	(See description.)
*	CallCenter		--	Yes
*	CaseSettings		--	Not Applicable
*	CaseSubjectParticle		--	No
*	Certificate		--	Yes
*	ChatterAnswersSettings		--	Not Applicable
*	ChatterExtension		--	Not Applicable
*	CleanDataService		--	Yes
*	CMSConnectSource		--	Yes
*	CompanySettings		--	Not Applicable
*	Community (Zone)		--	Yes
*	CommunityTemplateDefinition		--	Yes
*	CommunityThemeDefinition		--	Yes
*	CompactLayout		--	Yes
*	ConnectedApp		--	Yes
*	ContentAsset		--	Yes
*	ContractSettings		--	Not Applicable
*	CorsWhitelistOrigin		--	Yes
*	CriteriaBasedSharingRule		--	Yes
*	CspTrustedSite		--	Not Applicable
*	CustomApplication		--	Yes
*	CustomApplicationComponent		--	Yes
*	CustomFeedFilter		--	Yes
*	CustomField		--	No
*	CustomLabel		--	No
*	Custom Metadata Types (CustomObject)		--	Yes
*	CustomMetadata		--	Yes
*	CustomLabels		--	Yes
*	CustomObject		--	(See description.)
*	CustomObjectTranslation		--	Yes
*	CustomPageWebLink		--	Yes
*	CustomPermission		--	Yes
*	CustomSite		--	Yes
*	CustomTab		--	Yes
*	Dashboard		--	No
*	DataCategoryGroup		--	Yes
*	DelegateGroup		--	Yes
*	Document		--	No
*	DuplicateRule		--	Yes
*	EclairGeoData		--	Yes
*	EmailServicesFunction		--	No
*	EmailTemplate		--	No
*	EmbeddedServiceBranding		--	No
*	EmbeddedServiceConfig		--	No
*	EmbeddedServiceLiveAgent		--	No
*	EntitlementProcess		--	Yes
*	EntitlementSettings		--	Not Applicable
*	EntitlementTemplate		--	Yes
*	EventDelivery		--	Yes
*	EventSubscription		--	Yes
*	ExternalServiceRegistration		--	Yes
*	ExternalDataSource		--	Yes
*	FeatureParameterBoolean		--	Yes
*	FeatureParameterDate		--	Yes
*	FeatureParameterInteger		--	Yes
*	FieldSet		--	Yes
*	FileUploadAndDownloadSecuritySettings		--	Not Applicable
*	FlexiPage		--	Yes
*	Flow		--	Yes
*	FlowCategory		--	Yes
*	FlowDefinition		--	Yes
*	Folder		--	No
*	FolderShare		--	No
*	ForecastingSettings		--	Not Applicable
*	GlobalValueSet		--	Yes
*	GlobalValueSetTranslation		--	Yes
*	GlobalPicklistValue		--	No
*	Group		--	Yes
*	HomePageComponent		--	Yes
*	HomePageLayout		--	Yes
*	IdeasSettings		--	Not Applicable
*	Index		--	No
*	InstalledPackage		--	Yes
*	KeywordList		--	Yes
*	KnowledgeSettings		--	Not Applicable
*	Layout		--	Yes
*	Letterhead		--	No
*	LightningBolt		--	Yes
*	LightningComponentBundle		--	Not Applicable
*	LightningExperienceTheme		--	Yes
*	ListView		--	No
*	LiveAgentSettings		--	Not Applicable
*	LiveChatAgentConfig		--	Yes
*	LiveChatButton		--	Yes
*	LiveChatDeployment		--	Yes
*	LiveChatSensitiveDataRule		--	Yes
*	ManagedTopics		--	Yes
*	MatchingRule		--	Yes
*	Metadata		--	No
*	MetadataWithContent		--	No
*	MilestoneType		--	Yes
*	MlDomain (Beta)		--	Yes
*	MobileSettings		--	Not Applicable
*	ModerationRule		--	Yes
*	NamedCredential		--	Yes
*	NamedFilter		--	No
*	NameSettings		--	Not Applicable
*	Network		--	Yes
*	NetworkBranding		--	Yes
*	OmniChannelSettings		--	Not Applicable
*	OpportunitySettings		--	Not Applicable
*	OrderSettings		--	Not Applicable
*	OrgPreferenceSettings		--	No applicable
*	OwnerSharingRule		--	Yes
*	Package		--	No
*	PathAssistant		--	Yes
*	PathAssistantSettings		--	Not Applicable
*	PermissionSet		--	Yes
*	Picklist (Including Dependent Picklist)		--	No
*	PlatformCachePartition		--	Yes
*	Portal		--	Yes
*	PostTemplate		--	Yes
*	PresenceDeclineReason		--	Yes
*	PresenceUserConfig		--	Yes
*	ProductSettings		--	Not Applicable
*	Profile		--	Yes
*	ProfileActionOverride		--	No
*	ProfilePasswordPolicy		--	Yes
*	ProfileSessionSetting		--	Yes
*	Queue		--	Yes
*	QueueRoutingConfig		--	Yes
*	QuickAction		--	Yes
*	QuoteSettings		--	Not Applicable
*	RecordType		--	No
*	RemoteSiteSetting		--	Not Applicable
*	Report		--	No
*	ReportType		--	Yes
*	Role		--	Yes
*	SamlSsoConfig		--	Yes
*	Scontrol		--	Yes
*	SearchLayouts		--	No
*	SearchSettings		--	No
*	SecuritySettings		--	Not Applicable
*	ServiceChannel		--	Yes
*	ServicePresenceStatus		--	Yes
*	SharingBaseRule		--	No
*	SharingReason		--	No
*	SharingRecalculation		--	No
*	SharingRules		--	Yes
*	SharingSet		--	Yes
*	SiteDotCom		--	Yes
*	Skill		--	Yes
*	SocialCustomerServiceSettings		--	No
*	StandardValueSet		--	No
*	StandardValueSetTranslation		--	Yes
*	StaticResource		--	Yes
*	SynonymDictionary		--	Yes
*	Territory		--	Yes
*	Territory2		--	Yes
*	Territory2Model		--	Yes
*	Territory2Rule		--	Yes
*	Territory2Settings		--	No
*	Territory2Type		--	Yes
*	TopicsForObjects		--	Yes
*	TransactionSecurityPolicy		--	Yes
*	Translations		--	Yes
*	ValidationRule		--	No
*	WaveApplication		--	Yes
*	WaveDashboard		--	Yes
*	WaveDataflow		--	Yes
*	WaveDataset		--	Yes
*	WaveLens		--	Yes
*	WaveTemplateBundle		--	Yes
*	WaveXmd		--	Yes
*	WebLink		--	No
*	Workflow		--	Yes
*	
### Get list of Lightning Component Definitions
https://brave-goat-447291-dev-ed.my.salesforce.com/0Ab

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>ObjectSearchController</members>
        <name>ApexClass</name>
    </types>
    <types>
        <members>ObjectSearch</members>
        <members>OpenAPICompDefinition</members>
        <name>AuraDefinitionBundle</name>
    </types>
    <version>44.0</version>
</Package>
```

http://dazeworks.com/2018/05/09/ant-migration-tool/

