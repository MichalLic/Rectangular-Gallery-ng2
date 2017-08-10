import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AngularFireModule} from 'angularfire2';

import {AppComponent} from './app.component';
import {UploadService} from './upload.service';
import * as firebase from 'firebase/app';
import {HeaderModule} from './header/header.module';
import {GalleryModule} from './gallery/gallery.module';
import {OutputModule} from './output/output.module';
import {EditorModule} from './editor/editor.module';
import {AppRoutingModule} from './app.routing.module';

const FIREBASECONFIG = {
  apiKey: 'AIzaSyCQBlpqtOGwn4ujwTTj90NYZ4e-wNnz5w4',
  authDomain: 'rectangulargallery.firebaseapp.com',
  databaseURL: 'https://rectangulargallery.firebaseio.com',
  projectId: 'rectangulargallery',
  storageBucket: 'rectangulargallery.appspot.com',
  messagingSenderId: '570084892486'
};
firebase.initializeApp(FIREBASECONFIG);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HeaderModule,
    GalleryModule,
    OutputModule,
    EditorModule
  ],
  providers: [
    {provide: 'FIREBASECONFIG', useValue: FIREBASECONFIG},
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
