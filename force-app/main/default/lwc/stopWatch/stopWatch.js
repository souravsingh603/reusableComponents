import { LightningElement } from "lwc";

export default class StopWatch extends LightningElement {
  timer = 0;
  counter = 0;
  timerRef;
  storeTime = window.localStorage.getItem("startTimer")
  actionHandler(event) {
    const { label } = event.target;
    if (label === "Start") {
      this.setTime();
    }
    if (label === "Stop") {
      window.clearInterval(this.timerRef);
    }

    if (label === "Reset") {
      this.timer = 0;
      this.counter = 0;
      window.clearInterval(this.timerRef);
      window.localStorage.removeItem("startTimer")
    }
  }

  startTimerHandler(){
      const startTime = new Date()

      window.localStorage.setItem('startTimer', startTime)
      return startTime
  }

  setTime() {
      const startTime = new Date(this.storeTime || this.startTimerHandler())
    this.timerRef = window.setInterval(() => {
    //   this.counter += 1;
    //   this.timer = this.secondToHms(this.counter + 1);
    const secsDiff = new Date().getTime() - startTime.getTime()
    this.timer = this.secondToHms(Math.floor(secsDiff/1000));
    }, 1000);
  }

  secondToHms(d) {
    let h = Math.floor(d / 3600);
    let m = Math.floor((d % 3600) / 60);
    let s = Math.floor((d % 3600) % 60);
    let hDisplay = h > 0 ? h + (h === 1 ? " hour" : " hours") : "";
    let mDisplay = m > 0 ? m + (m === 1 ? " minute" : " minutes") : "";
    let sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";

    return hDisplay + mDisplay + sDisplay;
  }

  connectedCallback(){
      if(this.storeTime){
        this.setTime()
      }
  }
}
