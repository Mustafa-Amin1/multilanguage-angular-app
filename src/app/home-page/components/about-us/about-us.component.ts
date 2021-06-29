import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // form text box height 100%
  public seeMore() {
    let txt = document.getElementById('paragraphTxt')
    txt.classList.toggle('seeMoreClicked')
  }
}
