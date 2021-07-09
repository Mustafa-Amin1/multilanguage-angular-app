import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'UI';
  public main=""
  public selectedLang= "'currentTheme' | translate"
  public currentLang ;
  ngOnInit() :void {
    this.currentLang = localStorage.getItem('selectedLang')
    console.log(this.currentLang)

    debugger
    if (this.selectedLang == 'ar') {
      this.main = 'rtl'
    }else {
      this.main = ''
    }
  }
}
