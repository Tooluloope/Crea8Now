import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/component/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HowItWorksComponent,
    ContactComponent,
    SignUpComponent,
    LoginComponent,
    ServicesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })

  ],
  schemas: [ NO_ERRORS_SCHEMA ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
