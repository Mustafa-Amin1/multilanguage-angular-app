import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *********************** modules ******************
// home page module

//components
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeModule } from './home-page/home.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:"ar",
      loader: {
        // provide: TranslateHttpLoader,
        provide: TranslateLoader,
        // useClass: TranslateFakeLoader,
        useFactory: CreateTranslateLoader,
        deps: [HttpClient],
      },

    }),
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    SliderModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//language function
export function CreateTranslateLoader(http:HttpClient) {
  return new TranslateHttpLoader(http,'../assets/i18n/','.json')
}
