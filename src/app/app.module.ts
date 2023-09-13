import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { AboutMeComponent } from './components/aboutMe/aboutMe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import {AngularFireModule} from '@angular/fire/compat'
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';


const firebaseConfig = {
  apiKey: "AIzaSyBII8YEP_FOeW59sZUayz-_jOESnBQx4dk",
  authDomain: "salajuegos-23.firebaseapp.com",
  projectId: "salajuegos-23",
  storageBucket: "salajuegos-23.appspot.com",
  messagingSenderId: "496084387484",
  appId: "1:496084387484:web:198e3eaa1d577ebcb8cf59"
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    NotFoundComponent,
    AboutMeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
