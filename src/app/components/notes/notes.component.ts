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
  //notes2: Note[] = NOTES; //hardcoded notes

  constructor(private noteService: NoteServiceService) { }

  ngOnInit(): void {
    //this.notes = this.noteService.getNotes()
    // get all notes
    this.noteService.getNotes().subscribe((notes) => (this.notes = notes)); //to use it as an observable
    this.sortData;
  }

  deleteNote(note: Note) {
    this.noteService.deleteNote(note).subscribe(() => (this.notes = this.notes.filter((n) => n.id !== note.id)));
  }

  addNote(note: Note) {
    this.noteService.addNote(note).subscribe((note) => (this.notes.push(note)));
  }

  updateNote(note:Note){
    console.log(note);
  }

  get sortData() {
    return this.noteService.getNotes().subscribe((notes) => (this.notes.sort((a, b) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    })
    ));
  }

}
