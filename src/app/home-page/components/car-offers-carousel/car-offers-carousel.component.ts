import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);
@Component({
  selector: 'app-car-offers-carousel',
  templateUrl: './car-offers-carousel.component.html',
  styleUrls: ['./car-offers-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class CarOffersCarouselComponent implements OnInit {
  @Input() isAllCars = false;

  constructor() { }
public CarOffersArr=[ ]
public AllCarsArr=[]
  ngOnInit(): void {

    // only offers
    this.CarOffersArr =    [
      {
        ArName:'هيونداى سنتافى 2021',
        EnName:'Hundai santa fe 2021',
        carImgSrc:'../../../../assets/images/home-page/caroffers-carousel/santa fe.png',
        BrandImgSrc:'../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
        PriceBefor:20000,
        PriceAfter:16000,
      },
      {
        ArName:'جيلى ازكار 2021',
        EnName:'Gelly azkarra 2021',
        carImgSrc:'../../../../assets/images/home-page/caroffers-carousel/unnamed.png',
        BrandImgSrc:'../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
        PriceBefor:6000,
        PriceAfter:4000,
      },
      {
        ArName:'هيونداى توسان 2021',
        EnName:'Hundai tucon 2021',
        carImgSrc:'../../../../assets/images/home-page/caroffers-carousel/hyundai tucson 2021 png.png',
        BrandImgSrc:'../../../../assets/images/home-page/caroffers-carousel/Rectangle 36.png',
        PriceBefor:60000,
        PriceAfter:50000,
      },
      {
        ArName:'هيونداى سنتافى 2021',
        EnName:'Hundai santa fe 2021',
        carImgSrc:'../../../../assets/images/home-page/caroffers-carousel/santa fe.png',
        BrandImgSrc:'../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
        PriceBefor:60000,
        PriceAfter:57000,
      },
    ]
    // all cars
    this.AllCarsArr =[
      {
        ArName:'هيونداى سنتافى 2021',
        EnName:'Hundai santa fe 2021',
        carImgSrc:'../../../../assets/images/home-page/caroffers-carousel/santa fe.png',
        BrandImgSrc:'../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
        PriceBefor:20000,
        PriceAfter:16000,
      },
      {
        ArName:'جيلى ازكار 2021',
        EnName:'Gelly azkarra 2021',
        carImgSrc:'../../../../assets/images/home-page/caroffers-carousel/unnamed.png',
        BrandImgSrc:'../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
        PriceBefor:6000,
        PriceAfter:4000,
      },
      {
        ArName:'هيونداى توسان 2021',
        EnName:'Hundai tucon 2021',
        carImgSrc:'../../../../assets/images/home-page/caroffers-carousel/hyundai tucson 2021 png.png',
        BrandImgSrc:'../../../../assets/images/home-page/caroffers-carousel/Rectangle 36.png',
        PriceBefor:60000,
        PriceAfter:50000,
      },
      {
        ArName:'هيونداى سنتافى 2021',
        EnName:'Hundai santa fe 2021',
        carImgSrc:'../../../../assets/images/home-page/caroffers-carousel/santa fe.png',
        BrandImgSrc:'../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
        PriceBefor:20000,
        PriceAfter:16000,
      },
      {
        ArName:'جيلى ازكار 2021',
        EnName:'Gelly azkarra 2021',
        carImgSrc:'../../../../assets/images/home-page/caroffers-carousel/unnamed.png',
        BrandImgSrc:'../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
        PriceBefor:6000,
        PriceAfter:4000,
      },
      {
        ArName:'هيونداى توسان 2021',
        EnName:'Hundai tucon 2021',
        carImgSrc:'../../../../assets/images/home-page/caroffers-carousel/hyundai tucson 2021 png.png',
        BrandImgSrc:'../../../../assets/images/home-page/caroffers-carousel/Rectangle 36.png',
        PriceBefor:60000,
        PriceAfter:50000,
      },
      {
        ArName:'هيونداى سنتافى 2021',
        EnName:'Hundai santa fe 2021',
        carImgSrc:'../../../../assets/images/home-page/caroffers-carousel/santa fe.png',
        BrandImgSrc:'../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
        PriceBefor:20000,
        PriceAfter:16000,
      },
      {
        ArName:'جيلى ازكار 2021',
        EnName:'Gelly azkarra 2021',
        carImgSrc:'../../../../assets/images/home-page/caroffers-carousel/unnamed.png',
        BrandImgSrc:'../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
        PriceBefor:6000,
        PriceAfter:4000,
      },
      {
        ArName:'هيونداى توسان 2021',
        EnName:'Hundai tucon 2021',
        carImgSrc:'../../../../assets/images/home-page/caroffers-carousel/hyundai tucson 2021 png.png',
        BrandImgSrc:'../../../../assets/images/home-page/caroffers-carousel/Rectangle 36.png',
        PriceBefor:60000,
        PriceAfter:50000,
      },
      {
        ArName:'جيلى ازكار 2021',
        EnName:'Gelly azkarra 2021',
        carImgSrc:'../../../../assets/images/home-page/caroffers-carousel/unnamed.png',
        BrandImgSrc:'../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
        PriceBefor:6000,
        PriceAfter:4000,
      },
    ]



  }

}
