import {NgModule} from '@angular/core';
import {GalleryComponent} from './gallery.component';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app.routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
})
export class GalleryModule {
}
