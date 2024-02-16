import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["details"]
  connect(){
    console.log("Hi, From accordian controller")
  }
  
  toggle(){
    if (this.detailsTarget.style.maxHeight){
      this.detailsTarget.style.maxHeight = null;
    }else{
      this.detailsTarget.style.maxHeight = this.detailsTarget.scrollHeight + 'px'
    }
  }
}