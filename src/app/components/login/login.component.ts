import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensajeLoggeo: string = '';
  email: string = "";
  pass: string = "";

  constructor(private usuariosServicio:UsuarioService,
              private router: Router) {
     }

  ngOnInit(): void {
  }
  
  async login(){ 
    if (this.email == "" || this.pass == ""){
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'Falta completar los datos!' });
    }else{
        await this.usuariosServicio.login(this.email,this.pass).then(res => {
        this.usuariosServicio.setCurrentUser(res);
        this.email = "";
        this.pass = "";
        Swal.fire('Loggeado Correctamente', 'Bienvenido al sistema!', 'success')
        setTimeout(() => {
          this.router.navigate(['/main']);
        }, 1900);
      }).catch(error => {
        Swal.fire({ icon: 'error', title: 'Oops...', text: 'Algo salió mal en el logeo!' });
      });
    }
  }


}