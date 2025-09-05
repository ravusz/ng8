import { Component, OnInit } from '@angular/core';
import { PackagingService } from '../services/packaging.service';

@Component({
  selector: 'app-packaging-page',
  templateUrl: './packaging-page.component.html',
})
export class PackagingPageComponent implements OnInit {

  constructor(private packagingService: PackagingService) { }

  ngOnInit() {
    this.packagingService.getAll().subscribe(
      data => {
        console.log('Lista paczek:', data);
      },
      error => {
        console.log('Wystąpił błąd przy pobieraniu paczek:', error);
        // możesz np. pokazać alert lub komunikat w UI
      }
    );
  }

  onSearch(event) {
    console.log('event z rodzica:', event);
  }

}
