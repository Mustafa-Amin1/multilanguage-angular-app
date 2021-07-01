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
        agancyImgSrc: '../../../../assets/images/marks/5c9ceee06184a1553788640.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5ca8e47aee4661554572410.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5cac59dd94bf71554799069.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5cadac1a432af1554885658.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5caf141da42881554977821.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5cb2d8529843f1555224658.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5cb5b1c4e0aab1555411396.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5cb82caa8c0551555573930.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5cbc1b1c8fde31555831580.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5cbc3c3ccd0b51555840060.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5cc959329fb9a1556699442.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5cd87c5bc46c91557691483.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5ce9306fbb95e1558786159.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5cf3d0f2c58bf1559482610.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5d0de79b5d5541561192347.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5d5d0bd1a60991566378961.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5d18bcd7b1fb51561902295.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5d60db52bdff71566628690.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5d67a0c97dc181567072457.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5daf3596afa3b1571763606.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5e5f839e875321583317918.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5e53cea14ee651582550689.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5e54d1712b32c1582616945.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5e54d56954ddc1582617961.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5e537e28140781582530088.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5e538b83b69681582533507.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5e5378b233cb91582528690.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5e5382d83439e1582531288.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5e5390c39c5e01582534851.svg',
      },
      {
        agancyImgSrc: '../../../../assets/images/marks/5e513903cbefd1582381315.svg',
      },
    ]
  }
  // form text box height 100%
  public seeMore() {
    let txt = document.getElementById('paragraphTxt')
    txt.classList.toggle('seeMoreClicked')
  }
}
