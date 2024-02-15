import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["source"];
  static classes = ["supported"];
  connect() {
    console.log("Welcome from clipboard controller");
    if ("clipboard" in navigator) {
      this.element.classList.add(this.supportedClass);
    }
  }
  copy() {
    navigator.clipboard.writeText(this.sourceTarget.value);
  }
}
