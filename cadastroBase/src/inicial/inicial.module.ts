
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialRoutingModule } from './inicial-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicialViewComponent } from './inicial-view/inicial-view.component';
import { FilmeComponent } from './filme/filme.component';




@NgModule({
  declarations: [
    InicialViewComponent,
    FilmeComponent,


  ],
  imports: [
    InicialRoutingModule,
    CommonModule,
    FormsModule,

    ReactiveFormsModule,
  ]
})
export class InicialModule { }
