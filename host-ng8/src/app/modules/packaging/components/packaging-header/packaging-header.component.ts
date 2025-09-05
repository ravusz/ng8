import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-packaging-header',
  templateUrl: './packaging-header.component.html',
  styleUrls: ['./packaging-header.component.scss']
})
export class PackagingHeaderComponent {
  @Input() title: string
}
