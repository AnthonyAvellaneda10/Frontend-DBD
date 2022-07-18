import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SeguimientoComponent } from './seguimiento/seguimiento/seguimiento.component';
import { PlanificacionComponent } from './planificacion/planificacion/planificacion.component';
import { GestionreclamoComponent } from './gestionreclamo/gestionreclamo/gestionreclamo.component'; 

const routes: Routes = [
  {path:"home",           component: HomeComponent},
  {path: "login",    component: LoginComponent},
  {path: "registro",  component: RegistroComponent},
  {path: "seguimiento",  component: SeguimientoComponent},
  {path: "planificacion",  component: PlanificacionComponent},
  {path: "gestionreclamo",  component: GestionreclamoComponent},
  {path: "", redirectTo: "home", pathMatch: "full" },
  {path: "**",  component: NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
