import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactList: any = [];

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    // fetch all contacts from the server while page loads intially
    this.appService.fetchContacts().subscribe(result => {
      this.contactList = result;
    });
  }

  sendContactDetails(contact) {
    this.appService.contactDetails(contact);
    this.router.navigate(["contactDetails/", contact.name])
  }

}
