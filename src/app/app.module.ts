import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireModule} from 'angularfire2';

import {AppComponent} from './app.component';
import {OutputComponent} from './output/output.component';
import {EditorComponent} from './editor/editor.component';
import {GalleryComponent} from './gallery/gallery.component';
import {HeaderComponent} from './header/header.component';
import {UploadService} from './upload.service';
import * as firebase from 'firebase/app';

const FIREBASECONFIG = {
  apiKey: 'AIzaSyCQBlpqtOGwn4ujwTTj90NYZ4e-wNnz5w4',
  authDomain: 'rectangulargallery.firebaseapp.com',
  databaseURL: 'https://rectangulargallery.firebaseio.com',
  projectId: 'rectangulargallery',
  storageBucket: 'rectangulargallery.appspot.com',
  messagingSenderId: '570084892486'
};
firebase.initializeApp(FIREBASECONFIG);


const appRoutes: Routes = [
  {path: '', redirectTo: 'output', pathMatch: 'full'},
  {path: 'output', component: OutputComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    OutputComponent,
    EditorComponent,
    GalleryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {provide: 'FIREBASECONFIG', useValue: FIREBASECONFIG},
    UploadService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
