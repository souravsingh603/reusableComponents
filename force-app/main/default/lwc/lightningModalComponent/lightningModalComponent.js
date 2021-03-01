import { LightningElement, api } from "lwc";

export default class LightningModalComponent extends LightningElement {
  @api title;
  @api hideHeader;
  @api modalId;
  @api size ;
  //Local property

  footerClass = "";

  get modalContentId() {
    return `modal-content-Id-${this.modalId}`;
  }

  get modalBodyId() {
    return `modal-body-id-${this.modalId}`;
  }

  closeHandler() {
    this.dispatchEvent(
      new CustomEvent("iconclose", {
        detail: this.modalId
      })
    );
  }

  handleFooterSlotChange(event) {
    this.footerClass =
      event.target.assignedElements().length !== 0 ? "slds-modal__footer" : "";
  }

  get modalSize() {
    let size = this.size ? this.size.toLowerCase() : "";
    return `slds-modal slds-fade-in-open ${
      size === "small"
        ? "slds-modal_small"
        : size === "medium"
        ? "slds-modal_medium"
        : size === "large"
        ? "slds-modal_large"
        : ""
    }`;
  }
}
