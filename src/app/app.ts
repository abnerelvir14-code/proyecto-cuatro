import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  private store = inject(Store);
  counts$: Observable<{ [tag: string]: number }> = this.store.select((state: any) => state.tracking.counts);
  showPopup = false;

  mapboxAccessToken = 'pk.eyJ1IjoiZXhhbXBsZXVzZXIiLCJhIjoiY2x4eXp4eXp4MDAwMHExYjE2eXp4eXA0In0.example';

  onMarkerClick() {
    this.showPopup = true;
  }
}