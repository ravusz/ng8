// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));


import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { RemoteDetails } from './app/remote-details/remote-details';
import 'zone.js';

createApplication()
  .then(app => {
    customElements.define('mini-stats-widget', createCustomElement(RemoteDetails, { injector: app.injector }));
  })
  .catch(err => console.error(err));
