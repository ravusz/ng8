import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-remote-details',
  imports: [],
  templateUrl: './remote-details.html'
})
export class RemoteDetails {
  @Input() description: string = '';
}
