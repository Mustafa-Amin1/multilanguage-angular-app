import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOffersCarouselComponent } from './car-offers-carousel.component';

describe('CarOffersCarouselComponent', () => {
  let component: CarOffersCarouselComponent;
  let fixture: ComponentFixture<CarOffersCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarOffersCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOffersCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
