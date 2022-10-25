import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, ROUTES } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {
  NgbAlertModule,
  NgbModule,
  NgbPaginationModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CarinhoComponent } from './components/carinho/carinho.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    CarinhoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    NgbTooltipModule,
    NgbPaginationModule,
    NgbAlertModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
