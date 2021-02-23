import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatSort } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { MessagesComponent } from './component/messages/messages.component';
import { ContactDetailsComponent } from './component/contact-details/contact-details.component';
import { SendOtpMessageComponent } from './component/send-otp-message/send-otp-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ContactsComponent,
    MessagesComponent,
    ContactDetailsComponent,
    SendOtpMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    // MatTableDataSource,
    // MatSort,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
