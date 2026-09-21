import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';

import { App } from './app';
import { AnimatedBoxComponent } from './animated-box/animated-box';
import { ClickTrackerDirective } from './click-tracker.directive';
import { trackingReducer } from './tracking.reducer';

@NgModule({
  declarations: [
    App
  ],
  imports: [
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [App]
})
export class AppModule { }