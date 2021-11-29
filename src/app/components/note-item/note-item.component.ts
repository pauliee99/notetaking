import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Note} from '../../Note';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note!: Note;
  @Output() onDeleteNote: EventEmitter<Note> = new EventEmitter;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(note: Note) {
    this.onDeleteNote.emit(note);
  }

  testFunc() {
    console.log(123);
  }

}
