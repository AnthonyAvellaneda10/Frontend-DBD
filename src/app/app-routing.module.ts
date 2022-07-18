import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizacionComponent } from './cotizacion/cotizacion/cotizacion.component';
import { HomeComponent } from './home/home/home.component';
import { ListarCotizacionUsuarioComponent } from './listarCotizacionUsuario/listar-cotizacion-usuario/listar-cotizacion-usuario.component';
import { LoginComponent } from './login/login/login.component';
import { PantallaUsuarioComponent } from './pantallaUsuario/pantalla-usuario/pantalla-usuario.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [
  {path:"home",           component: HomeComponent},
  {path: "login",         component: LoginComponent},
  {path: "registro",      component: RegistroComponent},
  {path: "pantallaUsuario", component: PantallaUsuarioComponent},
  {path: "cotizacion", component: CotizacionComponent},
  {path: "listaCotizacionUsuario", component: ListarCotizacionUsuarioComponent},
  {path: "", redirectTo: "home", pathMatch: "full" },
  {path: "**",            component: NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
