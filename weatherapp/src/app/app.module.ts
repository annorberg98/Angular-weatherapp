import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
