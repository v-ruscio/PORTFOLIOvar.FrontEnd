import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NuevaExpComponent } from './componentes/experiencia/nueva-exp/nueva-exp.component';
import { EditarExpComponent } from './componentes/experiencia/editar-exp/editar-exp.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NuevaExpComponent},
  {path: 'editexp/:id', component: EditarExpComponent},
  {path: '**', redirectTo: ' '},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
