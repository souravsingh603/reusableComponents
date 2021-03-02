import { LightningElement, wire,api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import getRelatedFilesByRecordId from '@salesforce/apex/filePreviewAndDownloadController.getRelatedFilesByRecordId'

export default class FilePreviewAndDownloads extends NavigationMixin(LightningElement) {
    
    fileData
    @api recordId
    @wire(getRelatedFilesByRecordId,{recordId : '$recordId'})
    relatedFiles({data,error}){
        if(data){
            console.log(data)
        this.fileData= Object.keys(data).map(item=>{
                return {"lable" : data[item] , "value" : item ,
                        "url":`/sfc/servlet.shepherd/document/download/${item}`
            }
            })
        }
        if(error){
            console.log(error)
        }
    }

    peviewFile(event){
        this[NavigationMixin.Navigate]({
            type : 'standard__namedPage',
            attributes : {
                pageName : 'filePreview'
            },
            state : {
                selectedRecordId : event.target.dataset.id
            }
        })
        console.log(event.target.dataset.id)
    }
}