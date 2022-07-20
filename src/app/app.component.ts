import { Component } from '@angular/core';

import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'real_Estate_Agency';
    constructor(){
      setTheme('bs4')
    }

    ngOnInit() {
     
    }
}
