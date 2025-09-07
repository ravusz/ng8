import {
  Component,
  OnInit,
  OnChanges,
  Output,
  Input,
  EventEmitter,
  ChangeDetectionStrategy,
  SimpleChanges,
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Packaging } from "../../services/packaging.service";

@Component({
  selector: "app-packaging-form",
  templateUrl: "./packaging-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackagingFormComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() packaging: Packaging;
  @Output() submit = new EventEmitter<Packaging>();

  packagingForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.packagingForm = this.fb.group({
      code: ["", [Validators.required, Validators.minLength(2)]],
      name: ["", Validators.required],
      brand: ["", Validators.required],
      availableQty: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.packaging && changes.packaging.currentValue) {
      if (this.packagingForm) {
        this.packagingForm.patchValue(changes.packaging.currentValue);
      }
    }
  }

  submitForm() {
    if (this.packagingForm.invalid) {
      this.packagingForm.markAllAsTouched();
      return;
    }

    this.submit.emit(this.packagingForm.value);

    this.packagingForm.reset({
      code: "",
      name: "",
      brand: "",
      availableQty: 0,
    });
  }
}
