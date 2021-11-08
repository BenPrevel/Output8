import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css'],
})
export class CreateOnomatopiaComponent {
  newOnomatopia: string | undefined;
  @Output() public sendOnomatopia: EventEmitter<string> =
    new EventEmitter<string>();

  createOnomatopia(): void {
    this.sendOnomatopia.emit(this.newOnomatopia);
  }
}
