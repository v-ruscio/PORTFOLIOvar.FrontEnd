import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {
  expLab: Experiencia=null;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router){}

    ngOnInit():void {
      const id=this.activatedRouter.snapshot.params['id'];
      this.sExperiencia.detail(id).subscribe(data => {
        this.expLab = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      })
    }


    onUpdate():void{
      const id=this.activatedRouter.snapshot.params['id'];
      this.sExperiencia.update(id, this.expLab).subscribe(data =>{
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
      )
    }


}
