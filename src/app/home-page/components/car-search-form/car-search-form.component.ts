import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { SliderModule, SliderComponent } from '@syncfusion/ej2-angular-inputs';
import { SliderModule, SliderComponent, TooltipPlacement, TooltipShowOn, LimitDataModel } from '@syncfusion/ej2-angular-inputs';
import { SliderTooltipEventArgs, SliderTickEventArgs } from '@syncfusion/ej2-inputs';
import { TranslateService } from '@ngx-translate/core';
import { enableRtl } from '@syncfusion/ej2-base';
// enableRtl(true)
@Component({
  selector: 'app-car-search-form',
  templateUrl: './car-search-form.component.html',
  styleUrls: ['./car-search-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
// var slider = new Slider('#ex2', {});

export class CarSearchFormComponent implements OnInit {

  public searchForm: FormGroup = new FormGroup({
    PriceRange: new FormControl(null, [Validators.required]),
    CarMark: new FormControl(null, [Validators.required]),
    CarModel: new FormControl(null, [Validators.required])
  })
  constructor(public translate: TranslateService) { }

  //slider
  @ViewChild('rangeslider')
  public rangevalue: Number[] = [30, 500];
  // public showButtons: boolean = true;
  public rangetype: string = 'Range';
  public tooltip: Object = {
    placement: 'Before',
    isVisible: true,
    showOn: 'Focus',
    format: 'SAR ##.##'
}
  // public tooltip: object= { isVisible: true };
  public min: number = 0;
  public max: number = 1000;
  public minRangeLimits: LimitDataModel  = { enabled: false, minStart: 10, minEnd: 40, maxStart: 60, maxEnd: 100 };

  // dropdownlist
      // define the JSON of data
      public carMarksData: Object[] = [
        { Id: 'Mark2', Mark: 'Lada' },
        { Id: 'Mark3', Mark: 'BMW' },
        { Id: 'mark4', Mark: 'Audi' },
      ];
       // maps the local data column to fields property
       public carMarksFields: Object = { text: 'Mark', value: 'Id' };
       // set the placeholder to DropDownList input element
       public carMarksWaterMark: string ;

             // define the JSON of data
      public carModelsData: Object[] = [
        { Id: 'Model2', Model: 'Lada' },
        { Id: 'Model3', Model: 'BMW' },
        { Id: 'Model4', Model: 'Audi' },
    ];

       // maps the local data column to fields property
       public carModelsFields: Object = { text: 'Model', value: 'Id' };
       // set the placeholder to DropDownList input element
      //  public carModelsWaterMark: {} = {
      //    en: 'hello',
      //    ar: 'مرحبا'
      //  };
       public carModelsWaterMark : string ;
  ngOnInit(): void {

    this.translate.onLangChange.subscribe(() => {
      // change place holder
      if(this.translate.currentLang == 'ar') {
        this.carMarksWaterMark = ' كل الماركات'
        this.carModelsWaterMark = ' كل الموديلات'

      }else {
        this.carMarksWaterMark = ' All Marks'
        this.carModelsWaterMark = ' All Brands'
      }
    })
  }

  onSubmit() {
    ;
    alert('hello')
    console.log(this.searchForm.value)
  }

}


