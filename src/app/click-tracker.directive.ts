import { Directive, ElementRef, Input, OnInit, OnDestroy, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { trackClick } from './tracking.reducer';
import { fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[appClickTracker]',
  standalone: false
})
export class ClickTrackerDirective implements OnInit, OnDestroy {
  @Input('appClickTracker') trackingTag!: string;
  private clickSubscription!: Subscription;
  private el = inject(ElementRef);
  private store = inject(Store);

  ngOnInit() {
    this.clickSubscription = fromEvent(this.el.nativeElement, 'click').subscribe(() => {
      const tagToTrack = this.trackingTag || this.el.nativeElement.getAttribute('data-tracking-tag') || 'desconocido';
      this.store.dispatch(trackClick({ tag: tagToTrack }));
    });
  }

  ngOnDestroy() {
    if (this.clickSubscription) {
      this.clickSubscription.unsubscribe();
    }
  }
}