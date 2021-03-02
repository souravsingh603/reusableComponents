public inherited sharing class filePreviewAndDownloadController {

    @AuraEnabled(cacheable= true)
    public static Map<Id,string> getRelatedFilesByRecordId(string recordId) {
        //Get Record file IDs
        List<ContentDocumentLink> files = [SELECT contentDocumentId from ContentDocumentLink where LinkedEntityId =: recordId];
        List<Id> fileId = new List<Id>();
        for(ContentDocumentLink cdl : files){
            fileId.add(cdl.contentDocumentId);
        }

        List<ContentVersion> contentData = [SELECT contentDocumentId,FileExtension ,Title from ContentVersion where contentDocumentId IN : fileId];
        Map<id, string> mapIdTitle = new Map<id, string>();
        for(ContentVersion cdv : contentData){
            mapIdTitle.put(cdv.contentDocumentId, cdv.Title);
        }

        return mapIdTitle;
    }
}
