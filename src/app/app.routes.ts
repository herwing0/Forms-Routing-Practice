import { Component } from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { CatalogoComponentComponent } from './components/catalogo-component/catalogo-component.component';
import { DetalleComponentComponent } from './components/detalle-component/detalle-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegistroComponentComponent } from './components/registro-component/registro-component.component';
import { WelcomeComponentComponent } from './components/welcome-component/welcome-component.component';

const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponentComponent},
  {path: 'registro', component: RegistroComponentComponent},
  {path: 'catalogo', component: CatalogoComponentComponent},
  {path: '', component: WelcomeComponentComponent},
  {path: 'routePath', component: Component},
  {path: 'detalles/:id', component: DetalleComponentComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

