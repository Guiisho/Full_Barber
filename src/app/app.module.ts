import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';
import { CortesComponent } from './Components/cortes/cortes.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    CortesComponent,
    FooterComponent,
    ClientesComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
