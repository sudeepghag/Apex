# Ant Installation

## Using the Ant Migration Tool

https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_deploying_ant.htm

1. install the Java JDK 
   http://www.oracle.com/technetwork/java/javase/downloads/index.html
   
2. install Apache Ant, Version 1.6 or later
Visit http://ant.apache.org/

3. Set up the environment variables 
   ANT_HOME
   JAVA_HOME
   PATH
   
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
   
   
