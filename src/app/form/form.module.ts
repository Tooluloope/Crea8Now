import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';




import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './component/form.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    FormRoutingModule,
    ReactiveFormsModule,
    FormBuilder, FormGroup, Validators
  ],
  declarations: [FormComponent],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class FormModule { }
