import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherwidgetComponent } from './weatherwidget/weatherwidget.component';
import { LocationwidgetComponent } from './locationwidget/locationwidget.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherwidgetComponent,
    LocationwidgetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
