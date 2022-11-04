import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarinhoComponent } from './components/carinho/carinho.component';

const routes: Routes = [
  {
    path: 'cadastrar',
    component: CadastrarComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'carrinho',
    component: CarinhoComponent,
  },

  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
