import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  loading = false

  clickTest (event) {
    console.log(event);
  }

  loader () {
    this.loading = true;
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }
}
