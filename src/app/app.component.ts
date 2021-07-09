import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'UI';
  public main=""
  public selectedLang= "'currentTheme' | translate"
  public currentLang = 'ar';
  constructor(public translate: TranslateService) { }
  public language = 'Arabic';

  languageChanged (language: string) {
    this.language = language;
    console.log(language);
  }
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
