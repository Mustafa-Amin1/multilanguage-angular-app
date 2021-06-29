import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent implements OnInit {

  constructor() { }
public agancyImgs =[]
  ngOnInit(): void {
    this.agancyImgs =[
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
      {
        agancyImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 35.png',
      },
    ]
  }
  // form text box height 100%
  public seeMore() {
    let txt = document.getElementById('paragraphTxt')
    txt.classList.toggle('seeMoreClicked')
  }
}
