import { Component, EventEmitter, Input, OnInit } from '@angular/core';
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
  @Input() onUpdateNote: EventEmitter<Note> = new EventEmitter;
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

  getNote(note:Note) {
    this.noteService.getNote(note).subscribe((note) => (note));
  }

  updateNote(note:Note){
    //this.noteService.updateNote(note).subscribe((note) => (this.notes.push(note)));
    console.log(note.id);
    this.noteService.updateNote(note).subscribe((note) => (this.notes = this.notes.filter((n) => n.id !== note.id)));
  }

  get sortData() {
    return this.noteService.getNotes().subscribe(() => (this.notes.sort((a, b) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    })
    ));
  }

}
