import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Note } from '../../Note'

@Component({
  selector: 'app-add-note-form',
  templateUrl: './add-note-form.component.html',
  styleUrls: ['./add-note-form.component.css']
})
export class AddNoteFormComponent implements OnInit {
  @Output() onAddNote = new EventEmitter();
  nametext!: String; //to bind to te ngModel in html
  notetext!: String;

  constructor() { }

  ngOnInit(): void {
    //document.getElementById("overlay")!.style.display = "block";
  }

  onSubmit() {
    if (!this.nametext) {
      alert('Please add a note!');
      return;
    }

    const newNote = {
      name: this.nametext,
      date: new Date().valueOf(),
      msg: this.notetext,
    };

    this.onAddNote.emit(newNote);

    this.nametext = '';
    this.notetext = '';
   }

}