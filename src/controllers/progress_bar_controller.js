import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["innerBar", "display"];
  static values = {
    progress: Number,
  };
  static timerInterval;

  start() {
    this.reset();
    this.timerInterval = setInterval(() => {
      if (this.progressValue < 100) {
        this.progressValue++;
      } else {
        clearInterval(this.timerInterval);
      }
    }, 10);
  }
  reset() {
    this.progressValue = 0;
    clearInterval(this.timerInterval);
  }
  progressValueChanged() {
    this.innerBarTarget.style.width = `${this.progressValue}%`;
    this.displayTarget.textContent = `${this.progressValue}`;
  }
}
