import { Component } from '@angular/core';
import { persona } from 'src/app/models/persona.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  persona: persona = new persona("", "","");

  constructor(public portfolioService: PortfolioService) { }
  

  ngOnInit(): void {
    this.portfolioService.getPersona().subscribe(data => (this.persona = data))
  }

}
