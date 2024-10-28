import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent implements OnInit {
  formGroup!: FormGroup;

  message: string | null = null;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      text: new FormControl('', Validators.required),
    });
  }

  handelSearch() {
    console.log(this.formGroup.value.text);

    if (typeof this.formGroup.value === 'string') {
      console.log(this.formGroup.value.trim());
    }
  }

  reset() {
    this.formGroup.reset();
  }
}
