import { Injectable } from '@angular/core';
import {Note} from '../Note';
// import {NOTES} from '../hardcoded-notes';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  private apiUrl = 'http://localhost:5000/notes'

  constructor(private http:HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  deleteNote(note: Note): Observable<Note> {
    const url = `${this.apiUrl}/${note.id}`;
    return this.http.delete<Note>(url);
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, note, httpOptions)
  }

  updateNote(note: Note): Observable<Note> {
    console.log(note)
    return this.http.put<Note>(this.apiUrl+"/"+note.id, note, httpOptions)
  }
}
