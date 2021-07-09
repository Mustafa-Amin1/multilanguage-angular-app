import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SliderComponent, LimitDataModel, TooltipDataModel, SliderType } from '@syncfusion/ej2-angular-inputs';
import { TranslateService } from '@ngx-translate/core';
import { enableRtl } from '@syncfusion/ej2-base';
// enableRtl(true)
@Component({
  selector: 'app-car-search-form',
  templateUrl: './car-search-form.component.html',
  styleUrls: ['./car-search-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CarSearchFormComponent implements OnInit {
  constructor(public translate: TranslateService) { }


  public searchForm: FormGroup = new FormGroup({
    PriceRange: new FormControl([0, 1000], [Validators.required]),
    CarMark: new FormControl(null, [Validators.required]),
    CarModel: new FormControl(null, [Validators.required])
  })
  //  start price range slider
  @ViewChild('range')
  public rangeObj: SliderComponent;
  public min: number = 0;
  public max: number = 2000;
  public minValue: number = 300;
  public rangeValue: number[] = [300, 600];
  public minType: SliderType = 'MinRange';
  public rangetype: SliderType = 'Range';
  public tooltip: TooltipDataModel = {
    placement: 'Before',
    isVisible: true,
    showOn: 'Focus',
    format: 'SAR ####'
  };
  public rangeLimits: LimitDataModel = { enabled: false, minStart: this.min, minEnd: this.rangeValue[0], maxEnd: this.max };
  //  End price range slider

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
  public carMarksWaterMark: string;

  // define the JSON of data
  public carModelsData: Object[] = [
    { Id: 'Model2', Model: 'Lada' },
    { Id: 'Model3', Model: 'BMW' },
    { Id: 'Model4', Model: 'Audi' },
  ];

  // maps the local data column to fields property
  public carModelsFields: Object = { text: 'Model', value: 'Id' };

  public carModelsWaterMark: string;
  ngOnInit(): void {
    debugger;

  // set the placeholder to DropDownList input element
    this.translate.onLangChange.subscribe(() => {
      // change place holder
      if (this.translate.currentLang == 'ar') {
        this.carMarksWaterMark = ' كل الماركات'
        this.carModelsWaterMark = ' كل الموديلات'

      } else {
        this.carMarksWaterMark = ' All Marks'
        this.carModelsWaterMark = ' All Brands'
      }
    })
  }

  onSubmit() {
debugger;
    alert('hello')
    console.log(this.searchForm.value)
    console.log('hello')
  }

}


