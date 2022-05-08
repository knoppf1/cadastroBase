import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosViewComponent } from './favoritos-view/favoritos-view.component';

const routes: Routes = [
  {
    path: 'favoritos',
    component: FavoritosViewComponent
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritosRoutingModule { }
