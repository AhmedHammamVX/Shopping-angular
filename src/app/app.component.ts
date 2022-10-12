import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Shopping';
  typeSelected: string;

  constructor() {
    this.typeSelected = 'ball-fussion';
  }
 
}
