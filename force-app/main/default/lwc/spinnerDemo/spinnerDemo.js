import { LightningElement } from 'lwc';

export default class SpinnerDemo extends LightningElement {
    showOne = false
    showTwo = false
    showThree = false
    spinnerHandler(event){
       
        let name = event.target.name
        this[name] = true
        let timer = window.setTimeout(()=>{
            this[name] = false
            window.clearTimeout(timer)
        },5000)
    }

    // spinnerTwoHandler(event){
    //     this[event.target.name] = true
    // }

    // spinnerThreeHandler(event){
    //     this[event.target.name] = true
    // }
}