import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Swiper,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

@Component({
  selector: 'app-services-carousel',
  templateUrl: './services-carousel.component.html',
  styleUrls: ['./services-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // form text box height 100%
  public seeMore() {
    let txt = document.getElementById('paragraphTxt')
    txt.classList.toggle('seeMoreClicked')
  }
}
