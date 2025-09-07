import { Component } from '@angular/core';
import { RemoteDetails } from './remote-details/remote-details';

@Component({
  selector: 'app-root',
  imports: [RemoteDetails],
  templateUrl: './app.html',
})
export class App {
}
