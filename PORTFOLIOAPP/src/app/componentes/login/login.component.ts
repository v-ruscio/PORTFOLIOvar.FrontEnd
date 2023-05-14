import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginForm=this.formBuilder.group({
  email:['victoria@gmail.com', [Validators.required, Validators.email]],
  password:['', Validators.required],
})
constructor(private formBuilder: FormBuilder, private router:Router){}

login(){
  if(this.loginForm.valid){
    console.log("llamar al servicio de login");
    this.router.navigateByUrl('inicio');
    this.loginForm.reset();
  }else{
    this.loginForm.markAllAsTouched();
    alert("error al ingresar los datos");
  }
}
   
  
  
  

  



}

  

