import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { PagaloComponent } from './pagalo/pagalo.component';
import { RastrearComponent } from './rastrear/rastrear.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "rastrear", component: RastrearComponent },
  { path: "registro", component: RegistroComponent },
  { path: "pagalo", component: PagaloComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
