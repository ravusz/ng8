import { Component, OnInit } from '@angular/core';
import { Packaging, PackagingService } from '../services/packaging.service';

@Component({
  selector: 'app-packaging-page',
  templateUrl: './packaging-page.component.html',
})
export class PackagingPageComponent implements OnInit {
  packagingList: Packaging[] = [];
  allPackagingList: Packaging[] = [];

  constructor(private packagingService: PackagingService) { }

  ngOnInit() {
    this.packagingService.getAll().subscribe(
      data => {
        this.packagingList = data;
        this.allPackagingList = data;
      }
    );
  }


  onSearch(searchTerm: string) {
    if (!searchTerm) {
      this.packagingList = [...this.allPackagingList];
    } else {
      const term = searchTerm.toLowerCase();
      this.packagingList = this.allPackagingList.filter(({ code, name }) =>
        code.toLowerCase().includes(term) ||
        name.toLowerCase().includes(term)
      );
    }
  }

}
