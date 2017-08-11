import {NgModule} from '@angular/core';
import {OutputComponent} from './output/output.component';
import {RouterModule, Routes} from '@angular/router';
import {GalleryComponent} from './gallery/gallery.component';
import {EditorComponent} from './editor/editor.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'output', pathMatch: 'full'},
  {path: 'output', component: OutputComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'edit/:id', component: EditorComponent},
];

@NgModule ({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
