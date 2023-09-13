import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myDate = new Date();
  mensajeLoggeo: string = '';
  usuarios!: Usuario[];
  
  usuario: Usuario ={
    apellido: '',
    email: '',
    password: '',
    fechaIngreso: '',
    fechaUltimoLogin:''
  }



  constructor(private router: Router,
    private usuariosServicio:UsuarioService,
    ){
      
    }

  ngOnInit(): void {
  }

  async register() {
    if (this.usuario.apellido == "" ||
        this.usuario.nombre == "" ||
        this.usuario.email == "" ||
        this.usuario.password == "") {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Falta completar datos',
          });
    } else {
      if (this.usuario.email) {
        let emailExists =  await this.usuariosServicio.emailExists(this.usuario.email);
        if (emailExists) {
          Swal.fire({ icon: 'error', title: 'Oops...', text: 'Ese email ya esta registrado!' });
        } else {
          this.usuario.fechaIngreso = this.myDate.toLocaleDateString() + " " + this.myDate.toLocaleTimeString();
          this.usuario.fechaUltimoLogin = this.myDate.toLocaleDateString() + " " + this.myDate.toLocaleTimeString();
          this.usuariosServicio.agregarUsuario(this.usuario).then(res => {
            this.usuariosServicio.setCurrentUser(this.usuario);
            Swal.fire('Registrado Correctamente', 'Bienvenido al sistema!', 'success');
            this.usuario = { apellido: '', email: '', password: '', fechaIngreso: '', fechaUltimoLogin: '' }
            setTimeout(() => {
              this.router.navigate(['/main']);
            }, 1900);
          }).catch(error => {
            Swal.fire({ icon: 'error', title: 'Oops...', text: 'Algo salió mal en el registro!' });
          });
        }
      } else {
        Swal.fire({icon: 'error',title: 'Oops...',text: 'El campo de correo electrónico está vacío',});
      }
    }
  }




}