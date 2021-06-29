import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBanksComponent } from './our-banks.component';

describe('OurBanksComponent', () => {
  let component: OurBanksComponent;
  let fixture: ComponentFixture<OurBanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
