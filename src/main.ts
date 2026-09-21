// @ts-expect-error The Angular package is provided by the project's dependencies.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app-module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));