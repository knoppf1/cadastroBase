import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroBaseListComponent } from 'src/cadastro-base/cadastro-base-list/cadastro-base-list.component';
import { CadastroBaseViewComponent } from 'src/cadastro-base/cadastro-base-view/cadastro-base-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
},
{
  path: 'list',
  children: [
    {
      path: '',
      component: CadastroBaseListComponent
    },
  ],
},
{
  path: 'view',
  children: [
    {
      path: '',
      component: CadastroBaseViewComponent
    },

]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
