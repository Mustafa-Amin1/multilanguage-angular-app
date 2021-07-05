import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {
  Lazy,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Swiper,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Lazy, Navigation, Pagination, Mousewheel, Keyboard]);

@Component({
  selector: 'app-carousel1',
  templateUrl: './carousel1.component.html',
  styleUrls: ['./carousel1.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class Carousel1Component implements OnInit {
  public images = [
    {path: '../../../../assets/images/home-page/carousel/carousel1.png'},
    {path: '../../../../assets/images/home-page/carousel/carousel2.png'},
    {path: '../../../../assets/images/home-page/carousel/carousel3.png'},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
