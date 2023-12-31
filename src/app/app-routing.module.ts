import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { AboutMeComponent } from './components/aboutMe/aboutMe.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: "",component: MainComponent},
  {path: "main",component: MainComponent},
  {path: "about",component: AboutMeComponent},
  {path: "login",component: LoginComponent},
  {path: "register",component: RegisterComponent},
  {path:'**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
