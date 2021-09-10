//imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

// components
import { AppComponent } from './app.component';
import { RegistroComponentComponent } from './components/registro-component/registro-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { CatalogoComponentComponent } from './components/catalogo-component/catalogo-component.component';
import { DetalleComponentComponent } from './components/detalle-component/detalle-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { FormLoginComponentComponent } from './components/login-component/form-login-component/form-login-component.component';
import { FormRegistroComponentComponent } from './components/registro-component/form-registro-component/form-registro-component.component';
import { APP_ROUTING } from './app.routes';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { WelcomeComponentComponent } from './components/welcome-component/welcome-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponentComponent,
    HomeComponentComponent,
    CatalogoComponentComponent,
    DetalleComponentComponent,
    LoginComponentComponent,
    FormLoginComponentComponent,
    FormRegistroComponentComponent,
    NavbarComponentComponent,
    WelcomeComponentComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
