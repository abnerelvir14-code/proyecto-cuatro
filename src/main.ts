// @ts-ignore Angular resolves this package through the project's configured dependencies.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app-module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));