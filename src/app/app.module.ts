import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotesComponent } from './components/notes/notes.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; //x button
import { HttpClientModule} from '@angular/common/http';
import { AddNoteFormComponent } from './components/add-note-form/add-note-form.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesComponent,
    AddBtnComponent,
    NoteItemComponent,
    AddNoteFormComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
