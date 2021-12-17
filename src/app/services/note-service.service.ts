import { Injectable } from '@angular/core';
import {Note} from '../Note';
// import {NOTES} from '../hardcoded-notes';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Activity } from '../Activity';

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
    const url = `${this.apiUrl}/${note.id}`;
    return this.http.put<Note>(url, note, httpOptions);
  }

  getNote(note: Note): Observable<Note> {
    const url = `${this.apiUrl}/${note.id}`;
    return this.http.get<Note>(url);
  }

  //bore api
  // getActivity(): Observable<Activity> {
  //   const url = 'http://www.boredapi.com/api/activity/'
  //   return this.http.get<Activity>(url);
  // }
}
