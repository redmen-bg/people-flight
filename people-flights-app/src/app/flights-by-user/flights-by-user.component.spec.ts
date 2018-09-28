import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsByUserComponent } from './flights-by-user.component';

describe('FlightsByUserComponent', () => {
  let component: FlightsByUserComponent;
  let fixture: ComponentFixture<FlightsByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
