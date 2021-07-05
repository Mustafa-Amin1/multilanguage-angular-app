import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Swiper,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

@Component({
  selector: 'app-services-carousel',
  templateUrl: './services-carousel.component.html',
  styleUrls: ['./services-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesCarouselComponent implements OnInit {

  constructor(public translate: TranslateService) { }
  public response ;

  ngOnInit(): void {
    this.response =
    {
      en: [
        {
          iconSrc: '../../../../assets/images/home-page/services-carousel/img1.svg' ,
          itemTitle:'Full Guarantee',
          txtHighlighted: 'Lorem Ipsum',
          itemTxt: 'It is simply a formal text (meaning that the purpose is form, not content) and is used in the printing and publishing industries. Lorem Ipsum has been the standard for formal text since the fifteenth century when an unknown printing press randomly stacked a set of characters from a text, to form a pamphlet as a guide or formal reference for these characters.'
        },
        {
          iconSrc: '../../../../assets/images/home-page/services-carousel/img2.svg' ,
          itemTitle:'Lowest price',
          txtHighlighted: 'Lorem Ipsum',
          itemTxt: 'It is simply a formal text (meaning that the purpose is form, not content) and is used in the printing and publishing industries. Lorem Ipsum has been the standard for formal text since the fifteenth century when an unknown printing press randomly stacked a set of characters from a text, to form a pamphlet as a guide or formal reference for these characters.'
        },
        {
          iconSrc: '../../../../assets/images/home-page/services-carousel/img3.svg' ,
          itemTitle:'Way Services',
          txtHighlighted: 'Lorem Ipsum',
          itemTxt: 'It is simply a formal text (meaning that the purpose is form, not content) and is used in the printing and publishing industries. Lorem Ipsum has been the standard for formal text since the fifteenth century when an unknown printing press randomly stacked a set of characters from a text, to form a pamphlet as a guide or formal reference for these characters.'
        },
        {
          iconSrc: '../../../../assets/images/home-page/services-carousel/img4.svg' ,
          itemTitle:'Mobile Apps',
          txtHighlighted: 'Lorem Ipsum',
          itemTxt: 'It is simply a formal text (meaning that the purpose is form, not content) and is used in the printing and publishing industries. Lorem Ipsum has been the standard for formal text since the fifteenth century when an unknown printing press randomly stacked a set of characters from a text, to form a pamphlet as a guide or formal reference for these characters.'
        },
        {
          iconSrc: '../../../../assets/images/home-page/services-carousel/img1.svg' ,
          itemTitle:'Full Guarantee',
          txtHighlighted: 'Lorem Ipsum',
          itemTxt: 'It is simply a formal text (meaning that the purpose is form, not content) and is used in the printing and publishing industries. Lorem Ipsum has been the standard for formal text since the fifteenth century when an unknown printing press randomly stacked a set of characters from a text, to form a pamphlet as a guide or formal reference for these characters.'
        },
      ]
      ,
      ar: [
        {
          iconSrc: '../../../../assets/images/home-page/services-carousel/img1.svg' ,
          itemTitle:'ضمان كامل',
          txtHighlighted: 'لوريم إيبسوم(Lorem Ipsum)',
          itemTxt: 'هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.'
        },
        {
          iconSrc: '../../../../assets/images/home-page/services-carousel/img2.svg' ,
          itemTitle:'اقل سعر',
          txtHighlighted: 'لوريم إيبسوم(Lorem Ipsum)',
          itemTxt: 'هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.'
        },
        {
          iconSrc: '../../../../assets/images/home-page/services-carousel/img3.svg' ,
          itemTitle:'خدمات الطريق',
          txtHighlighted: 'لوريم إيبسوم(Lorem Ipsum)',
          itemTxt: 'هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.'
        },
        {
          iconSrc: '../../../../assets/images/home-page/services-carousel/img4.svg' ,
          itemTitle:'تطبيق للجوالات',
          txtHighlighted: 'لوريم إيبسوم(Lorem Ipsum)',
          itemTxt: 'هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.'
        },
        {
          iconSrc: '../../../../assets/images/home-page/services-carousel/img2.svg' ,
          itemTitle:'اقل سعر',
          txtHighlighted: 'لوريم إيبسوم(Lorem Ipsum)',
          itemTxt: 'هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.'
        },
      ]
    }
    console.log(this.response)
  }


  // form text box height 100%
  public seeMore() {
    let txt = document.getElementById('paragraphTxt')
    txt.classList.toggle('seeMoreClicked')
  }
}
