import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-remote-details',
  imports: [],
  templateUrl: './remote-details.html',
  standalone: true
})
export class RemoteDetails {
  @Input() description: string = '';
}
