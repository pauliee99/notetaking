import { Component, EventEmitter, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'src/app/Note';

@Component({
  selector: 'app-popup-form-update',
  templateUrl: './popup-form-update.component.html',
  styleUrls: ['./popup-form-update.component.css']
})
export class PopupFormUpdateComponent implements OnInit {
  @Input() onUpdateNote = new EventEmitter();
  nametext: String = this.data.note.name; //to bind to te ngModel in html
  notetext: String = this.data.note.msg;
  date!: String;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<Note>) { }

  ngOnInit(): void {
    console.log(this.nametext);
  }

  onSubmit() {
    var timestamp = 1301090400,
    date = new Date(),
    datevalues = 
      date.getFullYear() + "-"+
      [date.getMonth()+1]+ "-"+
      date.getDay()+ " "+
      date.getHours()+ ":"+
      date.getMinutes()+":"+
      date.getSeconds();

    const updateNote = {
      name: this.nametext,
      date: datevalues,
      msg: this.notetext,
    };

    this.dialogRef.close({data:updateNote});
  }

}
