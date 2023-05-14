import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';


@Component({
  selector: 'app-nueva-exp',
  templateUrl: './nueva-exp.component.html',
  styleUrls: ['./nueva-exp.component.css']
})
export class NuevaExpComponent {
nombreE:string='';
descripcionE:string='';

constructor(private sExperiencia: SExperienciaService, private router: Router){}
  



onCreate():void{
  const expe= new Experiencia(this.nombreE, this.descripcionE);
  this.sExperiencia.save(expe).subscribe(
    data =>{
    alert("Experiencia añadida");
    this.router.navigate(['']);
  }, err =>{
    alert("Falló");
    this.router.navigate(['']);
  }
   
  )

  }


}
