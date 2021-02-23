import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  navigationTab = [
    { path: "contactList", label: "Contacts" },
    { path: "sentMessages", label: "Sent Messages" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
