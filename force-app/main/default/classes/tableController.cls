public inherited sharing class tableController {
    
    @AuraEnabled(cacheable= true)
    public static List<Account> getAccounts(){

        return [select id , name , AnnualRevenue , Industry , Phone from Account];
    }
}
