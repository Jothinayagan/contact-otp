import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { MessagesComponent } from './component/messages/messages.component';
import { ContactDetailsComponent } from './component/contact-details/contact-details.component';
import { SendOtpMessageComponent } from './component/send-otp-message/send-otp-message.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'contactList', component: ContactsComponent },
      { path: 'sentMessages', component: MessagesComponent },
    ]
  },
  { path: 'contactDetails/:name', component: ContactDetailsComponent },
  { path: 'sendOtpMessage/:name', component: SendOtpMessageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
