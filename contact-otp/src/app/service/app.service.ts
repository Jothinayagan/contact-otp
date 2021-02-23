import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  // requestUrl = 'http://localhost:8080';
  contact: any;

  // to fetch all contacts from server
  fetchContacts() {
    // return this.http.get(`${this.requestUrl}/fetchAllContacts`);
    return this.http.get(`/fetchAllContacts`);
  }

  contactDetails(contact) {
    this.contact = contact;
  }

  showDetails() {
    return this.contact;
  }

  // sending contact details with otp to backend
  sendMessage(values) {
    return this.http.put(`/sendMessage`, values);
  }
  // getting messages list form backend
  getMessagesList() {
    return this.http.get(`/sentMessagesList`);
  }

}
