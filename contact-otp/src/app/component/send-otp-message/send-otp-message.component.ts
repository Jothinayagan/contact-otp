import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-send-otp-message',
  templateUrl: './send-otp-message.component.html',
  styleUrls: ['./send-otp-message.component.css']
})
export class SendOtpMessageComponent implements OnInit {

  contact: any;
  otp: any;
  logDetails: any = {
    name: "",
    phoneNumber: "",
    message: ""
  };

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.contact = this.appService.showDetails();
    this.otp = "Hi. Your OTP is " + Math.floor(100000 + Math.random() * 900000);
  }

  sendMessage(message) {
    this.logDetails.name = this.contact.name;
    this.logDetails.phoneNumber = this.contact.phoneNumber;
    this.logDetails.message = message.value;
    // sending data to service to send to backend
    this.appService.sendMessage(this.logDetails).subscribe(res => {
      console.log(res, "res");
    });
    console.log(this.logDetails);
  }
}
