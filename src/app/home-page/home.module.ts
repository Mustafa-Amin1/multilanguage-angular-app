import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//libraries
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxModule, TextBoxModule} from '@syncfusion/ej2-angular-inputs';
import { CheckBoxModule, ButtonModule  } from '@syncfusion/ej2-angular-buttons';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { SwiperModule } from 'swiper/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


//components
import { HomeComponent } from './home.component';
import { Carousel1Component } from './components/carousel1/carousel1.component';
import { CarSearchFormComponent } from './components/car-search-form/car-search-form.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicesCarouselComponent } from './components/services-carousel/services-carousel.component';
import { CarOffersComponent } from './components/car-offers/car-offers.component';
import { CarOffersCarouselComponent } from './components/car-offers-carousel/car-offers-carousel.component';
import { OurBanksComponent } from './components/our-banks/our-banks.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


@NgModule({
  declarations: [
    HomeComponent,
    Carousel1Component,
    CarSearchFormComponent,
    ServicesComponent,
    ServicesCarouselComponent,
    CarOffersComponent,
    CarOffersCarouselComponent,
    OurBanksComponent,
    OurClientsComponent,
    AboutUsComponent,
    // SliderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    SwiperModule,
    DialogModule, SliderModule, CheckBoxModule, NumericTextBoxModule, TextBoxModule, DropDownListModule, ButtonModule,
    NgbModule,
  ]
})
export class HomeModule { }
