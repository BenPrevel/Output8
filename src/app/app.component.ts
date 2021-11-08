import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Output8';

  public onomatopias: string[] = [];

  onReceivNewOnomatopia(onomatopia: string) {
    this.onomatopias.push(onomatopia);
    console.log('ok');
  }
}
