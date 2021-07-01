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
        bankMarkImgSrc: '../../../../assets/images/banks/5eb30b197b0bc1588792089.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/banks/5eb32ecaac62d1588801226.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/banks/5eb313e41ebad1588794340.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/banks/5eb3149e192091588794526.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/banks/5eb31448c4a7a1588794440.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/banks/5f0ca542100c31594664258.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb32a2ac42051588800042.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb32b230b41a1588800291.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb32f56994e71588801366.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb32fa725a7f1588801447.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb33a06908e01588804102.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb33f7fad6fe1588805503.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb332e45bd5a1588802276.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb335e7a11851588803047.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb336e794b761588803303.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb340a19bd201588805793.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb341c3aaac51588806083.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb3312a45f361588801834.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb3350be4e5b1588802827.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb3358c4ba6d1588802956.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb3366a41f1e1588803178.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb3380fee4431588803599.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb3412a1cafa1588805930.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb3422e228491588806190.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb33325a83f61588802341.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb33772d3e551588803442.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb3387422f881588803700.svg',
      },
      {
        bankMarkImgSrc: '../../../../assets/images/finance-agancies/5eb34293c65311588806291.svg',
      },

    ]
  }
  // form text box height 100%
  public seeMore() {
    let txt = document.getElementById('paragraphTxt')
    txt.classList.toggle('seeMoreClicked')
  }
}
