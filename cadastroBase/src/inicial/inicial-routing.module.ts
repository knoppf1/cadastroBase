import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialViewComponent } from './inicial-view/inicial-view.component';

const routes: Routes = [
  {
    path: '',
    component: InicialViewComponent
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicialRoutingModule { }
