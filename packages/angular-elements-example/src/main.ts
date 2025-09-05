import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { TestComponent } from './app/test-component/test-component';
import 'zone.js';

createApplication()
  .then(app => {
    // Tworzymy Angular Elements
    const LikeButton = createCustomElement(TestComponent, { injector: app.injector });
    customElements.define('like-button', LikeButton);
  })
  .catch(err => console.error(err));
