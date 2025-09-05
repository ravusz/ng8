import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PackagingService } from '../../services/packaging.service';
import { Packaging } from '../../services/packaging.service';

@Component({
  selector: 'app-packaging-form',
  templateUrl: './packaging-form.component.html',
})
export class PackagingFormComponent implements OnInit {

  @Output() submit = new EventEmitter<Packaging>();

  packagingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.packagingForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      brand: ['', Validators.required],
      availableQty: [0, [Validators.required, Validators.min(0)]],
    });
  }

  submitForm() {
    if (this.packagingForm.invalid) {
      this.packagingForm.markAllAsTouched();
      return;
    }
    this.submit.emit(this.packagingForm.value);


    this.packagingForm.reset();
  }
}
