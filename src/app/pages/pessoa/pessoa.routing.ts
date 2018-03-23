import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaListaComponent } from './lista/pessoa-lista.component';
import { PessoaFormComponent } from './formulario/pessoa-formulario.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'lista',
  pathMatch: 'full',
  },     
  { path: 'lista', component: PessoaListaComponent },
  { path: 'formulario', component: PessoaFormComponent },
  { path: 'formulario/:id', component: PessoaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
