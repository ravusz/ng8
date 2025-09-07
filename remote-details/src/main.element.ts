
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { RemoteDetails } from './app/remote-details/remote-details';

createApplication()
  .then(app => {
    customElements.define('mini-stats-widget', createCustomElement(RemoteDetails, { injector: app.injector }));
  })
  .catch(err => console.error(err));
