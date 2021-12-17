import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'notetaking';

  ngOnInit(): void{}

}
export class addNote {

  public items: Array<string>;

  constructor() {
    this.items = ["item1", "item2", "item3"]
  }

  

  // public open(event, item) {
  //   alert('Open ' + item);
  // }

}
