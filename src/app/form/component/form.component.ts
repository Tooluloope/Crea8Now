import { Component, VERSION, ViewChild} from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { MatStepper } from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {





  constructor() { }

  ngOnInit() {

  }
}
