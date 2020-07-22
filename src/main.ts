import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) { //checks if the environment is production
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule) //sets the initial module we use
  .catch(err => console.error(err));
