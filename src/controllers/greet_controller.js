import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["helloGreet"];
  connect() {
    console.log("Greet Controller", this.helloGreetTarget);

    const helloTraget = this.helloGreetTarget;

    const date = new Date();
    const hour = date.getHours();
    let result = "";
    if (hour >= 0 && hour <= 11) {
      result = "Good Morning";
    } else if (hour >= 12 && hour <= 18) {
      result = "Good Afternoon";
    } else {
      result = "Good Evening";
    }
    helloTraget.textContent = result;
  }
}
