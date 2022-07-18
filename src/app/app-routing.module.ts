import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizacionComponent } from './cotizacion/cotizacion/cotizacion.component';
import { HomeComponent } from './home/home/home.component';
import { ListarCotizacionUsuarioComponent } from './listarCotizacionUsuario/listar-cotizacion-usuario/listar-cotizacion-usuario.component';
import { LoginComponent } from './login/login/login.component';

import { PantallaUsuarioComponent } from './pantallaUsuario/pantalla-usuario/pantalla-usuario.component';

import { RegistroComponent } from './registro/registro/registro.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SeguimientoComponent } from './seguimiento/seguimiento/seguimiento.component';
import { PlanificacionComponent } from './planificacion/planificacion/planificacion.component';
import { GestionreclamoComponent } from './gestionreclamo/gestionreclamo/gestionreclamo.component';
import { PagaloComponent } from './pagalo/pagalo.component';
import { RastrearComponent } from './rastrear/rastrear.component';
const routes: Routes = [

  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "pantallaUsuario", component: PantallaUsuarioComponent },
  { path: "cotizacion", component: CotizacionComponent },
  { path: "listaCotizacionUsuario", component: ListarCotizacionUsuarioComponent },
  { path: "seguimiento", component: SeguimientoComponent },
  { path: "planificacion", component: PlanificacionComponent },
  { path: "gestionreclamo", component: GestionreclamoComponent },
  { path: "pagalo", component: PagaloComponent },
  { path: "rastrear", component: RastrearComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
