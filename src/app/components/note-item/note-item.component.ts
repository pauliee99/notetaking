import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Note} from '../../Note';
//import {NOTES} from '../../hardcoded-notes';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { PopupFormUpdateComponent } from '../popup-form-update/popup-form-update.component';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note!: Note;
  @Output() onDeleteNote: EventEmitter<Note> = new EventEmitter;
  @Output() onUpdateNote: EventEmitter<Note> = new EventEmitter;
  faTimes = faTimes;

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  onDelete(note: Note) {
    this.onDeleteNote.emit(note);
  }

  onUpdate(note: Note) {
    let dialogRef = this.dialog.open(PopupFormUpdateComponent, { data: { note } });

    dialogRef.afterClosed().subscribe(note => {
      this.onUpdateNote.emit(note.data);
      console.log("afterclosed "+note.data.msg);
    });
    //this.onUpdateNote.emit(note);
  }

}
