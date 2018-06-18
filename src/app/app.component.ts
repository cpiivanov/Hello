import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'] //pak moje da se izbira dali da e inline, po-dobre si e v otdelen file
  styles: [`
    h3 {
      color: green;
    }
  `]
})
export class AppComponent {
}
