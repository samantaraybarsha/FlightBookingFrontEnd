import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSearchFlightComponent } from './admin-search-flight.component';

describe('AdminSearchFlightComponent', () => {
  let component: AdminSearchFlightComponent;
  let fixture: ComponentFixture<AdminSearchFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSearchFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSearchFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
