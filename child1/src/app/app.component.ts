import { Component } from '@angular/core';

@Component({
  selector: 'child1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child1';
  constructor(){
    window.addEventListener('ADD_TO_CART', (ev)=>{
      console.log("event caught in child 1", ev);
    })
  }
}
