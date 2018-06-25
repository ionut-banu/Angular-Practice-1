import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  isEmpty = true;

  isDisabled() {
    if (this.username.length < 1) {
      return true;
    } else {
      return false;
    }
  }

  updateIsEmpty(event) {
    this.isEmpty = event.target.value === '';
  }

  resetUsername() {
    this.username = '';
  }

}
