import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-note-form',
  templateUrl: './add-note-form.component.html',
  styleUrls: ['./add-note-form.component.css']
})
export class AddNoteFormComponent implements OnInit {
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    //document.getElementById("overlay")!.style.display = "block";
  }

}
