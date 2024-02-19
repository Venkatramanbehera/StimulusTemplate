import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["input", "container"];
  connect() {
    console.log("connected to Todo Controller");
  }
  add(e) {
    e.preventDefault();
    const text = this.inputTarget.value;
    const li = document.createElement("li");
    li.innerHTML = `${text}
    <button
      class="btn btn-secondary"
      data-action="click->todo#remove"
    >
      delete
    </button>`;
    li.setAttribute("data-action", "click->todo#done");
    this.containerTarget.insertAdjacentElement("beforeend", li);
    // 1. "beforebegin": Inserts the element node as a previous sibling of the context element.
    // 2. "afterbegin": Inserts the element node as the first child of the context element.
    // 3. "beforeend": Inserts the element node as the last child of the context element.
    // 4. "afterend": Inserts the element node as a following sibling of the context element.
    e.currentTarget.reset();
  }
  done(e) {
    e.currentTarget.classList.toggle("crossed");
  }
  remove(e) {
    const item = e.currentTarget.parentElement;
    console.log("Item", item);
    this.containerTarget.removeChild(item);
  }
}
