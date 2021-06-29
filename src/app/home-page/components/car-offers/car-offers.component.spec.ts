import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOffersComponent } from './car-offers.component';

describe('CarOffersComponent', () => {
  let component: CarOffersComponent;
  let fixture: ComponentFixture<CarOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
