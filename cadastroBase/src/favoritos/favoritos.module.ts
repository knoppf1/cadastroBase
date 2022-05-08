import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritosRoutingModule } from './favoritos-routing.module';
import { FavoritosViewComponent } from './favoritos-view/favoritos-view.component';
import { FilmeComponent } from 'src/inicial/filme/filme.component';



@NgModule({
  declarations: [

    FavoritosViewComponent,

  ],
  imports: [
    CommonModule,

    FavoritosRoutingModule
  ]
})
export class FavoritosModule { }
