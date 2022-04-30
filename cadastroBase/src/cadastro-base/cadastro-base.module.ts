import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CadastroBaseRoutingModule } from './cadastro-base-routing.module';
import { CadastroBaseListComponent } from './cadastro-base-list/cadastro-base-list.component';
import { CadastroBaseViewComponent } from './cadastro-base-view/cadastro-base-view.component';




@NgModule({
  declarations: [
    CadastroBaseListComponent,
    CadastroBaseViewComponent
  ],
  imports: [
    CadastroBaseRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CadastroBaseModule { }
