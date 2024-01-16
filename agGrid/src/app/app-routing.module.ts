import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';

const routes: Routes = [
  {path:'', component:MyGridApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
