import { Component } from '@angular/core';

@Component({
  selector: 'app-animated-box',
  standalone: false,
  templateUrl: './animated-box.html',
  styleUrls: ['./animated-box.css']
})
export class AnimatedBoxComponent {
  isStateActive = false;

  toggleAnimation() {
    this.isStateActive = !this.isStateActive;
  }
}
