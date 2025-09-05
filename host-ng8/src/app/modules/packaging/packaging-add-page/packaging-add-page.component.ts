import { Component } from '@angular/core';
import { PackagingService, Packaging } from '../services/packaging.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import * as uuid from 'uuid';
@Component({
  selector: 'app-packaging-add-page',
  templateUrl: './packaging-add-page.component.html',
})
export class PackagingAddPageComponent {

  constructor(private packagingService: PackagingService, private router: Router, private messageService: MessageService) { }

  onSubmit(packaging: Packaging) {
    const newPackaging: Packaging = {
      id: uuid.v4(),
      ...packaging
    };

    this.packagingService.create(newPackaging).subscribe(
      data => {
        this.messageService.add({
          severity: 'success',
          summary: `Pomyślnie dodano ${data.name}`,
          detail: `ID: ${data.id}`
        });

        this.router.navigate(['/packaging']);
      },
      error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Błąd podczas dodawania opakowania',
          detail: error && error.message ? error.message : 'Spróbuj ponownie później'
        });
        console.log('Wystąpił błąd przy pobieraniu paczek:', error);
      });
  }
}
