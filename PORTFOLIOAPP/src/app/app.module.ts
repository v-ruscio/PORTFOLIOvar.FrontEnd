import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LoginComponent } from './componentes/login/login.component';
import { Page404Component } from './componentes/page404/page404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NuevaExpComponent } from './componentes/experiencia/nueva-exp/nueva-exp.component';
import { EditarExpComponent } from './componentes/experiencia/editar-exp/editar-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PerfilComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    LoginComponent,
    Page404Component,
    InicioComponent,
    NuevaExpComponent,
    EditarExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      "backgroundStrokeWidth": 0,
      "backgroundPadding": 10,
      "radius": 60,
      "space": -4,
      "maxPercent": 100,
      "outerStrokeWidth": 4,
      "outerStrokeColor": "#d6aabe",
      "innerStrokeColor": "#ecd9ad",
      "innerStrokeWidth": 4,
      "titleFontSize": "18",
      "subtitleFontSize": "18",
      "animateTitle": false,
      "animationDuration": 1600,
      "showUnits": false,
      "responsive": true
      })
  
  ],
  providers: [],
  bootstrap: [AppComponent]

 

})
export class AppModule { }
