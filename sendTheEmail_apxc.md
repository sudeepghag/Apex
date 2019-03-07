``` java
public void sendTheEmail( String[] bunchOfAddresses, String[] bunchOfSubjectTags, String[] bunchOfMsgBodys, Integer numberOfSeparateEmails ) {

	Messaging.SingleEmailMessage [] theEmails = new List();
	for( Integer i = 0; i < numberOfSeparateEmails; i++ ){
		String[] toAddress = new List(); // setToAddresses will only accept a List (array)
		toAddress.add(bunchOfAddresses.get(i));
		String subjectTag = bunchOfSubjectTags.get(i);
		String msgBody = bunchOfMsgBodys.get(i);

		Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
		mail.setToAddresses( toAddress ); // only takes a List (array) as noted above
		mail.setReplyTo( replyAddress );
		mail.setSenderDisplayName('My Company Email');
		mail.setSubject(subjectTag);
		mail.setPlainTextBody( msgBody );

		theEmails.add(mail);
	}
	
	Messaging.Email[] allMails = new List();
	
	for( Integer j = 0; j < theEmails.size(); j++ ){
		allMails.add(theEmails.get(j));
	}//for	
	
	
	Messaging.SendEmailResult[] results = Messaging.sendEmail( allMails );
	
	Messaging.SendEmailError[] errors = new List();
	for( Messaging.SendEmailResult currentResult : results ) {
		errors = currentResult.getErrors();
		if( null != errors ) {
			for( Messaging.SendEmailError currentError : errors ) {
				emailErrorReport = emailErrorReport + '(' + currentError.getStatusCode() + ') ' + currentError.getMessage() + '\r' ;
			}//for
		}//if
	}//for
}	
	
```
