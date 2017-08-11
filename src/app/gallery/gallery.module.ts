import {NgModule} from '@angular/core';
import {GalleryComponent} from './gallery.component';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app.routing.module';
@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    AppRoutingModule],
})
export class GalleryModule {
}
