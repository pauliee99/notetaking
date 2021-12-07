import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service.service';
import {Note} from '../../Note';
//import {NOTES} from '../../hardcoded-notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[] = []; //initialize

  constructor(private noteService: NoteServiceService) { }

  ngOnInit(): void {
    //this.notes = this.noteService.getNotes()
    this.noteService.getNotes().subscribe((notes) => (this.notes = notes)); //to use it as an observable
  }

  deleteNote(note: Note) {
    this.noteService.deleteNote(note).subscribe(() => (this.notes = this.notes.filter((n) => n.id !== note.id)));
  }

  toggleAddNote() {
    console.log('add a note');
  }

  addNote(note: Note) {
    this.noteService.addNote(note).subscribe((note) => (this.notes.push(note)));
  }

}
