public inherited sharing class dataController {

    @auraEnabled(cacheable= true)
    public  static List<Contact> getContactList() {
        return [select id , name  from contact];
    }

    @auraEnabled(cacheable= true)
    public  static List<Account> getAccountList() {
        return [select id , name  from Account];
    }
}
