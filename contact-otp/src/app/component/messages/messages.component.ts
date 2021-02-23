import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Message', 'Time'];
  dataSource: any;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getMessagesList().subscribe(result => {
      this.dataSource = result;
    });
  }
}
