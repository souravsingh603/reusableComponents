import { LightningElement } from "lwc";
import * as MODAL_DATA from "./cardComponentConstant.js";

export default class CreateCardComponent extends LightningElement {
  MODAL_DATA = MODAL_DATA;
  showModalOne = false;
  showModalTwo = false;
  showModalThree = false;
  showModalFour = false;
  
  handleClick(event) {
    this[event.target.name] = true;
  }

  cancelHandler(event) {
    let modalid = event.target.dataset.modalId
      ? event.target.dataset.modalId
      : event.detail;
    this[modalid] = false;
  }

  handleSuccess(event){
   this[event.target.dataset.modalId] = false
  }

  get options() {
    return [
        { label: 'Sales', value: 'option1' },
        { label: 'Force', value: 'option2' },
    ];
}

radioHandler(event){
  console.log(`event value is ${event.target.value}`)
}
}
