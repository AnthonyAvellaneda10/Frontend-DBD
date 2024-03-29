import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CargarScriptsService } from './cargar-scripts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './header/header/header.component';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { SharedModule } from './shared/shared.module';
import { BodyComponent } from './body/body/body.component';
import { FooterComponent } from './footer/footer/footer.component';
import { RastrearComponent } from './rastrear/rastrear.component';
import { PagaloComponent } from './pagalo/pagalo.component';

import { PantallaUsuarioComponent } from './pantallaUsuario/pantalla-usuario/pantalla-usuario.component';
import { CotizacionComponent } from './cotizacion/cotizacion/cotizacion.component';
import { ListarCotizacionUsuarioComponent } from './listarCotizacionUsuario/listar-cotizacion-usuario/listar-cotizacion-usuario.component';
import { SeguimientoComponent } from './seguimiento/seguimiento/seguimiento.component';
import { PlanificacionComponent } from './planificacion/planificacion/planificacion.component';
import { GestionreclamoComponent } from './gestionreclamo/gestionreclamo/gestionreclamo.component';
import { ReclamoComponent } from './reclamo/reclamo/reclamo.component';
import { PreguntasFrecuentesComponent } from './preguntasFrecuentes/preguntas-frecuentes/preguntas-frecuentes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegistroComponent,
    BodyComponent,
    FooterComponent,

    PantallaUsuarioComponent,
    CotizacionComponent,
    ListarCotizacionUsuarioComponent,
    SeguimientoComponent,
    PlanificacionComponent,
    GestionreclamoComponent,
    RastrearComponent,
    PagaloComponent,
    ReclamoComponent,
    PreguntasFrecuentesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    IonicModule.forRoot()
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
