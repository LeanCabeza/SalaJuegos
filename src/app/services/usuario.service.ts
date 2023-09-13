import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  myDate = new Date();
  usuarioColleccion!: AngularFirestoreCollection<Usuario>;
  usuarioDoc!: AngularFirestoreDocument<Usuario>;  
  usuarios!: Observable<Usuario[]>;
  usuario!: Observable<Usuario>;

  constructor(private db: AngularFirestore) { 
    this.usuarioColleccion = db.collection('usuarios',ref => ref.orderBy('email','asc'));
  }
  

  getUsuarios(): Observable<Usuario[]>{
    this.usuarios = this.usuarioColleccion.snapshotChanges().pipe(
      map(cambios =>{
        return cambios.map(accion =>{
          const datos = accion.payload.doc.data() as Usuario;
          datos.id = accion.payload.doc.id;
          return datos;
        })
      })
    );
    return this.usuarios;
  }

  agregarUsuario(usuario: Usuario){
    return this.db.collection('usuarios').doc(usuario.email).set({ ...usuario });
  }

  actualizarFechaLoggeo(email:string){
    const fechaUltimoLogin = this.myDate.toLocaleDateString() + " " + this.myDate.toLocaleTimeString();
    this.usuarioDoc = this.db.doc(`usuarios/${email}`);
    this.usuarioDoc.update({fechaUltimoLogin});
  }
  
  async emailExists(email: string) {
    const usuariosRef = this.db.collection('usuarios').ref;
    const query = usuariosRef.where('email', '==', email);
    const usuariosSnapshot = await query.get();
    return !usuariosSnapshot.empty;
  }

  async login(email: string, password: string) {
    const usuariosRef = this.db.collection('usuarios').ref;
    const query = usuariosRef.where('email', '==', email).where('password', '==', password);
    const usuariosSnapshot = await query.get();
    if (usuariosSnapshot.empty) {
      let emptyUser:Object= {
        id : "",
        nombre: "",
        apellido: "",
        email: "",
        password: ""
      }
      return emptyUser;
    }
    return usuariosSnapshot.docs[0].data();
  }

  

}