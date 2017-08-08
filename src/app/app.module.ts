import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {ImageUploadModule} from 'angular2-image-upload';

import {AppComponent} from './app.component';
import {OutputComponent} from './output/output.component';
import {EditorComponent} from './editor/editor.component';
import {GalleryComponent} from './gallery/gallery.component';
import {HeaderComponent} from './header/header.component';
import {AngularFireModule} from 'angularfire2';


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
    ImageUploadModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
