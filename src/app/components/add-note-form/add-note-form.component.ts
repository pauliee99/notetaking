import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-note-form',
  templateUrl: './add-note-form.component.html',
  styleUrls: ['./add-note-form.component.css']
})
export class AddNoteFormComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  nametext!: String;
  notetext!: String;

  constructor() { }

  ngOnInit(): void {
    //document.getElementById("overlay")!.style.display = "block";
  }

  onSubmit() {
    console.log(this.nametext)
    if (!this.nametext) {
      alert('Please add a note!');
      return;
    }

    const newNote = {
      nametext: this.nametext,
      day: this.notetext,
    };

    this.btnClick.emit(newNote);

    this.nametext = '';
    this.notetext = '';
   }

}
