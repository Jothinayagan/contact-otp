import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }


  contact: any;


  fetchContacts() {
    return this.http.get(`/fetchAllContacts`);
  }

  contactDetails(contact) {
    this.contact = contact;
  }

  showDetails() {
    return this.contact;
  }




  sendMessage(values) {
    return this.http.put(`/sendMessage`, values);
  }

  getMessagesList() {
    return this.http.get(`/sentMessagesList`);
  }

}
