import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["introH1", "introP1"];

  connect() {
    console.log("Hello from Intro Controller", this.element);

    const h1Element = this.introH1Target;
    const p1Element = this.introP1Target;

    // Q1 DOM
    // after 5 second it will update the dom
    setTimeout(() => {
      h1Element.textContent = "Understanding the DOM";
      h1Element.style.color = "red";
      p1Element.style.fontSize = "20px";
      // document.body.classList.toggle("bg-red");
    }, 5000);
  }
}
