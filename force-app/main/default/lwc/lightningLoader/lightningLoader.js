import { LightningElement , api} from 'lwc';

export default class LightningLoader extends LightningElement {
    
    @api spinnerText = ''
    @api size = 'medium'
    @api variant = 'base' 

    get helpText(){
        return this.spinnerText ? this.spinnerText : 'Loading Spinner'
    }
    get loadClass(){
        return `loader ${this.variant === 'inverse'? 'inverse' : ''}`
    }
}