import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('expandedAnimation', [
      state(
        'opened',
        style({
          width: '100%',
          opacity: 1,
          right: '0px'
        })
      ),
      state(
        'closed',
        style({
          width: '0%',
          opacity: 0,
          right: '-100%'

        })
      ),
      transition('opened => closed', animate('400ms ease-in-out')),
      transition('closed => opened', animate('400ms ease-in-out'))
    ]),
  ]
})
export class NavbarComponent implements OnInit {
  public isCollapsed = false;
  public smallScreens = false
  public menuState: string = 'closed';

  public selectedLanguageImg =''
  public selectedLanguage ='Arabic'
  constructor(public translate: TranslateService) { }
  ngOnInit(): void {
    this.selectLanguageChange()
  }
  // public selectedLanguageImg ='../../../../assets/images/languages/iconfinder_16014_england_english_flag_great britain_inghilterra_icon_48px.png'

  public toggleMenu() {
    this.menuState = this.menuState === 'closed' ? 'opened' : 'closed';
    console.log(this.menuState);
    let toggleBtn = document.getElementById('toggleBtn')
    let toggleBtnIcon = document.getElementById('toggleBtnIcon')
    toggleBtnIcon.classList.toggle('active')
    toggleBtn.classList.toggle('active')
  }


  public selectLanguageChange() {
    debugger;

    console.log(this.selectedLanguage)
    let bodyTag = document.getElementsByTagName('body')[0]

// change language flag src
    if(this.selectedLanguage== 'English') {
      // change app direction
      bodyTag.classList.add('direction-ltr')
      bodyTag.classList.remove('direction-rtl')
      this.selectedLanguageImg= "../../../../assets/images/languages/iconfinder_16014_england_english_flag_great britain_inghilterra_icon_48px.png"
       // change app language
       this.translate.use('en')
       localStorage.setItem('selectedLang','en')

    }else {
      // change app direction
      bodyTag.classList.add('direction-rtl')
      bodyTag.classList.remove('direction-ltr')
      this.selectedLanguageImg= "../../../../assets/images/languages/iconfinder_32326_saudi_flag_arabia_arabic_icon_48px.png"
        // change app language
        this.translate.use('ar')
        localStorage.setItem('selectedLang','ar')
    }

  }

}
