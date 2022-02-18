import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvComponent } from './CVAPP/cv/cv.component';
import { CvlisteComponent } from './CVAPP/cvliste/cvliste.component';
import { CvitemComponent } from './CVAPP/cvitem/cvitem.component';
import { CvdetailComponent } from './CVAPP/cvdetail/cvdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    CvlisteComponent,
    CvitemComponent,
    CvdetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
