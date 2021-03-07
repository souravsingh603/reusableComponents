import { LightningElement, wire } from "lwc";
import {exportCSVFile} from 'c/utils';
import getAccounts from '@salesforce/apex/tableController.getAccounts';
export default class CsvDemo extends LightningElement {

  accountData

  @wire(getAccounts)
  accountRec({data,error}){
    if(data){
      this.accountData = data
    }
    if(error){
      console.error(error)
    }
  }

  userData = [
    { userName: "Sourav", age: 15, title: "developer" },
    { userName: "Rahul", age: 35, title: "Manager" },
    { userName: "Toto", age: 45, title: "President" },
    { userName: "Lewis", age: 25, title: "Driver" }
  ];

  accountHeader = {
    Id : "Record Id",
    Name : 'Name',
    AnnualRevenue : 'Annual Revenue' ,
    Industry : "Industry",
    Phone : "Phone"
  }

  headers = {
    userName : "User Name",
    age : "Age",
    title : "Title"
  }

  downloadUserDetail(){
    debugger;
      console.log('Download Triggered')
      debugger;
      exportCSVFile(this.accountHeader,this.accountData,"user detail")
  }
}
