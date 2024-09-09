/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from "@angular/common/http";
import routeConfig from './app/routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent,
  {
    providers: [provideProtractorTestingSupport(),
    provideRouter(routeConfig),
    provideHttpClient(), provideAnimationsAsync()
    ]
  })
  .catch(err => console.error(err));
