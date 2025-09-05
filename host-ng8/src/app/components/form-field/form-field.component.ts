import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-form-field",
  templateUrl: "./form-field.component.html",
})
export class FormFieldComponent implements OnInit {
  @Input() id: string;
  @Input() type: string = "text";
  @Input() label: string;
  @Input() placeholder: string;
  @Input() disabled: boolean = false;
  @Input() errorMessage: string = "";

  @Input() packagingForm: FormGroup;
  control: FormControl;

  constructor() {}

  ngOnInit() {
    this.control = this.packagingForm.get(this.id) as FormControl;
  }
}
