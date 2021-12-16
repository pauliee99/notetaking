import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { concat } from 'rxjs';
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
  //constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
    //document.getElementById("overlay")!.style.display = "block";
  }

  onSubmit() {
    if (!this.nametext) {
      alert('Please add a note!');
      return;
    }

    var timestamp = 1301090400,
    date = new Date(),
    datevalues = 
      date.getFullYear() + "/"+
      [date.getMonth()+1]+ "/"+
      date.getDay()+ "-"+
      date.getHours()+ ":"+
      date.getMinutes()+":"+
      date.getSeconds();

    const newNote = {
      name: this.nametext,
      date: datevalues,
      msg: this.notetext,
    };

    this.onAddNote.emit(newNote);

    this.nametext = '';
    this.notetext = '';
  }


}