import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components

import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AlquileresComponent } from './components/alquileres/alquileres.component';
import { HistorialComponent } from './components/historial/historial.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

const routes: Routes = [
  {path:'', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
