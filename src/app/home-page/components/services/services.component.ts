import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(public translate: TranslateService) { }
  // content text translation
  public response = {
    HighLightedText: { en: '', ar: '' },
    Text1: { en: '', ar: '' },
    Text2: { en: '', ar: '' },
    Text3: { en: '', ar: '' },
  }
  ngOnInit(): void {
    this.response.HighLightedText = {
      en: 'this String',
      ar: ' هذا النص'
    }
    this.response.Text1 = {
      en: ' It is an example of a text that can be replaced in the same space. This text was generated from the Arabic text generator, where you can generate such text or many other texts in addition to increasing the number of characters generated by the application',
      ar: '    هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق .'
    }
    this.response.Text2 = {
      en: 'If you need a larger number of paragraphs, the Arabic text generator allows you to increase the number of paragraphs as you want, the text will not appear divided and does not contain language errors, the Arabic text generator is useful for web designers in particular, where the customer often needs to see a real picture for site design.',
      ar: '   إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.'
    }
    this.response.Text3 = {
      en: 'Hence, the designer must put temporary texts on the design to show the client the complete form. The role of the Arabic text generator is to save the designer the trouble of searching for an alternative text that has nothing to do with the topic that the design is talking about, so it appears in an inappropriate manner.',
      ar: '  ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر  على  المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
    }
  }

  // form text box height 100%
  public seeMore() {
    let txt = document.getElementById('paragraphTxt')
    txt.classList.toggle('seeMoreClicked')
  }
}
