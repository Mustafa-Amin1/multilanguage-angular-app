import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-car-offers',
  templateUrl: './car-offers.component.html',
  styleUrls: ['./car-offers.component.scss']
})
export class CarOffersComponent implements OnInit {
  public isAllCars = false

  constructor(public translate: TranslateService) { }
  @Input()
  routerLinkActive: string | string[]
  ngOnInit(): void {
  }

  public toggleSections(e) {
    let offerLinksArr = Array.from(document.querySelectorAll('.carOffers_sections-link'))
    let clickedLink = e.target
    for (let link of offerLinksArr) {
      if (link.innerHTML === clickedLink.innerHTML) {
        link.classList.add('carOffers_sections-link-active')
      } else {
        link.classList.remove('carOffers_sections-link-active')
      }
    }
    if (clickedLink.classList.contains('offers')) {
      this.isAllCars = false
    } else {
      this.isAllCars = true
    }
  }
}
