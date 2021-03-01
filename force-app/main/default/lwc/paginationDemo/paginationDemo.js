import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/dataController.getContactList';
import getAccountList from '@salesforce/apex/dataController.getAccountList'
export default class PaginationDemo extends LightningElement {
    totalContacts
    visibleContacts

    totalAccounts
    visibleAccounts

    @wire(getContactList)
    contactList({data,error}){
        if(data){
            this.totalContacts = data
            console.log(this.totalContacts)
        }
        if(error){
            console.error(error)
        }
    }

    updateContactHandler(event){
        this.visibleContacts = [...event.detail.records]
        console.log(event.detail.records)
    }

    @wire(getAccountList)
    accountList({data,error}){
        if(data){
            this.totalAccounts = data
            console.log(this.totalAccounts)
        }
        if(error){
            console.error(error)
        }
    }

    updateAccountHandler(event){
        this.visibleAccounts = [...event.detail.records]
        console.log(event.detail.records)
    }

}