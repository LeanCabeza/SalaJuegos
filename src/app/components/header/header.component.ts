import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

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
      if (user) {
        this.logged = true;
        this.emailUsuario = user.email;
      } else {
        this.logged = false;
        this.emailUsuario = "";
      }
    });
  }
}
