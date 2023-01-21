import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private titleService:Title) {
    //setting page title
    this.titleService.setTitle("Contact");
   }

  ngOnInit(): void {
  }

}
