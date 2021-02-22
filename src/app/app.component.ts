import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pika';
  images: string[] = [];
constructor() {
  this.SetImages();
}
  SetImages(): void {
    const dr = '/assets/img/';
    const ext = '.png';
    this.images.push(dr + 1 + ext);
    this.images.push(dr + 2 + ext);
    this.images.push(dr + 3 + ext);
    this.images.push(dr + 4 + ext);
    this.images.push(dr + 5 + ext);
    this.images.push(dr + 6 + ext);
    this.images.push(dr + 7 + ext);
    this.images.push(dr + 8 + ext);
    this.images.push(dr + 9 + ext);
    }
}

