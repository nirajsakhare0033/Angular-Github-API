import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyApp';
  thikness=10;
  color = '';

  randomColor() {
    let hex = '#' + Math.floor(Math.random() * 1231122).toString(15);
    this.color=hex;
  }
}
