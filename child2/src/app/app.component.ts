import { Component } from '@angular/core';

@Component({
  selector: 'child2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child2';
  constructor(){
    setTimeout(()=>{
      console.log("broadcasting event from child2");
      
      window.dispatchEvent(new CustomEvent("ADD_TO_CART", {
        detail: {
          action: "didInitialize",
          payload: 3
        }
      }));
    }, 5000)
    
  }
}
