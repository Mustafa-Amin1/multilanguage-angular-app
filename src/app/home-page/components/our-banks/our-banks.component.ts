import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-banks',
  templateUrl: './our-banks.component.html',
  styleUrls: ['./our-banks.component.scss']
})
export class OurBanksComponent implements OnInit {

  constructor() { }
  public bankMarks =[]

  ngOnInit(): void {
    this.bankMarks =[
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/home-page/caroffers-carousel/Rectangle 30.png',
      },
    ]
  }
  // form text box height 100%
  public seeMore() {
    let txt = document.getElementById('paragraphTxt')
    txt.classList.toggle('seeMoreClicked')
  }
}
