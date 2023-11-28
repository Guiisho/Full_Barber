import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { CortesComponent } from './Components/cortes/cortes.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [{
    path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'cortes', component: CortesComponent},
  { path: 'clientes', component: ClientesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
