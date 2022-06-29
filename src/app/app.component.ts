import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minimalist-todo';
  isLight = false;




  changeTheme(){
  if (this.isLight) {
    this.isLight = false
    } else {
      this.isLight = true;
    }
    document.body.classList.toggle('my-light-theme');
 

  }
}

