import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroBaseListComponent } from './cadastro-base-list/cadastro-base-list.component';
import { CadastroBaseViewComponent } from './cadastro-base-view/cadastro-base-view.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroBaseListComponent
    },
    // {
    //   path: 'view',
    //   component: CadastroBaseViewComponent
    // },
    {
      path: 'view',
      children: [
        {
          path: '',
          component: CadastroBaseViewComponent
        },
        {
          path: ':id',
          component: CadastroBaseViewComponent
        }
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroBaseRoutingModule { }
