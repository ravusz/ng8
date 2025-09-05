import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Packaging, } from '../../services/packaging.service';

@Component({
  selector: 'app-packaging-table',
  templateUrl: './packaging-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PackagingTableComponent {
  @Input() packagingList: Packaging[] = [];
}
