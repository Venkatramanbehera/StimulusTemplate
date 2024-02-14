import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["toggleable"];
  connect() {
    console.log("Hello from JS controller");

    // const name = prompt("Enter name").trim();
    // if (name) {
    //   let h1Ele = document.createElement("h1");
    //   h1Ele.textContent = `Hello ${name}`;
    //   // console.log("h1Element", h1Ele);

    //   this.toggleableTarget.appendChild(h1Ele);
    // }
  }
}
