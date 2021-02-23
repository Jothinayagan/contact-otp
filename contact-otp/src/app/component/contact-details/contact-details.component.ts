import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: any = [];

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.contact = this.appService.showDetails();
  }

  sendMessage() {
    this.appService.contactDetails(this.contact);
    this.router.navigate(['sendOtpMessage/', this.contact.name]);
  }
}
