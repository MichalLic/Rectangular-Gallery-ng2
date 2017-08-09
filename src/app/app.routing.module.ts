import {NgModule} from '@angular/core';
import {OutputComponent} from './output/output.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: 'output', pathMatch: 'full'},
  {path: 'output', component: OutputComponent}
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
