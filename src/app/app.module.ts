import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; //x button
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotesComponent } from './components/notes/notes.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { AddNoteFormComponent } from './components/add-note-form/add-note-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupFormComponent } from './components/popup-form/popup-form.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesComponent,
    AddBtnComponent,
    NoteItemComponent,
    AddNoteFormComponent,
    PopupFormComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
