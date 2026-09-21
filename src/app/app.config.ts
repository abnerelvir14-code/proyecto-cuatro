import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { trackingReducer } from './tracking.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(),
    provideStore({ tracking: trackingReducer })
  ]
};


