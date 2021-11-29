import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.css']
})
export class AddBtnComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  @Input() formClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    
    this.btnClick.emit();
    document.getElementById("overlay")!.style.display = "block";
    //return `<app-add-note-form></app-add-note-form>`
  }

}
