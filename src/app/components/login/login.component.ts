import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensajeLoggeo: string = '';

  constructor() {

     }

  ngOnInit(): void {
  }
  
  login(){
    Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'light-green',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
}).fire({
  icon: 'success',
  title: 'Success'
})
  }


}