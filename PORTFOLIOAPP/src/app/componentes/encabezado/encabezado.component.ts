import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  userLoginOn: boolean = false;


constructor (private datosPortfolio:PortfolioService){ }

ngOnInit() {
  
 }


 


 //logeo(){
//  var user, password
//
//  user = document.getElementById("usuario");
 // password = document.getElementById("contrasena");
//
//  if(user == "admin" && password == "9988"){
 //   alert("Iniciaste Sesion!")
 // }else{
//    alert("Datos Incorrectos")
 // }
// }

}
