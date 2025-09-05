import { Component, Input } from '@angular/core';
import { Packaging, } from '../../services/packaging.service';

@Component({
  selector: 'app-packaging-table',
  templateUrl: './packaging-table.component.html',
})
export class PackagingTableComponent {
  @Input() packagingList: Packaging[] = [];
}
