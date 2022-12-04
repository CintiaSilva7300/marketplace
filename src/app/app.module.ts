import { CommonModule } from '@angular/common';
import { NgModel, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, ROUTES } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import {
//   NgbAlertModule,
//   NgbPaginationModule,
//   NgbTooltipModule,
//  } from '@ng-bootstrap/ng-bootstrap';

import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CarinhoComponent } from './components/carinho/carinho.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { TestComponent } from './test/test.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    CarinhoComponent,
    FooterComponent,
    ComprarComponent,
    TestComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
