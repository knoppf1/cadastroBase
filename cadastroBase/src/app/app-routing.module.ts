import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroBaseListComponent } from 'src/cadastro-base/cadastro-base-list/cadastro-base-list.component';
import { CadastroBaseViewComponent } from 'src/cadastro-base/cadastro-base-view/cadastro-base-view.component';
import { FavoritosViewComponent } from 'src/favoritos/favoritos-view/favoritos-view.component';
import { InicialViewComponent } from 'src/inicial/inicial-view/inicial-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicial',
    pathMatch: 'full'
},
{
  path: 'inicial',
  children: [
    {
      path: '',
      component: InicialViewComponent
    },
  ],
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
  path: 'compras',
  children: [
    {
      path: '',
      component: CadastroBaseViewComponent
    },

]
},
{
  path: 'favoritos',
  children: [
    {
      path: '',
      component: FavoritosViewComponent
    },

]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
