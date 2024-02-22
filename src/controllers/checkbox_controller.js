import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["container"];
  connect() {
    // console.log("Checkbox Effect ");
  }
  selectAll() {
    var checkboxs = this.containerTarget.querySelectorAll(
      "input[type=checkbox]"
    );
    checkboxs.forEach((checkbox) => {
      checkbox.checked = true;
    });
  }
  deselectAll() {
    var checkboxs = this.containerTarget.querySelectorAll(
      "input[type=checkbox]"
    );
    checkboxs.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
}
