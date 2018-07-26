public class Product2Helper {

    /**
     * @name COLLABORATION_GROUP
     * @description List of CollaborationGroup used in both business and test logic
    **/
    
    public static List<CollaborationGroup> COLLABORATION_GROUP = [
        SELECT Id
        FROM CollaborationGroup
        WHERE Name = :constants.INVENTORY_ANNOUNCEMENTS
        OR Name = :('TEST'+constants.INVENTORY_ANNOUNCEMENTS)
        LIMIT 1
    ];

    /**
     * @name afterUpdate
     * @description called by product2 Trigger on After Update
     * @param List<Product2> newList
     * @param List<Product2> oldList
    **/
    //public static void AfterUpdate(List<Product2> newList, List<Product2> oldList){
    public static void AfterUpdate(List<Product2> newList){
        //ToDo: Declare a List of Product2 records named needsAnnouncement
		list<Product2> needsAnnouncement = new list<Product2>();
        Double alertQuantity;
        
        //ToDo: Declare a Map of Strings to Inventory_Setting__mdt records
		map<String, Inventory_Setting__mdt> mapInventorySettings = new map<String, Inventory_Setting__mdt>();
        
        //ToDo: Loop through a query of Inventory_Setting__mdt records and populate the Map with Name as the key
		list<Inventory_Setting__mdt> lstInvSet = [select MasterLabel, Low_Quantity_alert__c from Inventory_Setting__mdt];
        for(Inventory_Setting__mdt oInvSet: lstInvSet){
            mapInventorySettings.put(oInvSet.MasterLabel, oInvSet);
        }//for       
        
        //ToDo: Loop through the Products in newList
        // Use the corresponding Inventory Setting record to determine the correct Low Quantity Alert
        // If the Product's Quantity Remaining has been changed to less than the Low Quantity Alert
        //      add it to the needsAnnouncement list
        //for(Product2 p : newList){
        for(integer i=0;i<newList.size();i++){
            
            alertQuantity = Double.valueOf(mapInventorySettings.get(newList[i].Family).Low_Quantity_alert__c);
                                           
            if(newList[i].Quantity_Remaining__c <= alertQuantity ){//&& oldList[i].Quantity_Remaining__c > alertQuantity){
                needsAnnouncement.add(newList[i]);
            }//if
        }//for
        //ToDo: Pass records to the postAlerts method
        PostAlerts(needsAnnouncement);
    }

    /**
     * @name postAlerts
     * @description called by product2 Trigger on After Update
     * @param List<Product2> productList
    **/
    public static void PostAlerts(List<Product2> productList){
        List<ConnectApi.AnnouncementInput> toPost = new List<ConnectApi.AnnouncementInput>();
        for ( Product2 p : productList ){
            // ToDo: Construct a new AnnouncementInput for the Chatter Group so that it:
            // expires in a day
            // does not notify users via email.
            // and has a text body that includes the name of the product followed by the INVENTORY_LEVEL_LOW constant            
            connectAPI.AnnouncementInput ai = new connectAPI.AnnouncementInput();
            ai.sendEmails = false;
            ai.expirationDate =  Date.Today().AddDays(1);
            ai.parentId = COLLABORATION_GROUP[0].id;
            
            ConnectApi.MessageBodyInput messageInput = new ConnectApi.MessageBodyInput();
            messageInput.messageSegments = new List<ConnectApi.MessageSegmentInput>();
            ConnectApi.TextSegmentInput textSegment  = new ConnectApi.TextSegmentInput();
            textSegment.text = p.name + ' ' + constants.INVENTORY_LEVEL_LOW;
            messageInput.messageSegments.add(textSegment);
			ai.body = messageInput;

            toPost.add(ai);
        }
        // ToDo: Create and enqueue an instance of the announcementQueuable class with the list of Products
        //AnnouncementQueueable.PostAnnouncements(toPost);
        AnnouncementQueueable q = new AnnouncementQueueable();
        q.toPost = toPost;
        System.enqueueJob(q);
        
    }
}