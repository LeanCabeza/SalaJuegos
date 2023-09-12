import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  logged: Boolean = false;
  emailUsuario: string = "juan@juan.com"
  constructor() { }

  ngOnInit() {
  }

}
