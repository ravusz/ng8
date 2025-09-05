import { Component, OnInit } from '@angular/core';

interface Packaging {
  code: string;
  name: string;
  brand: string;
  availableQty: number;
}

@Component({
  selector: 'app-packaging-table',
  templateUrl: './packaging-table.component.html',
  styleUrls: ['./packaging-table.component.scss']
})
export class PackagingTableComponent implements OnInit {

  packagingList: Packaging[] = [];
  globalFilter: string = '';

  ngOnInit() {
    this.packagingList = [
      { code: 'P001', name: 'Butelka 0.5L', brand: 'Coca-Cola', availableQty: 120 },
      { code: 'P002', name: 'Puszka 0.33L', brand: 'Pepsi', availableQty: 250 },
      { code: 'P003', name: 'Butelka 1L', brand: 'Fanta', availableQty: 80 },
      { code: 'P004', name: 'Słoik 0.7L', brand: 'Nutella', availableQty: 50 }
    ];
  }

  editPackaging(item: Packaging) {
    console.log('Edit', item);
  }

  deletePackaging(item: Packaging) {
    console.log('Delete', item);
  }
}
