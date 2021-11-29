import { Injectable } from '@angular/core';
import {Note} from '../Note';
// import {NOTES} from '../hardcoded-notes';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  private apiUri = 'http://localhost:5000/notes'

  constructor(private http:HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUri);
  }

  deleteNote(note: Note): Observable<Note> {
    const url = `${this.apiUri}/${note.id}`;
    return this.http.delete<Note>(url);
  }
}
