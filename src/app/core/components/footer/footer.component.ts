import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor() { }
  public smallScreens= false
  ngOnInit(): void {

    // for small screens
    if(window.innerWidth <= 768) {
      this.smallScreens = true
    }else {
      this.smallScreens = false
    }
console.log(this.smallScreens );

  }

}
