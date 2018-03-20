import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormComponent } from './form/component/form.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'signUp', component: SignUpComponent
  },
  {
    path: 'howitworks', component: HowItWorksComponent
  },
  {
    path: 'services', component: ServicesComponent
  },
  {
    path: 'brief', component: FormComponent
  },
  {
    path: 'form',
    loadChildren: 'app/form/form.module#FormModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
