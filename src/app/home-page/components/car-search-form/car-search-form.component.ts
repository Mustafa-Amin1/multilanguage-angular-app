import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SliderModule, SliderComponent } from '@syncfusion/ej2-angular-inputs';
import { SliderTooltipEventArgs, SliderTickEventArgs } from '@syncfusion/ej2-inputs';
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
  constructor() { }

  //slider
  public type: string ="Range";
  public value: number[] = [30, 70];
  public tooltip: object= { isVisible: true };
  public min: number = 0;
  public max: number = 100;
  public limits: object = { enabled: false, minStart: 10, minEnd: 40, maxStart: 60, maxEnd: 90 };

  // dropdownlist

      // define the JSON of data
      public carMarksData: Object[] = [
        { Id: 'mark1', Mark: 'كل الماركات' },
        { Id: 'Mark2', Mark: 'Lada' },
        { Id: 'Mark3', Mark: 'BMW' },
        { Id: 'mark4', Mark: 'Audi' },
    ];
       // maps the local data column to fields property
       public carMarksFields: Object = { text: 'Mark', value: 'Id' };
       // set the placeholder to DropDownList input element
       public carMarksWaterMark: string = 'كل الماركات';

             // define the JSON of data
      public carModelsData: Object[] = [
        { Id: 'Model1', Model: 'كل الماركات' },
        { Id: 'Model2', Model: 'Lada' },
        { Id: 'Model3', Model: 'BMW' },
        { Id: 'Model4', Model: 'Audi' },
    ];
       // maps the local data column to fields property
       public carModelsFields: Object = { text: 'Model', value: 'Id' };
       // set the placeholder to DropDownList input element
       public carModelsWaterMark: string = 'كل الماركات';
  ngOnInit(): void {
    setTimeout(() => {

    });
  }

  onSubmit() {
    debugger;
    alert('hello')
    console.log(this.searchForm.value)
  }

}


