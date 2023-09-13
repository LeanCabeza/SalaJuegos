import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  logged: Boolean = false;
  emailUsuario: string|undefined = ""
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.listenerLogged();
  }

  listenerLogged(){
    this.usuarioService.currentUser$.subscribe(user => {
      console.log("LISTENER HEADER ",user);
      if (user != null) {
        this.logged = true;
        this.emailUsuario = user.email;
      } else {
        this.logged = false;
        this.emailUsuario = "";
      }
    });
  }

  logout(){
    Swal.fire({
      title: 'Estas seguro de que queres salir?',
      text: "No hay vuelta atras eh!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo salir'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Saliste!',
          'Vuelva prontoo',
          'success',
        )
        this.usuarioService.setCurrentUser(null);
      }
    })
  }


}
