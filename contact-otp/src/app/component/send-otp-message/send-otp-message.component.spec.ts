import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOtpMessageComponent } from './send-otp-message.component';

describe('SendOtpMessageComponent', () => {
  let component: SendOtpMessageComponent;
  let fixture: ComponentFixture<SendOtpMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendOtpMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendOtpMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
