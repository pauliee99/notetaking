import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Note } from 'src/app/Note';

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.css']
})
export class PopupFormComponent implements OnInit {
  @Output() onAddNote = new EventEmitter();
  nametext!: String; //to bind to te ngModel in html
  notetext!: String;
  date!: String;
  
  constructor(private dialogRef: MatDialogRef<Note>) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // if (!this.nametext) {
    //   alert('Please add a note!');
    //   return;
    // }

    var timestamp = 1301090400,
    date = new Date(),
    datevalues = 
      date.getFullYear() + "-"+
      [date.getMonth()+1]+ "-"+
      date.getDay()+ " "+
      date.getHours()+ ":"+
      date.getMinutes()+":"+
      date.getSeconds();

    const newNote = {
      name: this.nametext,
      date: datevalues,
      msg: this.notetext,
    };

    //this.onAddNote.emit(newNote);

    this.nametext = '';
    this.notetext = '';

    //return newNote;
    this.dialogRef.close({data:newNote});
  }

  // closeDialog(){
  //   this.dialogRef.close({data:this.onSubmit()});
  // }

}
